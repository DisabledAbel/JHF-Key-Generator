# 🔐 JHFvcKey

JHFvcKey is a simple, offline-capable password generator that helps create stronger passwords using a consistent personal format.

It runs entirely in the browser, stores nothing, and works even without internet once installed.

---

## What is JHFvcKey?

JHFvcKey follows this structure:

JHFvX + Site Tag + Your Password + Random Numbers

Example:
JHFv2GHMySecret!483

- JHFvX → Version (v1, v2, etc.)
- Site Tag → Short label like GH (GitHub), GG (Google), DC (Discord)
- Your Password → The part only you know
- Random Numbers → Added automatically for extra security

---

## Features

- Version selector (JHFv1, JHFv2)
- Site tags for different services
- Show / hide password toggle
- Password strength meter (Weak / Medium / Strong)
- Adjustable random number length
- One-click copy to clipboard
- Works offline (PWA)
- Installable like an app (iOS, Android, Desktop)
- No tracking, no storage, no backend

---

## Privacy & Safety

- Passwords are never saved
- Nothing is sent to any server
- No analytics
- No accounts
- Everything runs locally on your device

Think of it like a calculator — it helps you create something, but it doesn’t remember it.

---

## Tech Stack

- HTML
- CSS
- JavaScript
- Progressive Web App (PWA)
- Vercel (static hosting)

---

## License

MIT License
