# School Bell Studio — Complete Application Requirements

Build a professional school bell scheduling application with an English user interface, suitable for MacBook and Windows computers.

## 1. Dashboard
- Display the current date and local computer time.
- Show the next scheduled bell and a countdown.
- Display whether automatic scheduling is enabled.
- Provide clear Start, Stop, and Test controls.

## 2. Sound Library
- Include several working sample bell sounds inside the project files.
- Allow users to upload MP3, WAV, and OGG audio files.
- Show each sound's name, duration, and playback controls.
- Include a preview button and a stop button.
- Allow users to rename and delete custom sounds.
- Make sure uploaded sounds remain available after restarting the application.

## 3. Soundboard
- Create large buttons labeled TEST for each sound.
- Play the selected sound while the user holds the button.
- Stop playback immediately when the user releases the button.
- Support mouse and touchscreen controls.
- Include a master volume slider and a Stop All button.

## 4. Bell Builder
- Let users create a bell with a custom name.
- Allow multiple sounds to play simultaneously in one bell.
- Let users adjust the volume of each sound.
- Allow users to save, edit, duplicate, and delete bells.
- Provide a preview button to test each completed bell.

## 5. Automatic Schedule
- Let users select a saved bell and assign it to a specific time.
- Support different schedules for each weekday.
- Allow multiple bell events per day.
- Provide enable and disable controls for individual events.
- Support special schedules for holidays, half-days, and school events.
- Display the next scheduled event and its countdown.
- Prevent the same event from triggering twice during the same scheduled minute.

## 6. Local Time
- Read the current date, time, and time zone from the computer.
- Use the computer's local time automatically on macOS and Windows.
- Update the displayed clock every second.
- Compare scheduled events against local computer time.
- Clearly warn users if the computer's clock is incorrect.

## 7. Saving and Backup
- Save bell definitions, schedules, settings, and sound-library information.
- Keep saved data after the application closes.
- Provide Export Backup and Import Backup options.
- Store uploaded audio files persistently, not just in temporary browser memory.
- Restore saved data after restarting the application.

## 8. Reliability
- Include a clear indication when automatic scheduling is active.
- Keep a visible activity log showing which bells played and when.
- Provide an emergency Stop All control.
- Handle missing or unsupported audio files gracefully.
- Prevent overlapping scheduled events unless the user explicitly allows them.

## 9. Installation
- Make the application installable on macOS and Windows.
- Provide a macOS application package and a Windows installer or EXE.
- Include all required audio assets and application resources.
- Do not require the user to open a terminal or write code manually.

## 10. Design
- Use a professional black and red theme with gold accents.
- Use the School Bell Studio name and app icon.
- Make the interface responsive, modern, and easy to use.
- Keep all menus, buttons, and messages in English.

## Important technical requirement
Do not create only a visual prototype. All buttons must work, audio must play correctly, saved data must persist, and the scheduler must be tested.

If a browser-based implementation cannot run scheduled bells reliably while closed, explain the limitation and use an appropriate desktop application architecture with a background scheduling service. Do not claim that an EXE or macOS installer has been created unless the actual build artifacts are available.
