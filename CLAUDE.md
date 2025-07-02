# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a "Mixed Messages" project - a JavaScript-based random joke generator that displays jokes in the console. The project is part of a Codecademy learning exercise.

## Architecture

- **jokeStore.js**: Contains joke data stored as an array of objects with three properties:
  - `type`: Category of joke
  - `setup`: The joke setup/question
  - `punchline`: The joke's punchline
- **jokeGenerator.js**: Main function that randomly selects and displays jokes from the store

## Development Commands

This is a simple Node.js project with no build system or package manager configured. Run JavaScript files directly:

```bash
node jokeGenerator.js
```

## Project Goals

The completed project should allow calling a function in the console to display random joke messages. 

Future extension plans include creating a single-page website with HTML/CSS interface for browser-based joke display and deployment.

## File Structure

- Core files are at project root level
- Project planning documented in `Project scope.excalidraw`
- No external dependencies or configuration files present