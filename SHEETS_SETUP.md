# Google Sheets Waitlist — Setup Guide

Follow these steps once to connect the `/consumers` waitlist form to a Google Sheet.

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Name it **Verix Waitlist** (or anything you like).
3. Rename the first tab to **Waitlist** (must match `GOOGLE_SHEET_TAB` in `.env.local`).
4. Add these headers in row 1:

| A | B | C | D |
|---|---|---|---|
| Timestamp | Name | Email | Phone |

5. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/COPY_THIS_PART/edit
   ```
   Paste it as `GOOGLE_SHEET_ID` in `.env.local`.

---

## Step 2 — Create a Google Cloud Service Account

1. Go to [console.cloud.google.com](https://console.cloud.google.com).
2. Create a new project (or select an existing one).
3. Navigate to **APIs & Services → Library** and enable the **Google Sheets API**.
4. Navigate to **APIs & Services → Credentials → Create Credentials → Service Account**.
5. Give it any name (e.g. `verix-sheets-writer`). Click **Done**.
6. Open the service account you just created → **Keys** tab → **Add Key → Create new key → JSON**.
7. A `.json` file downloads automatically — keep it safe, treat it like a password.

---

## Step 3 — Share the Sheet with the Service Account

1. Open the downloaded JSON and copy the `client_email` field
   (looks like `verix-sheets-writer@your-project.iam.gserviceaccount.com`).
2. In Google Sheets, click **Share** and paste that email as an **Editor**.

---

## Step 4 — Add credentials to `.env.local`

Open the JSON key file in a text editor and paste its **entire contents** as a single line
(no line breaks) into `.env.local`:

```env
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
GOOGLE_SHEET_ID=1aBcDeFgHiJkLmNoPqRsTuVwXyZ
GOOGLE_SHEET_TAB=Waitlist
```

> **Tip:** on macOS you can copy the JSON as one line with:
> ```bash
> cat ~/Downloads/your-key-file.json | tr -d '\n' | pbcopy
> ```
> Then paste directly into `.env.local`.

---

## Step 5 — Restart the dev server

```bash
# Stop the running server (Ctrl+C), then:
npm run dev
```

Submit the form on `/consumers` — a new row should appear in the Sheet within seconds.

---

## Viewing submissions

Open the Google Sheet at any time. Each row contains:

| Timestamp (UTC) | Name | Email | Phone |
|---|---|---|---|
| 2026-05-25 14:03:22 | Jane Smith | jane@example.com | +1 555 000 0000 |

You can sort, filter, and export the sheet like any spreadsheet.

---

## Production deployment

When deploying to Vercel (or any host), add the three environment variables
in the hosting dashboard under **Project Settings → Environment Variables**:

- `GOOGLE_SERVICE_ACCOUNT_JSON`
- `GOOGLE_SHEET_ID`
- `GOOGLE_SHEET_TAB`

`.env.local` is gitignored and never committed.
