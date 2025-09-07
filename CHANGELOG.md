# Changelog

## 0.2.1
- Fix silent WASM audio on GitHub Pages by unlocking audio on first user gesture and running the synth inside an AudioWorklet that loads WASM bytes.
- Automatically fall back to the JS synth when WASM is unavailable.
- Embed the SID WebAssembly binary directly in the HTML as base64 so no extra file is needed.
