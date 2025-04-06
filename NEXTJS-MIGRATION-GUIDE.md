# Migrating from Vite to Next.js

This guide will help you migrate your project from Vite to Next.js for deployment on Vercel.

## 1. Install Next.js

First, install Next.js as a production dependency:

```bash
npm install next@latest --save
```

## 2. Remove Vite Dependencies

Remove the Vite-related dependencies that are no longer needed:

```bash
npm uninstall vite @vitejs/plugin-react-swc eslint-plugin-react-refresh
```

## 3. Update package.json Scripts

Update your package.json scripts to use Next.js commands:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
}
```

## 4. Create Next.js Configuration

Create a `next.config.js` file in the root of your project:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
```

## 5. Set Up Next.js App Directory Structure

Create the basic Next.js app directory structure:

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
```

### layout.tsx

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cubic Web',
  description: 'Cubic Web Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### page.tsx

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Cubic Web</h1>
    </main>
  );
}
```

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 6. Migrate Your Components

Move your existing components to the appropriate locations in the Next.js app directory structure. For example:

- Move page components to `src/app/[route]/page.tsx`
- Move shared components to `src/components/`

## 7. Update Imports and Routing

- Replace `react-router-dom` imports with Next.js routing
- Update any Vite-specific imports to use Next.js equivalents

## 8. Test Locally

Run the development server to test your changes:

```bash
npm run dev
```

## 9. Build and Deploy

Build your project and deploy to Vercel:

```bash
npm run build
```

Then push your changes to your repository to trigger a new Vercel deployment.

## Common Issues and Solutions

### React Router to Next.js Routing

If you're using React Router, you'll need to migrate to Next.js routing:

- Replace `<BrowserRouter>`, `<Routes>`, and `<Route>` with Next.js file-based routing
- Move route components to the appropriate directories in the `app` folder
- Use Next.js's `Link` component instead of React Router's `Link`

### Environment Variables

Next.js uses a different approach for environment variables:

- Create a `.env.local` file for local development
- Use `NEXT_PUBLIC_` prefix for variables that should be exposed to the browser

### Static Assets

Next.js handles static assets differently:

- Place static assets in the `public` directory
- Use the `next/image` component for optimized images

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
- [Migrating from Create React App to Next.js](https://nextjs.org/docs/migrating/from-create-react-app) 