# 🔗 URL Shortener App (React + TypeScript)

This is a simple URL shortener built with **React**, **TypeScript**, and **localStorage**. Users can input long URLs, generate a shortened version, and be redirected automatically when accessing the shortened link. Basic click analytics are also tracked locally.

---

## 🚀 Features

- ✅ Shorten any valid URL
- ✅ Redirect to original URLs using unique codes
- ✅ View list of generated shortened links
- ✅ Track clicks per shortened URL (local only)
- ✅ No backend required (uses localStorage)

---

## 🛠️ Tech Stack

- React (w/ TypeScript)
- React Router DOM
- LocalStorage (to store URL mappings and analytics)
- Tailwind CSS (or custom CSS)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── UrlForm.tsx
│   ├── UrlList.tsx
│   ├── UrlStatsTable.tsx
│   └── ErrorAlert.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Stats.tsx
│   ├── RedirectHandler.tsx
│   └── NotFound.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── services/
│   ├── storageService.ts
│   ├── locationService.ts
│   └── analyticsService.ts
│
├── utils/
│   ├── helpers.ts
│   └── validation.ts
│
├── App.tsx
├── index.tsx
├── theme.tsx
└── styles.css
```

---

## 🧪 How It Works

1. User enters a long URL.
2. App generates a short code (e.g., `abc123`) and saves `code -> original URL` in localStorage.
3. User gets a shortened URL like `http://localhost:3000/abc123`.
4. When the user or anyone visits that URL, the app:
   - Looks up the original URL using the code
   - Tracks a click (in memory)
   - Redirects the user

---

## 📦 Installation

```bash
git clone https://github.com/your-username/url-shortener-app.git
cd url-shortener-app
npm install
```

---

## 🧑‍💻 Running the App

```bash
npm run dev    # or npm start for create-react-app


