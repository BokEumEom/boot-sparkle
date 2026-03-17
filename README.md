# boot-sparkle

Interactive terminal-themed portfolio website for a DevOps / Cloud Infrastructure Engineer.
Built with a retro terminal UI featuring boot sequence animation, animated ASCII header, and a functional command prompt.

## Features

- **Terminal Emulator UI** — Retro-styled terminal with scanline overlay and ambient glow
- **Boot Sequence Animation** — Simulated system boot on first load
- **Interactive Commands** — `help`, `about`, `experience`, `skills`, `contact`, `education`, `hobbies`
- **CV Page** — Printable resume at `/cv` with auto-print dialog
- **Dark/Light Theme** — Theme switching via `next-themes`
- **Toast Notifications** — Radix UI toast + Sonner
- **Responsive Design** — Desktop and mobile support
- **Testing** — Unit tests (Vitest) + E2E tests (Playwright)

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Bundler | Vite 5 |
| Styling | Tailwind CSS 3 + shadcn/ui |
| Animation | Framer Motion |
| Routing | React Router v6 |
| Theme | next-themes |
| UI Primitives | Radix UI (Toast, Tooltip) |
| Unit Test | Vitest + Testing Library |
| E2E Test | Playwright |
| Linting | ESLint 9 + typescript-eslint |

## Getting Started

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint
npm run lint

# Preview production build
npm run preview
```

## Project Structure

```
boot-sparkle/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── BootSequence.tsx       # Terminal boot animation
│   │   ├── HeroTerminal.tsx       # Main terminal UI (ASCII header, layout, CTA)
│   │   ├── NavLink.tsx            # Navigation link component
│   │   ├── TerminalPrompt.tsx     # Interactive command prompt
│   │   └── ui/                    # shadcn/ui primitives
│   │       ├── sonner.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── tooltip.tsx
│   ├── constants/
│   │   └── terminal.ts            # Terminal command data & responses
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   └── use-toast.ts           # Toast notification hook
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn)
│   ├── pages/
│   │   ├── CV.tsx                 # Printable CV page
│   │   ├── Index.tsx              # Home page (HeroTerminal)
│   │   └── NotFound.tsx           # 404 page
│   ├── test/
│   │   ├── example.test.ts        # Example unit test
│   │   └── setup.ts               # Test setup (jest-dom)
│   ├── App.tsx                    # Router & layout
│   ├── App.css                    # Global styles
│   ├── index.css                  # Tailwind directives & custom CSS
│   ├── main.tsx                   # Entry point
│   └── vite-env.d.ts             # Vite type declarations
├── cv.md                          # CV content (markdown)
├── index.html                     # HTML entry point
├── components.json                # shadcn/ui config
├── tailwind.config.ts             # Tailwind config
├── vite.config.ts                 # Vite config
├── vitest.config.ts               # Vitest config
├── playwright.config.ts           # Playwright config
├── playwright-fixture.ts          # Playwright test fixtures
├── tsconfig.json                  # TypeScript base config
├── tsconfig.app.json              # TypeScript app config
├── tsconfig.node.json             # TypeScript node config
├── postcss.config.js              # PostCSS config
└── eslint.config.js               # ESLint config
```

## Available Commands (in terminal)

| Command | Description |
|---------|-------------|
| `help` | List available commands |
| `about` | Personal background & expertise |
| `experience` | Work history (reverse chronological) |
| `skills` | Technical skills by category |
| `contact` | Contact information |
| `education` | Educational background |
| `hobbies` | Personal interests |
| `clear` | Clear terminal output |
