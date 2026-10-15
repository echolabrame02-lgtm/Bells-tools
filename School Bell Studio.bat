@echo off
title School Bell Studio
set "URL=https://s.shiaho.sbs/a/ed8c73ce/site/index.html"
(where msedge >nul 2>&1) && (start "" msedge --app="%URL%" --new-window --start-maximized & exit /b)
(where chrome >nul 2>&1) && (start "" chrome --app="%URL%" --new-window --start-maximized & exit /b)
start "" "%URL%"
