@echo off
echo ===================================================
echo   SriMart Local Server Launcher
echo ===================================================
echo.
echo Starting local web server...
echo.

:: Prefer Python because it is commonly available and requires no package install.
where npx >nul 2>&1
if %errorlevel% equ 0 (
	start "SriMart Server Process" /min npx -y serve . -p 8080
	goto server_started
)

where py >nul 2>&1
if %errorlevel% equ 0 (
	start "SriMart Server Process" /min py -m http.server 8080
	goto server_started
)

where python >nul 2>&1
if %errorlevel% equ 0 (
	start "SriMart Server Process" /min python -m http.server 8080
	goto server_started
)

echo Node.js (npx) or Python is required to run the local server.
pause
exit /b 1

:server_started

:: Wait 3 seconds for the server to bind to port 8080
echo Waiting for server to initialize...
ping 127.0.0.1 -n 4 > nul

:: Open the default browser to the root homepage
echo Opening browser at http://localhost:8080/ ...
start "" "http://localhost:8080/"

echo.
echo Server is running! Close this command window to stop the server.
echo.
pause
