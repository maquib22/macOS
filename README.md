# macOS Portfolio

An interactive portfolio for Aaquib Asrar, styled as a macOS desktop. Open projects, notes, the resume, Spotify, or a portfolio terminal from the dock.

## Features

- Draggable desktop-style windows with close controls
- Project cards with repository and demo links
- Resume PDF and formatted notes
- Embedded Spotify playlist
- Terminal commands for portfolio details
- Desktop-style navigation bar, clock, and dock

## Tech stack

- React 19
- Vite
- Sass
- `react-rnd` for draggable and resizable windows
- `react-console-emulator` for the terminal

## Getting started

Install a recent version of [Node.js](https://nodejs.org/) and npm, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the app.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Using the portfolio

Select an app icon in the dock to open or close its window. The terminal includes these commands:

| Command | Description |
| --- | --- |
| `about` | Show a short introduction |
| `skills` | List core skills |
| `experience` | Show professional experience |
| `projects` | List selected projects |
| `contact` | Show contact information |
| `resume` | Open the resume PDF |
| `echo <text>` | Print the supplied text |
| `help` | Show available command details |

## Project structure

```text
public/                 Static assets, resume, wallpaper, and note content
src/
  assets/               Project data
  components/           Desktop navigation, dock, clock, and windows
  App.jsx               App state and desktop composition
  app.scss              Desktop and window styles
```

Project card content is stored in `src/assets/github.json`. Static files such as the resume, wallpaper, and note are served from `public/`.

## Production build

Create the production bundle with:

```bash
npm run build
```

Deploy the generated `dist/` directory to a static hosting provider.
