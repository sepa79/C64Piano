# C64Piano

C64Piano is a retro-styled browser piano inspired by the Commodore 64. It showcases a multi-voice tracker, pattern editor, and background waveform oscilloscopes rendered with HTML, CSS, and JavaScript.

## Version

Current version: 0.2.1

## Changelog

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

GitHub Pages does not set the cross‑origin headers required for `SharedArrayBuffer` or `Atomics` and often serves WASM with an incorrect MIME type. The synth therefore loads WebAssembly from raw bytes inside an `AudioWorklet` and avoids `instantiateStreaming` to remain compatible across browsers.
The SID WebAssembly module is embedded in `index.html` as a base64 string so no external file is required.

## Font License

C64 Pro Mono font © Style64, used under their web embedding terms (https://style64.org/c64-truetype). The font is embedded solely for display in this page and is not redistributed separately.
