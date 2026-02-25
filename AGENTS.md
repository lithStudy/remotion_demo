# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is a Remotion-based video creation project that generates animated educational/explainer videos (Chinese-language) using React + TypeScript. Output is 960×1280 portrait at 30fps. See `package.json` for all available scripts.

### Development commands

- **Dev server**: `npm run dev` (runs `remotion studio` on port 3000)
- **Lint**: `npm run lint` (runs `eslint src && tsc`)
- **Build**: `npm run build` (runs `remotion bundle`)

### Known issues

- `src/Root.tsx` imports from `./remotions/vocation/Vocation` which does not exist in the source tree. This causes `tsc` and `eslint` errors but does not block Remotion Studio from running (webpack is more forgiving).
- There is a minor Remotion package version mismatch: `@remotion/transitions` is at 4.0.410 while other packages are at 4.0.409. This produces a warning on startup but does not affect functionality.
- Pre-existing lint errors exist (unused imports/variables across several files). These are codebase issues, not environment issues.

### TTS audio pipeline (optional)

Pre-generated audio files are already committed under `public/audio/`. The TTS generation scripts under `.agent/skills/remotion-script-generator/scripts/` require Python 3 + `edge-tts` + `mutagen` and are only needed when regenerating narration audio from scene scripts.
