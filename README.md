# Salt AI Website

A modern, responsive landing page for Salt AI, built with React, TypeScript, and Vite.

## 🛠 Technologies

The project utilizes a modern frontend stack:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: 
  - [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling
  - [Sass (SCSS)](https://sass-lang.com/) for custom complex styles
- **Linting**: [ESLint](https://eslint.org/)

## 📂 Folder Structure

```
src/
├── assets/         # Static assets imported in code
├── components/     # React components
│   └── sections/   # Major page sections (Hero, Leaderboard, Footer, etc.)
├── hooks/          # Custom React hooks (e.g., useParallax)
├── styles/         # Global SCSS variables and mixins
├── App.tsx         # Main application component
└── main.tsx        # Entry point
```

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📜 Scripts

- `dev`: Starts the Vite development server.
- `build`: Compiles TypeScript and builds the application for production.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Serves the built application locally for testing.
