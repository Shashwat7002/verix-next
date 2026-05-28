"use server";

import { google } from "googleapis";

/* ─── Types ─── */
export type InvestorResult =
  | { ok: true }
  | { ok: false; error: string };

const VALID_INQUIRY_TYPES = [
  "Equity Investment",
  "Strategic Partnership",
  "Distribution / Channel",
  "Other",
] as const;

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
export async function submitInvestor(
  formData: FormData
): Promise<InvestorResult> {
  const name         = String(formData.get("name")         ?? "").trim();
  const email        = String(formData.get("email")        ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const role         = String(formData.get("role")         ?? "").trim();
  const inquiryType  = String(formData.get("inquiryType")  ?? "").trim();
  const message      = String(formData.get("message")      ?? "").trim();

  /* ── Validation ── */
  if (!name)         return { ok: false, error: "Full name is required." };
  if (!email)        return { ok: false, error: "Work email is required." };
  if (!validateEmail(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!organization) return { ok: false, error: "Fund or organization name is required." };
  if (!role)         return { ok: false, error: "Your role is required." };
  if (!inquiryType || !VALID_INQUIRY_TYPES.includes(inquiryType as typeof VALID_INQUIRY_TYPES[number]))
    return { ok: false, error: "Please select a nature of inquiry." };
  if (!message)      return { ok: false, error: "Please include a message." };
  if (name.length > 120)         return { ok: false, error: "Name is too long." };
  if (organization.length > 120) return { ok: false, error: "Organization name is too long." };
  if (role.length > 120)         return { ok: false, error: "Role is too long." };
  if (message.length > 2000)     return { ok: false, error: "Message is too long (max 2000 characters)." };

  /* ── Check env vars ── */
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    console.error("[investor] GOOGLE_SHEET_ID is not set.");
    return { ok: false, error: "Our contact form is temporarily unavailable. Please try again later." };
  }

  const tab = process.env.GOOGLE_INVESTOR_TAB ?? "Investor Inquiries";

  try {
    const auth   = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    /* Append: Timestamp | Name | Email | Organization | Role | Inquiry Type | Message */
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${tab}!A:G`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          new Date().toLocaleString("en-US", { timeZone: "UTC", hour12: false }),
          name,
          email,
          organization,
          role,
          inquiryType,
          message,
        ]],
      },
    });

    return { ok: true };
  } catch (err) {
    console.error("[investor] Google Sheets error:", err);
    return {
      ok: false,
      error: "Something went wrong on our end. Please try again.",
    };
  }
}
