# C64Piano

C64Piano is a retro-styled browser piano inspired by the Commodore 64. It showcases a multi-voice tracker, pattern editor, and background waveform oscilloscopes rendered with HTML, CSS, and JavaScript.

An engine selector lets you swap between the hybrid WebAudio synth, a webSID AudioWorklet engine, and a pure JavaScript SID renderer to explore different timbres.

A live demo is available on [GitHub Pages](https://sepa79.github.io/C64Piano/).

## Version

Current version: 0.4.0

## Changelog

### 0.4.1
- Removed the WebAssembly synth engine and associated service worker; the app always uses the JavaScript synth.

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

### 0.2.1
- Fix silent WASM audio on GitHub Pages by unlocking audio on user gesture with a confirmation beep.
- Move DSP into an AudioWorklet that loads WASM bytes and falls back to the JS synth when needed.
- Embed the SID WASM binary directly in the page as a base64 string.

### 0.2.0
- Applied phosphor-green C64 theme with embedded pixel font and CRT scanlines.
- Added C64 boot intro overlay with audio unlock and refined WASM warning.
- Enabled WebAssembly synth engine and fixed related audio issues.
- Added toggleable JS/WASM engine and file-protocol warning for WASM.

### 0.1.0
- Added background waveform oscilloscope.
- Introduced multi-voice tracker with per-voice oscilloscopes.
- Refactored tracker into pattern editor with voice selection.
- Fixed initialization of history state.

## Development Notes

The default hybrid and JavaScript engines run entirely in WebAudio, so no service worker or cross-origin isolation headers are required. The optional webSID mode embeds Tiny'R'Sid inside an AudioWorklet and therefore needs cross-origin isolation to run; when unavailable, the app automatically falls back to the hybrid or JS engines. Audio still unlocks on the first user interaction to comply with browser autoplay policies.

## Verification Checklist

1. Open https://sepa79.github.io/C64Piano/ and confirm the interface renders without errors.
2. Play notes with the on-screen keyboard (or mapped keys) to verify the JavaScript synth produces audio.
3. Check the browser console for errors after playing a few notes.

## Font License

C64 Pro Mono font © Style64, used under their web embedding terms (https://style64.org/c64-truetype). The font is embedded solely for display in this page and is not redistributed separately.
