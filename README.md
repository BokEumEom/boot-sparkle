# boot-sparkle

Interactive terminal-themed portfolio website for a DevOps / Cloud Infrastructure Engineer.

## Preview

A retro terminal UI with boot sequence animation, animated ASCII header, and a functional command prompt.

## Features

- **Terminal Emulator UI** — Retro-styled terminal with scanline overlay and ambient glow
- **Boot Sequence** — Animated system boot on first load
- **Interactive Commands** — `help`, `about`, `experience`, `skills`, `contact`, `education`, `hobbies`
- **CV Page** — Printable resume at `/cv` with auto-print dialog
- **Responsive** — Works on desktop and mobile

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router

## Getting Started

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/       # Terminal UI components
│   ├── HeroTerminal.tsx
│   ├── BootSequence.tsx
│   └── TerminalPrompt.tsx
├── data/             # Terminal command data
├── pages/            # Route pages (Index, CV)
└── App.tsx           # Router setup
```
