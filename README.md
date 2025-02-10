# Jump Demo

A barebones terminal CLI demo featuring the "jump" command tool. This project simulates a terminal environment in the browser with basic file system commands and jump management.

## Features

- Basic terminal with commands:
  - `help` : Show available commands and their descriptions.
  - `clear` : Clear the terminal.
  - `echo` : Echo back the arguments.
  - `version` / `v` : Display the CLI tool version.
  - `ls` : List files in the current directory.
  - `pwd` : Show the current directory.
  - `mkdir` : Create new directories.
  - `cd` : Change directories.
  - `touch` : Create new files.
- The **jump** tool for managing shortcuts:
  - `jump add <name> [-p <path>]` : Add a new jump.
  - `jump to <name> [-i]` : Change directory or open VS Code.
  - `jump list` : List all jumps.
  - `jump rm <name>` or `jump rm --all` : Remove jump(s).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/jump-demo.git
   cd jump-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Development

Start the development server with:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) (or the URL provided by Vite).

## Build

To build the project, run:

```bash
npm run build
```

Then preview the production build with:

```bash
npm run preview
```

## Linting

Lint the code using ESLint:

```bash
npm run lint
```

## Project Structure

- `src/lib/commands.ts`: Contains the command implementations.
- `src/components/terminal.tsx` : Terminal UI component using xterm.js.
- `src/components/ui/card.tsx` : UI components for building cards.
- pages: Contains the route components for Home and Not Found.
- `vite.config.*` and `tsconfig.*` : Configuration files for Vite and TypeScript.

## Contributing

Feel free to open issues or submit pull requests for improvements and fixes.

## License

This project is licensed under the MIT License.
