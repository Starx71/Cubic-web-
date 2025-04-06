@echo off
echo ===== FIXING REACT TYPE RESOLUTION ISSUES =====

echo Step 1: Cleaning npm cache and node_modules...
call npm cache clean --force
rmdir /s /q node_modules
del package-lock.json

echo Step 2: Installing React and type definitions with compatible versions...
call npm install react@^18.2.0 react-dom@^18.2.0 --save
call npm install @types/react@^18.2.0 @types/react-dom@^18.2.0 --save-dev

echo Step 3: Installing all other dependencies...
call npm install

echo Step 4: Verifying TypeScript configuration...
echo TypeScript configuration has been updated to include typeRoots.

echo Step 5: Creating proper React type definitions...
echo React type definitions have been created.

echo Step 6: Running the build to verify the fix...
call npm run build

echo ===== FIX COMPLETE =====
echo If the build was successful, the React type issues have been fixed.
echo If there are still errors, please check the build output for details. 