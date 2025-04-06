@echo off
echo ===== FIXING NEXT.JS DEPENDENCIES =====

echo Step 1: Installing Next.js...
call npm install next@latest --save

echo Step 2: Removing Vite dependencies...
call npm uninstall vite @vitejs/plugin-react-swc eslint-plugin-react-refresh

echo Step 3: Updating package.json scripts for Next.js...
echo Updating build scripts in package.json...
powershell -Command "(Get-Content package.json) -replace '\"dev\": \"vite\"', '\"dev\": \"next dev\"' | Set-Content package.json"
powershell -Command "(Get-Content package.json) -replace '\"build\": \"tsc && vite build\"', '\"build\": \"next build\"' | Set-Content package.json"
powershell -Command "(Get-Content package.json) -replace '\"build:dev\": \"tsc && vite build --mode development\"', '\"build:dev\": \"next build\"' | Set-Content package.json"
powershell -Command "(Get-Content package.json) -replace '\"preview\": \"vite preview\"', '\"start\": \"next start\"' | Set-Content package.json"

echo Step 4: Creating Next.js configuration file...
echo // Next.js configuration > next.config.js
echo /** @type {import('next').NextConfig} */ >> next.config.js
echo const nextConfig = { >> next.config.js
echo   reactStrictMode: true, >> next.config.js
echo   swcMinify: true, >> next.config.js
echo }; >> next.config.js
echo. >> next.config.js
echo module.exports = nextConfig; >> next.config.js

echo Step 5: Creating basic Next.js app structure...
if not exist "src\app" mkdir "src\app"
if not exist "src\app\layout.tsx" (
    echo import type { Metadata } from 'next'; > src\app\layout.tsx
    echo import { Inter } from 'next/font/google'; >> src\app\layout.tsx
    echo import './globals.css'; >> src\app\layout.tsx
    echo. >> src\app\layout.tsx
    echo const inter = Inter({ subsets: ['latin'] }); >> src\app\layout.tsx
    echo. >> src\app\layout.tsx
    echo export const metadata: Metadata = { >> src\app\layout.tsx
    echo   title: 'Cubic Web', >> src\app\layout.tsx
    echo   description: 'Cubic Web Application', >> src\app\layout.tsx
    echo }; >> src\app\layout.tsx
    echo. >> src\app\layout.tsx
    echo export default function RootLayout({ >> src\app\layout.tsx
    echo   children, >> src\app\layout.tsx
    echo }: { >> src\app\layout.tsx
    echo   children: React.ReactNode; >> src\app\layout.tsx
    echo }) { >> src\app\layout.tsx
    echo   return ( >> src\app\layout.tsx
    echo     ^<html lang="en"^> >> src\app\layout.tsx
    echo       ^<body className={inter.className}^>{children}^</body^> >> src\app\layout.tsx
    echo     ^</html^> >> src\app\layout.tsx
    echo   ); >> src\app\layout.tsx
    echo } >> src\app\layout.tsx
)

if not exist "src\app\page.tsx" (
    echo export default function Home() { > src\app\page.tsx
    echo   return ( >> src\app\page.tsx
    echo     ^<main className="flex min-h-screen flex-col items-center justify-between p-24"^> >> src\app\page.tsx
    echo       ^<h1^>Welcome to Cubic Web^</h1^> >> src\app\page.tsx
    echo     ^</main^> >> src\app\page.tsx
    echo   ); >> src\app\page.tsx
    echo } >> src\app\page.tsx
)

if not exist "src\app\globals.css" (
    echo @tailwind base; > src\app\globals.css
    echo @tailwind components; >> src\app\globals.css
    echo @tailwind utilities; >> src\app\globals.css
)

echo Step 6: Running the build to verify the fix...
call npm run build

echo ===== FIX COMPLETE =====
echo If the build was successful, the Next.js dependencies have been fixed.
echo If there are still errors, please check the build output for details.
echo.
echo Next steps:
echo 1. Commit the changes to package.json, next.config.js, and the new app directory
echo 2. Push to your repository to trigger a new Vercel deployment 