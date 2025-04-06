# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1f7ffe37-a4ed-4d73-8f65-05ecfa94f977

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1f7ffe37-a4ed-4d73-8f65-05ecfa94f977) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1f7ffe37-a4ed-4d73-8f65-05ecfa94f977) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Cubic Web

A modern React application built with Vite, TypeScript, and Shadcn UI.

## React Type Resolution Issues

If you're experiencing TypeScript errors related to React types (like `TS2305: Module '"react"' has no exported member 'ReactElement'`), follow these steps to fix them:

1. Run the `fix-react-types.bat` script:
   ```
   .\fix-react-types.bat
   ```

   This script will:
   - Clean the npm cache and node_modules
   - Install React and its type definitions with compatible versions
   - Install all other dependencies
   - Verify the TypeScript configuration
   - Create proper React type definitions
   - Run the build to verify the fix

2. If you're still experiencing issues, you can try a more thorough clean install:
   ```
   .\clean-install.bat
   ```

3. If you need to update React dependencies specifically:
   ```
   .\update-react-deps.bat
   ```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/components`: React components
- `src/types`: TypeScript type definitions
- `src/pages`: Page components
- `src/hooks`: Custom React hooks
- `src/utils`: Utility functions
- `src/styles`: CSS and styling
- `src/assets`: Static assets
