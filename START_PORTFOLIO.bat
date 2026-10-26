@echo off
cd /d "%~dp0"
title Sylvon Portfolio - Local Server
where node >nul 2>&1
if errorlevel 1 (
    echo Node.js was not found. Install Node.js, then try again.
    pause
    exit /b 1
)
echo Starting Sylvon Portfolio...
echo Open http://localhost:3000 in your browser.
echo Press Ctrl+C to stop this server.
echo.
node server.js
if errorlevel 1 (
    echo.
    echo The server stopped with an error. Check whether port 3000 is already in use.
    pause
)
