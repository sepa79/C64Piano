# C64Piano

C64Piano is a retro-styled browser piano inspired by the Commodore 64. It showcases a multi-voice tracker, pattern editor, and background waveform oscilloscopes rendered with HTML, CSS, and JavaScript.

A live demo is available on [GitHub Pages](https://sepa79.github.io/C64Piano/).

## Version

Current version: 0.4.0

## Changelog

### 0.4.0
- Added instrument preset picker card with built-in "Bright Lead," "Soft Pad," and "Chiptune Bass" examples.
- Expanded waveform templates and filter presets for broader sound design.
- Moved instrument controls beside the keyboard and added track shortcut buttons.
- Made drum grid width dynamic and support variable pattern lengths.
- Guarded master gain assignment and deferred initial instrument load to prevent runtime errors.

### 0.3.0
- Refactored layout into left, middle, and right regions with a top bar and bottom drum machine.
- Added tabbed middle editor with Track Editor and FX sections for instrument management.
- Introduced right-side trackers showing selected tracks per voice.

### 0.2.0
- Applied phosphor-green C64 theme with embedded pixel font and CRT scanlines.
- Added C64 boot intro overlay with audio unlock messaging.

### 0.1.0
- Added background waveform oscilloscope.
- Introduced multi-voice tracker with per-voice oscilloscopes.
- Refactored tracker into pattern editor with voice selection.
- Fixed initialization of history state.

## Development Notes

The synth now runs entirely in JavaScript using standard Web Audio nodes, so no cross-origin isolation or service worker bootstrapping is required for audio playback.

## Verification Checklist

1. Open https://sepa79.github.io/C64Piano/ and trigger the "Enable Sound" prompt to unlock audio.
2. Play notes across the keyboard and verify smooth audio output with no console errors.
3. Confirm instrument presets load and save without throwing exceptions.

## Font License

C64 Pro Mono font © Style64, used under their web embedding terms (https://style64.org/c64-truetype). The font is embedded solely for display in this page and is not redistributed separately.
