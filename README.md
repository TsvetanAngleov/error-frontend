# Error Frontend

A TypeScript project that serves a beautiful error page with a modern design, built with Webpack.

## Features

- Modern, responsive error page design
- TypeScript with Webpack bundling
- Beautiful gradient backgrounds and animations
- Mobile-friendly responsive design
- JavaScript-powered refresh button with countdown timer
- Portal-specific reload functionality

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

To run the development server:
```bash
npm start
```

This will start the Webpack dev server on `http://localhost:3000` with hot reloading.

### Production

To build for production:
```bash
npm run build
```

This creates optimized files in the `dist/` directory.

### Available Scripts

- `npm start` - Start development server with hot reloading
- `npm run build` - Build for production

## Usage

The error page will be served with a 3-second countdown timer before the refresh button becomes active. The refresh button sends different postMessage types based on the portal query parameter:

- `?portal=Betbg` → sends `bbg-agg.reload`
- `?portal=Efbet` → sends `efbt-agg.reload`
- `?portal=EfbetSportRadarUAT` → sends `efbt-agg.reload`
- `?portal=EfbetSportRadar` → sends `efbt-agg.reload`
- No portal parameter → sends `g2s-agg.reload` (default)

## Project Structure

```
error-frontend/
├── src/
│   ├── index.html     # HTML template
│   └── index.ts       # TypeScript entry point with button logic
├── dist/              # Webpack build output
├── webpack.config.js  # Webpack configuration
├── package.json
├── tsconfig.json
└── README.md
```
