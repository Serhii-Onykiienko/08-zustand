# 📝 NoteHub

**NoteHub** is a modern note management application built with **Next.js, React, and TypeScript**.

The application allows users to browse, search, filter, create, view, and delete notes while demonstrating modern Next.js routing, server-state management, persistent client state, REST API integration, and SEO metadata.

🔗 **Live Demo:** https://notehub-serhii.vercel.app/

---

## ✨ Features

* View a paginated list of notes
* Search notes by keyword
* Filter notes by category
* Create new notes
* Delete existing notes
* View detailed information about a note
* Dynamic routing with Next.js App Router
* Modal note preview using intercepted routes
* Server-side data prefetching with TanStack Query
* Persistent note drafts with Zustand
* Form validation
* Loading and error handling
* Dynamic SEO metadata for note and filter pages
* Open Graph metadata for social sharing

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square\&logo=nextdotjs\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square\&logo=typescript\&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square\&logo=reactquery\&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=flat-square)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square\&logo=axios\&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-2563EB?style=flat-square)
![Yup](https://img.shields.io/badge/Yup-4B5563?style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square\&logo=vercel\&logoColor=white)

### Main Technologies

* **Next.js** — application framework and App Router
* **React** — user interface
* **TypeScript** — static typing
* **TanStack Query** — server-state management, caching, queries, and mutations
* **Zustand** — persistent client-side draft state
* **Axios** — HTTP requests and REST API integration
* **Formik + Yup** — form handling and validation
* **React Paginate** — pagination
* **use-debounce** — debounced search
* **React Hot Toast** — user notifications

---

## 📂 Application Routes

```text
/
├── notes/filter/[...slug]   # Notes list and filtering
├── notes/[id]               # Note details
└── notes/action/create      # Create a new note
```

The application also uses **intercepted routes** to display note details inside a modal without leaving the notes list.

---

## 🌐 API

The project works with the NoteHub REST API.

Main operations:

* `GET /notes` — fetch notes
* `GET /notes/:id` — fetch a single note
* `POST /notes` — create a note
* `DELETE /notes/:id` — delete a note

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Serhii-Onykiienko/notehub-nextjs.git
```

### 2. Navigate to the project directory

```bash
cd notehub-nextjs
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create an environment file

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_NOTEHUB_TOKEN=your_api_token
```

### 5. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📜 Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm start
```

Runs the production build.

```bash
npm run lint
```

Runs ESLint.

---

## 👨‍💻 Author

**Serhii Onykiienko**

[![GitHub](https://img.shields.io/badge/GitHub-Serhii--Onykiienko-181717?style=flat-square\&logo=github)](https://github.com/Serhii-Onykiienko)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Serhii_Onykiienko-0A66C2?style=flat-square\&logo=linkedin\&logoColor=white)](https://linkedin.com/in/serhii-onykiienko/)

---

⭐ If you found this project useful, feel free to explore the repository and check out the live demo.
