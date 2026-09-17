# BuildPCBs Web

The BuildPCBs marketing site, built with React, TypeScript, Vite, and Tailwind CSS.

## Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Vite prints the local URL when the server starts (normally `http://localhost:5173`).

## Production build

```bash
pnpm build
pnpm preview
```

The production output is written to `dist/`.

## Routing and deployment

Routes are selected client-side in `src/App.tsx`. Configure the production host to serve `index.html` as the fallback for paths such as `/pricing`, `/blog`, and `/documentation`.

The `/app` and `/explorer` routes redirect to their corresponding BuildPCBs applications in the browser.
