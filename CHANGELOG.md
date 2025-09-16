# Changelog

## Unreleased
- Removed the WebAssembly synth engine and AudioWorklet pipeline; the app now always uses the JavaScript synth.
- Removed the COOP/COEP service worker, `_headers`, and WASM diagnostics artifacts.
- Added a selectable pure JavaScript SID engine alongside the hybrid WebAudio synth.

## 0.4.0
- Added instrument preset picker card with built-in "Bright Lead," "Soft Pad," and "Chiptune Bass" examples.
- Expanded waveform templates and filter presets for broader sound design.
- Moved instrument controls beside the keyboard and added track shortcut buttons.
- Made drum grid width dynamic and support variable pattern lengths.
- Guarded master gain assignment and deferred initial instrument load to prevent runtime errors.

## 0.3.0
- Refactored layout into left, middle, and right regions with a top bar and bottom drum machine.
- Added tabbed middle editor with Track Editor and FX sections for instrument management.
- Introduced right-side trackers showing selected tracks per voice.

## 0.2.1
- Fix silent WASM audio on GitHub Pages by unlocking audio on first user gesture and running the synth inside an AudioWorklet that loads WASM bytes.
- Automatically fall back to the JS synth when WASM is unavailable.
- Embed the SID WebAssembly binary directly in the HTML as base64 so no extra file is needed.
