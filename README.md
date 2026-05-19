# Frontend Candidate Test: Mini Issue Tracker

This repository contains only a minimal React + TypeScript base project. The actual feature implementation is intentionally missing.

## Assignment

Build a small issue tracker application.

A ticket has the following fields:

- `id`
- `title`
- `description`
- `status`: `open` | `in_progress` | `done`
- `priority`: `low` | `medium` | `high`
- `createdBy`
- `createdAt`

## Requirements

1. use git
2. Show a list of all tickets.
3. Add filters for status and priority.
4. Add a text search for title and creator.
5. Show a details view when a ticket is selected.
6. Allow changing the ticket status in the details view.
7. Add a form for creating a new ticket.
8. Validate at least the ticket title.
9. Keep the code cleanly typed with TypeScript.
10. Structure components in a maintainable way.
11. Document important implementation decisions or trade-offs.

## Optional tasks

- use Redux instead of local storage
- Add tests for central behavior.
- Add sorting by date or priority.
- Persist tickets in `localStorage`.
- Add loading and error states if you introduce an API layer.
- Improve accessibility.

## Time box

Please do not spend more than 3 to 5 hours. If something is unfinished, document what you prioritized and what you would do next.

## Getting started with Docker

Start the development server:

```bash
docker compose up --build frontend
```

Open the app at:

```text
http://localhost:5173
```

Run the production build with Nginx:

```bash
docker compose --profile production up --build frontend-production
```

Open the production build at:

```text
http://localhost:8080
```

## Local development without Docker

```bash
npm install
npm run dev
```

## Useful commands

```bash
npm run lint
npm run test
npm run build
```

## Project structure

```text
src/
  components/     reusable UI components
  data/           seed data or mock data
  hooks/          custom React hooks
  lib/            utility functions or API helpers
  pages/          page-level components
  styles/         global styles
  types/          shared TypeScript types
```

## Notes for candidates

You may change the structure if you think there is a better approach. Please keep the solution simple and explain relevant decisions in this README.
