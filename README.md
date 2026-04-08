# HiTech AI Platform

> Make human life better with high-tech AI.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- **Backend**: Appwrite (Auth, Database, Storage, Functions)
- **IoT/Robotics**: VIAM SDK
- **Deployment**: Vercel
- **Infrastructure**: GCP

## Local Setup

### Prerequisites

- Node.js 22+
- npm

### Install dependencies

```bash
npm install
```

### Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:

| Variable                          | Description                                             |
| --------------------------------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_APPWRITE_ENDPOINT`   | Appwrite endpoint (e.g. `https://cloud.appwrite.io/v1`) |
| `NEXT_PUBLIC_APPWRITE_PROJECT_ID` | Your Appwrite project ID                                |
| `APPWRITE_API_KEY`                | Server-side Appwrite API key                            |
| `NEXT_PUBLIC_APP_URL`             | App base URL                                            |

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description          |
| ---------------------- | -------------------- |
| `npm run dev`          | Start dev server     |
| `npm run build`        | Build for production |
| `npm run lint`         | Run ESLint           |
| `npm run format`       | Format with Prettier |
| `npm run format:check` | Check formatting     |

## Deployment

Deployed on Vercel. Every push to `main` triggers a production deployment via GitHub integration.

Preview: https://hitech-ai-platform-oys1qmpo5-gitgian74s-projects.vercel.app
