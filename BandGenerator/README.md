# BandGenerator

A simple Express and EJS app that generates random band names from a large list of adjectives and nouns.

## Features

- Generates a random band name with one click
- Uses Express for routing
- Uses EJS templates for rendering
- Serves static CSS from the `public` folder
- Includes reusable header and footer partials

## Tech Stack

- Node.js
- Express
- EJS
- body-parser

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Install dependencies

```bash
npm install
```

### Run the app

```bash
node index.js
```

The app will run on `http://localhost:3000`.

## How It Works

- Open the home page in your browser
- Click **Generate Name**
- The app picks a random adjective and noun
- The generated band name is shown on the page

## Project Structure

```text
BandGenerator/
├── index.js
├── package.json
├── public/
│   └── styles/
│       └── main.css
└── views/
    ├── index.ejs
    └── partials/
        ├── header.ejs
        ├── footer.ejs
        └── solution-footer.ejs
```

