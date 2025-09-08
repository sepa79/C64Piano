# C64Piano — Layout Description

This describes **what goes where on the screen**, without code, CSS, or element names.

---

## Overall
The screen is organized into **three vertical regions** with a small **control bar on top** and a **drum machine strip along the bottom**. The **left region** is for synthesis controls and visualizers, the **middle region** is for performance and editing, and the **right region** shows live **trackers**. Everything fits on one screen; only the trackers and editing grids scroll inside their own areas.

---

## Top Bar (always visible)
- Shows: **Project** selector (if present), **Backend** selector (e.g., JS / WASM / MIDI), **Global Track Length**, **Quantize**, and **Load / Save / Save As** actions.
- Provides **Play / Stop** transport on the right with a small status indicator.
- **No instrument control here** (instrument lives in the FX view described below).

---

## Left Region (synthesis & visual feedback)
From top to bottom:
1. **Oscillator panel** with four waveform buttons (Pulse, Saw, Triangle, Noise) and a small waveform preview scope; includes pulse‑width and PWM rate controls when Pulse is selected.
2. **ADSR panel** with an envelope preview scope and Attack/Decay/Sustain/Release controls.
3. **Filter panel** with a response preview scope, mode buttons (Low‑pass, Band‑pass, High‑pass, Off), and Cutoff/Resonance controls.
4. **Arpeggiator panel** with mode buttons (Off, Up, Down, Up/Down, Random) and Rate/Gate controls.

These panels are compact and vertically stacked so they collectively occupy about the height of the middle region’s keyboard plus editor area.

---

## Middle Region (play + edit)
Top to bottom:
1. **Keyboard strip**: a compact on‑screen keyboard for auditioning notes and showing current octave/hotkeys.
2. **Editing area with two tabs**:
   - **Track Editor tab (default):** shows the note grid/pattern editor. This editor creates **tracks/patterns** that can be referenced by the trackers in the right region. The **Global Track Length** from the top bar sets the default length for this editor (you can still override per track if needed).
   - **FX tab:** contains **Instrument selection** and **Instrument Load / Save / Save As** actions, plus the FX rack (Delay, Chorus, Bit/Crush, Drive). **All instrument management happens here**, not in the top bar.

Switching tabs swaps only this middle editor view; the rest of the screen stays unchanged.

---

## Right Region (trackers, one tall pair)
- Shows **two trackers side by side** that **span the full height** of this region (a “tall pair”). Each tracker displays notes **vertically** in time order.
- Each tracker is labeled with its **Voice** and the **Track** it references, and shows the **effective length**.
- Each tracker scrolls internally if the content exceeds the visible area.
- A small action at the bottom allows **adding another voice** (additional voices can appear via paging or replacement, but the default visible configuration is two).

The intention is that the **Track Editor** in the middle creates/edit tracks, and these trackers **play/reference** those tracks per voice.

---

## Bottom Drum Machine (middle region bottom)
- A strip aligned under the middle region.
- Header includes **Voice selection** (which synth voice will render drum events) and **Length** selection (16 / 32 / 64 steps).
- The grid shows **four rows** (Kick, Snare, Hat, Tom) with step buttons across. It defaults to 16 or 32 visible steps but adapts to the selected length.
- Interaction in this area is independent of the Track Editor length; the drum length is set by its own selector here.

---

## Behavior Notes
- **Instrument management** (select, load, save) is **only** on the **FX** tab.
- **Global Track Length** in the top bar applies to the **Track Editor** by default; the **Drum Machine** length is controlled in its own header.
- **Trackers** show **notes vertically** and are intended to **reference** tracks made in the Track Editor.
- Transport controls and any existing keyboard mappings continue to operate as before.

---

## Visual Priorities
- Keep the left controls compact but readable, with small preview scopes for instant feedback.
- The middle region’s keyboard is a short strip; most of the middle region height is reserved for editing.
- The right region’s trackers should be the tallest elements to make vertical note flow readable.
- The drum machine is prominent but shallow, optimized for quick step entry across four lanes.
