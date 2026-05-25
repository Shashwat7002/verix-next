"use server";

import { google } from "googleapis";

/* ─── Types ─── */
export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: string };

/* ─── Helpers ─── */
function getAuth() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not set.");

  let credentials: Record<string, string>;
  try {
    credentials = JSON.parse(raw);
  } catch {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON.");
  }

  return new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ─── Server Action ─── */
export async function submitWaitlist(
  formData: FormData
): Promise<WaitlistResult> {
  const name  = String(formData.get("name")  ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  /* ── Validation ── */
  if (!name)               return { ok: false, error: "Full name is required." };
  if (!email)              return { ok: false, error: "Email address is required." };
  if (!validateEmail(email)) return { ok: false, error: "Please enter a valid email address." };
  if (name.length > 120)   return { ok: false, error: "Name is too long." };
  if (phone.length > 30)   return { ok: false, error: "Phone number is too long." };

  /* ── Check env vars are configured ── */
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    console.error("[waitlist] GOOGLE_SHEET_ID is not set.");
    return { ok: false, error: "Waitlist is temporarily unavailable. Please try again later." };
  }

  const tab = process.env.GOOGLE_SHEET_TAB ?? "Waitlist";

  try {
    const auth   = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    /* Append a new row: Timestamp | Name | Email | Phone */
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${tab}!A:D`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          new Date().toLocaleString("en-US", { timeZone: "UTC", hour12: false }),
          name,
          email,
          phone || "—",
        ]],
      },
    });

    return { ok: true };
  } catch (err) {
    console.error("[waitlist] Google Sheets error:", err);
    return {
      ok: false,
      error: "Something went wrong on our end. Please try again.",
    };
  }
}
