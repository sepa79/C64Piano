# C64Piano — Layout Description

This describes **what goes where on the screen**, without code, CSS, or element names.

---

## Overall
The screen is organized into **three vertical regions** with a small **control bar on top**. The **left region** is for synthesis controls and visualizers, the **middle region** is for performance and editing (including the drum machine), and the **right region** shows live **trackers**. Everything fits on one screen; only the trackers and editing grids scroll inside their own areas.

---

## Top Bar (always visible)
- Shows: **Project** selector (if present), **Global Track Length**, **Quantize**, and **Load / Save / Save As** actions.
- Provides **Play / Stop** transport on the right with a small status indicator.
- **No instrument control here** (instrument lives in the FX view described below).
- Includes a **Help** button that opens a modal with usage instructions.

---

## Left Region (synthesis & visual feedback)
At the top a small header reads **Instrument edit**, shows the current instrument name, and offers a tiny **FX** button that jumps to the FX tab for saving/loading instruments.

Below that, the region stacks compact cards:
1. **Octave panel** with `<` and `>` buttons flanking a row of octave selection buttons.
2. **Oscillator panel** with four waveform buttons (Pulse, Saw, Triangle, Noise) and a small waveform preview scope; includes pulse‑width and PWM rate controls when Pulse is selected.
3. **ADSR panel** with an envelope preview scope and Attack/Decay/Sustain/Release controls.
4. **Filter panel** with a response preview scope, mode buttons (Low‑pass, Band‑pass, High‑pass, Off), a Bit‑crush toggle, and Cutoff/Resonance controls.
5. **Arpeggiator panel** with mode buttons (Off, Up, Down, Up/Down, Random) and Rate/Gate controls.

These panels are compact and vertically stacked so they collectively occupy about the height of the middle region’s keyboard plus editor area.
Each panel is presented as a **card**: controls on the left, a small scope preview on the right (where applicable).
Every card includes a header with a small **?** button that opens a local pop‑up with contextual help.

---

## Middle Region (play + edit)
Top to bottom:
1. **Keyboard strip**: a compact on‑screen keyboard for auditioning notes and showing current octave/hotkeys.
2. **Editing area with three tabs**:
   - **Track Editor tab (default):** shows the note grid/pattern editor. This editor creates **tracks/patterns** that can be referenced by the trackers in the right region. The **Global Track Length** from the top bar sets the default length for this editor (you can still override per track if needed).
   - **FX tab:** contains **Instrument selection** and **Instrument Load / Save / Save As** actions, plus the FX rack (Delay, Chorus, Bit/Crush, Drive). **All instrument management happens here**, not in the top bar.
   - **Drums tab:** hosts a four-lane step sequencer with its own tempo control for programming Kick, Snare, Hat, and Tom patterns.

Switching tabs swaps only this middle editor view; the rest of the screen stays unchanged.

---

## Right Region (trackers, one tall pair)
- Shows **two trackers side by side** that **span the full height** of this region (a “tall pair”). Each tracker displays notes **vertically** in time order.
- Each tracker is labeled with its **Voice** and the **Track** it references, and shows the **effective length**.
- Each tracker scrolls internally if the content exceeds the visible area.
- A small action at the bottom allows **adding another voice** (additional voices can appear via paging or replacement, but the default visible configuration is two).

The intention is that the **Track Editor** in the middle creates/edit tracks, and these trackers **play/reference** those tracks per voice.

---

## Behavior Notes
- **Instrument management** (select, load, save) is **only** on the **FX** tab.
- **Global Track Length** in the top bar applies to the **Track Editor** by default; the **Drum Machine** length is controlled within the Drums tab.
- **Trackers** show **notes vertically** and are intended to **reference** tracks made in the Track Editor.
- Transport controls and any existing keyboard mappings continue to operate as before.

---

## Visual Priorities
- Keep the left controls compact but readable, with small preview scopes for instant feedback.
- The middle region’s keyboard is a short strip; most of the middle region height is reserved for editing.
- The right region’s trackers should be the tallest elements to make vertical note flow readable.
