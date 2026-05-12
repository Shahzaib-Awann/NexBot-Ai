<p align="center">
  <img src="./public/assets/images/Nexbot_transperant_logo.svg" alt="NexBot Logo" width="120" />
</p>

<h1 align="center">NexBot</h1>
<p align="center">
  <b>AI-Powered Conversations. Reimagined.</b><br/>
  A production-ready, intelligent chat platform built for the modern web.
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="https://groq.com/">
  <img src="https://img.shields.io/badge/Groq_API-FF6A00?style=for-the-badge&logo=groq&logoColor=white" />
</a>
  <a href="https://authjs.dev/">
  <img src="https://img.shields.io/badge/Auth.js-000000?style=for-the-badge&logoColor=white" />
</a>
  <a href="https://orm.drizzle.team/"><img src="https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=000" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /></a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#environment-variables">Configuration</a> •
  <a href="#keyboard-shortcuts">Shortcuts</a> •
  <a href="#license--usage">License</a>
</p>

---

## Overview

NexBot is a modern **AI-powered, text-based chatbot application** built with Next.js 15 and powered by fast LLM inference using Groq. It delivers a smooth, real-time chat experience with authentication, chat history, and a scalable architecture designed for production-level AI apps.

---

## Features

| Capability                | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| **Intelligent Chat**      | Real-time AI conversations powered by Groq API with fast, contextual responses.                   |
| **Secure Authentication** | Enterprise-grade auth via Auth.js (NextAuth) with credentials-based login and protected sessions. |
| **Persistent History**    | Every conversation is saved, searchable, and organized under user profiles.                       |
| **Shareable Links**       | Generate private or public links to share specific conversations instantly.                       |
| **Favorites & Bookmarks** | Pin important messages and chats for quick access later.                                          |
| **Admin Command Center**  | Dedicated dashboard with analytics, user management, and system oversight.                        |
| **Global Search**         | Full-text search and advanced filtering across all chat history.                                  |
| **Message Control**       | Edit or delete messages on the fly with full conversation integrity.                              |
| **Keyboard-First UX**     | Power-user shortcuts for navigation without leaving the keyboard.                                 |

---

## Architecture

NexBot is built on a modern, full-stack TypeScript architecture designed for clarity, safety, and performance.

| Layer             | Technology               | Purpose                                                       |
| ----------------- | ------------------------ | ------------------------------------------------------------- |
| **Framework**     | Next.js 15 (App Router)  | Server-side rendering, API routes, and file-based routing.    |
| **Language**      | TypeScript               | End-to-end type safety across frontend and backend.           |
| **AI Engine**     | Groq API                 | State-of-the-art LLM inference for natural conversations.     |
| **ORM**           | Drizzle ORM              | Type-safe SQL queries with zero runtime overhead.             |
| **Database**      | MySQL                    | Reliable, structured relational data storage.                 |
| **Auth**          | Auth.js / NextAuth       | Secure, flexible authentication with session management.      |
| **UI System**     | ShadCN UI + Tailwind CSS | Accessible, composable components with utility-first styling. |
| **Validation**    | Zod                      | Runtime schema validation for all forms and API contracts.    |
| **Data Fetching** | useSWR                   | Intelligent caching, revalidation, and optimistic UI updates. |

---

## Project Structure

```bash
nexbot/
├── app/                     # App Router structure (pages, layouts, routes)
│   ├── chat/                # Chat interface, search, profile pages
│   ├── api/                 # Server functions (auth, user, chats, admin)
├── components/              # Reusable UI components
├── lib/                     # Utility functions, hooks, DB config
│   ├── hooks/               # Custom React hooks (e.g. useShortcuts)
│   ├── db.ts                # Drizzle ORM config
├── drizzle/                 # Drizzle schema & migration files
├── public/                  # Static assets (images, logos)
├── styles/                  # Global CSS
└── .env.example             # Sample environment variables
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** or **pnpm**
- **MySQL** database instance (local or cloud)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Shahzaib-Awann/NexBot-Ai.git
cd nexbot-ai

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local and add your database credentials and API keys.

# 4. Initialize the database
npx drizzle-kit push

# 5. Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# Database
MYSQL_HOST="localhost"
MYSQL_PORT=3306
MYSQL_USER=your_username
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database
MYSQL_MAX_CONNECTION=10
MYSQL_CA_CERT=

# Authentication (Auth.js)
AUTH_SECRET=your_random_secret_key

# Groq API
GROQ_API_KEY=your_groq_api_key

# App URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Keyboard Shortcuts

| Shortcut | Action             |
| -------- | ------------------ |
| Alt + C  | Go to Chat Page    |
| Alt + S  | Go to Search Page  |
| Alt + P  | Go to Profile Page |

## Authentication

Credentials-based login
Secure sessions using Auth.js
Middleware protected routes
Admin access control

## Contributing

Contributions are welcome. Please follow these steps:

- Fork the repository.
- Create a feature branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Open a Pull Request.

Please ensure your code adheres to the existing TypeScript and formatting standards.

## License & Usage

This project is free to use, clone, modify, and extend for personal or educational use.
Feel free to create your own AI chatbot, improve the UI/UX, or plug in your own AI API key.

## Credits

Built with 💙 by Shahzaib Awan

NexBot is an AI-powered text-based chat application built with modern web technologies, including TypeScript, Next.js 15 (App Router), Drizzle ORM (MySQL), Auth.js/NextAuth for authentication, ShadCN UI for sleek UI components, and Zod for schema validation. Fast, secure, and fully customizable—designed for modern web AI experiences.
