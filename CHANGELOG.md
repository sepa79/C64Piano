# Changelog

## 0.3.0
- Refactored layout into left, middle, and right regions with a top bar and bottom drum machine.
- Added tabbed middle editor with Track Editor and FX sections for instrument management.
- Introduced right-side trackers showing selected tracks per voice.

## 0.2.1
- Fix silent WASM audio on GitHub Pages by unlocking audio on first user gesture and running the synth inside an AudioWorklet that loads WASM bytes.
- Automatically fall back to the JS synth when WASM is unavailable.
- Embed the SID WebAssembly binary directly in the HTML as base64 so no extra file is needed.
