"use client";

/**
 * FaceCapture — live, camera-only capture for account sign-in.
 *
 * There is no file input and no drag-and-drop, by design: a still photograph of
 * an enrolled customer must not be a way into their payment history.
 *
 * BE HONEST ABOUT WHAT THIS BUYS. Removing the upload path raises the effort of
 * an attack; it does not verify anything. The frames below are posted to the
 * server exactly as an uploaded file would be, and devtools or a virtual camera
 * produce an identical request. Liveness can only be established server-side,
 * across multiple frames, which is why this captures a sequence around a
 * deliberate head movement rather than one snapshot — the sequence is what the
 * hardened backend endpoint will need. See ACCOUNT_LOGIN.md.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Phase = "idle" | "starting" | "centre" | "turn" | "back" | "sending" | "error";

const PROMPTS: Record<string, string> = {
  centre: "Look straight at the camera",
  turn: "Now turn your head slowly to the left",
  back: "And back to centre",
  sending: "Checking…",
};

export default function FaceCapture() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const framesRef = useRef<Blob[]>([]);

  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState("");
  const [noCamera, setNoCamera] = useState(false);

  /* ─── Teardown ───
     The camera light staying on after a failed sign-in is alarming and reads
     as the page still watching. Stop tracks on every exit path. */
  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => stopCamera, [stopCamera]);

  /* ─── Capture one JPEG from the live video ─── */
  const grabFrame = useCallback(async (): Promise<Blob | null> => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return null;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d")?.drawImage(video, 0, 0);

    return new Promise((resolve) =>
      canvas.toBlob((b) => resolve(b), "image/jpeg", 0.92)
    );
  }, []);

  const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

  /* ─── The challenge sequence ─── */
  const run = useCallback(async () => {
    setError("");
    setPhase("starting");
    framesRef.current = [];

    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
      setNoCamera(true);
      setPhase("error");
      setError("This browser cannot open a camera on an insecure connection.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch (err) {
      // Permission denied and no-camera-present are different problems with
      // different fixes, so they get different copy.
      const name = (err as DOMException)?.name;
      setNoCamera(name === "NotFoundError" || name === "OverconstrainedError");
      setPhase("error");
      setError(
        name === "NotAllowedError"
          ? "Camera access was blocked. Allow it in your browser settings and try again."
          : "No camera is available on this device."
      );
      return;
    }

    try {
      // Let exposure and focus settle — the first frame off a cold sensor is
      // reliably the worst one, and a bad probe reads to the user as "it did
      // not recognise me" rather than "it photographed a grey smear".
      await wait(700);

      for (const step of ["centre", "turn", "back"] as const) {
        setPhase(step);
        await wait(step === "centre" ? 600 : 1100);
        const a = await grabFrame();
        if (a) framesRef.current.push(a);
        await wait(350);
        const b = await grabFrame();
        if (b) framesRef.current.push(b);
      }

      stopCamera();
      setPhase("sending");

      if (framesRef.current.length === 0) {
        setPhase("error");
        setError("The camera did not produce a usable image. Please try again.");
        return;
      }

      const body = new FormData();
      framesRef.current.forEach((f, i) => body.append("frames", f, `frame-${i}.jpg`));

      const res = await fetch("/api/auth/face-login", { method: "POST", body });
      const json = (await res.json()) as { ok: boolean; error?: string };

      if (json.ok) {
        // Server component reads the fresh cookie on the next render.
        router.replace("/account");
        router.refresh();
        return;
      }

      setPhase("error");
      setError(json.error ?? "Sign-in failed. Please try again.");
    } catch (err) {
      console.error("[face-capture]", err);
      stopCamera();
      setPhase("error");
      setError("Something went wrong during capture. Please try again.");
    }
  }, [grabFrame, router, stopCamera]);

  const live = phase === "centre" || phase === "turn" || phase === "back";
  const busy = phase === "starting" || live || phase === "sending";

  return (
    <div className="face-capture">
      <div className="face-stage" data-live={live || undefined}>
        <video
          ref={videoRef}
          className="face-video"
          playsInline
          muted
          autoPlay
          aria-label="Camera preview"
        />
        {!busy && <div className="face-placeholder" aria-hidden="true">◎</div>}
        {busy && (
          <p className="face-prompt" role="status" aria-live="polite">
            {PROMPTS[phase] ?? "Starting camera…"}
          </p>
        )}
      </div>

      {phase === "error" && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <button
        type="button"
        className="btn btn-violet"
        onClick={run}
        disabled={busy}
        aria-busy={busy}
      >
        {busy ? "Hold still…" : phase === "error" ? "Try again" : "Sign in with your face"}
      </button>

      {noCamera && (
        <p className="form-fine">
          No camera on this device? Sign-in by email is not available yet — it is
          the next thing being built. For now, please use a device with a camera.
        </p>
      )}

      <p className="form-fine">
        Your camera is used only to sign you in. Frames are sent to Verix to
        match against your enrolment and are not stored by this website. See our{" "}
        <a href="/privacy" className="form-fine-link">Privacy Policy</a>.
      </p>
    </div>
  );
}
