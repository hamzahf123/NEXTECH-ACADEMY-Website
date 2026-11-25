@echo off
title NEXTECH ACADEMY — local website
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo  Node.js is not installed.
  echo  Install the LTS version from https://nodejs.org and run this file again.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo.
  echo  Installing website dependencies for the first time...
  echo  This may take a minute.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo  Installation failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)

echo.
echo  Starting NEXTECH ACADEMY...
echo  The site will open at: http://localhost:5173
echo  Keep this window open while you browse. Press Ctrl+C to stop.
echo.

start "" cmd /c "timeout /t 5 >nul & start http://localhost:5173"
call npm run dev
pause
