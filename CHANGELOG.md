# Changelog

## Unreleased
- Removed the WebAssembly audio engine, diagnostics, and related deployment overrides; the synth now runs entirely in JavaScript again.

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
