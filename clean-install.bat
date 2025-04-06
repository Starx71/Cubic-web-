@echo off
echo ===== CLEANING AND REINSTALLING DEPENDENCIES =====

echo Step 1: Cleaning npm cache and node_modules...
call npm cache clean --force
rmdir /s /q node_modules
del package-lock.json

echo Step 2: Installing dependencies...
call npm install

echo Step 3: Running the build to verify the fix...
call npm run build

echo ===== CLEAN INSTALL COMPLETE =====
echo If the build was successful, the React type issues have been fixed.
echo If there are still errors, please check the build output for details. 