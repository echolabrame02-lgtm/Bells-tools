# School Bell Studio

## Included in this ZIP
- `index.html` — the app
- `assets/` — built-in sound files and the app icon
- `manifest.json` and `sw.js` — installable web-app support

The five built-in sounds are included in `assets/`; you do not need to add them yourself.

## Run it
Open `index.html` to test the app. Some install/offline features work only after hosting it over HTTPS (for example, GitHub Pages).

## Publish and install
1. Create a GitHub repository and upload the contents of this folder, including `assets/`.
2. In the repository, open Settings → Pages.
3. Choose Deploy from a branch, branch `main`, folder `/(root)`, then Save.
4. Open the published HTTPS link on Windows in Microsoft Edge.
5. Edge menu `…` → Apps → Install this site as an app.
6. To create a desktop shortcut, open the installed app’s Edge app menu / Windows Start menu and choose the available pin or shortcut option.

On macOS, open the published HTTPS link in a supported browser. In Chrome, use the browser menu to create/install a shortcut if available. Safari can add supported websites to the Dock on recent macOS versions.

## Important behavior
- The clock and schedule use the computer's local system time and time zone.
- The app must stay open for scheduled bells to trigger.
- Saved bell definitions and schedules are stored in that browser on that device.
- Custom audio files imported through the app are session-only and must be selected again after closing/reopening. Built-in sounds are included in the ZIP.
- This is not a certified emergency alert system.
