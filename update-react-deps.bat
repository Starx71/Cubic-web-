@echo off
echo ===== UPDATING REACT DEPENDENCIES =====

echo Step 1: Installing React and type definitions with compatible versions...
call npm install react@^18.2.0 react-dom@^18.2.0 --save
call npm install @types/react@^18.2.0 @types/react-dom@^18.2.0 --save-dev

echo Step 2: Running the build to verify the fix...
call npm run build

echo ===== UPDATE COMPLETE =====
echo If the build was successful, the React type issues have been fixed.
echo If there are still errors, please check the build output for details. 