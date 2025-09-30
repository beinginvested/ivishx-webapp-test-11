// === Project: ivishX AI Trading Assistant ===
// GitHub-Ready Folder Structure

// File: .env.local.example

NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
OPENAI_API_KEY=your_openai_key


// File: README.md

# ivishX AI Trading Assistant (Firebase + GPT-4 Vision)

A full-stack app where users upload TradingView charts, and ivishX (GPT-4 Vision) returns trade setups based on EMAs, Fib, CHoCH, RSI, MACD.

## ✨ Features
- User Auth (Firebase)
- Chart image upload to Firebase Storage
- GPT-4 Vision API analysis with ivishX prompt
- Signal saved to Firestore
- History view for each user

## 🛠️ Stack
- Frontend: Next.js + Tailwind CSS
- Auth/DB: Firebase Auth, Firestore, Storage
- AI: OpenAI GPT-4 Vision

## 📦 Setup

```bash
git clone https://github.com/your-username/ivishx-trading-app.git
cd ivishx-trading-app
npm install
```

1. Copy `.env.local.example` to `.env.local`
2. Fill in Firebase + OpenAI keys
3. Enable Firebase Auth, Firestore, Storage in Firebase Console

## 🚀 Run Locally

```bash
npm run dev
```

Then go to [http://localhost:3000](http://localhost:3000)

## 🔐 Firebase Security Rules
Add this to Firestore Rules:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/signals/{signalId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

And for Storage:
```js
service firebase.storage {
  match /b/{bucket}/o {
    match /charts/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📤 Deploy
- Use [Vercel](https://vercel.com) for frontend deployment
- Or deploy via Firebase Hosting if using CLI

## 📧 License
MIT

---

You're ready to build your trading assistant like a pro. DM me on Telegram or open a GitHub issue for support.

---

// Your existing files (`ivishxPrompt.ts`, `ImageUpload.tsx`, `dashboard.tsx`, `index.tsx`, `client.ts`) remain unchanged in their respective folders.

// Push all files to a GitHub repo to go live.
