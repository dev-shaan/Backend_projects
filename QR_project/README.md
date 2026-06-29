# QR Code Generator Project

A simple Node.js backend project that takes a URL from the terminal and generates a QR code image for it. The same URL is also saved to a text file.

## What It Does

- Prompts the user to enter a URL in the terminal
- Generates a QR code image from that URL
- Saves the QR code as `qr_img.png`
- Saves the entered URL as `URL.txt`

## Features

- Terminal-based input using `inquirer`
- QR code generation using `qr-image`
- File writing using Node.js `fs`

## Requirements

- Node.js installed on your computer
- npm installed with Node.js

## Installation

If you are starting from a fresh clone, install the dependencies with:

```bash
npm install
```

If dependencies are missing for any reason, install them manually with:

```bash
npm install inquirer qr-image
```

## How to Run

From inside the `QR_project` folder, run:

```bash
node index.js
```

Then type a URL when the prompt appears, for example:

```text
https://www.google.com
```

## Output Files

After the script runs, it creates:

- `qr_img.png` - the QR code image
- `URL.txt` - the URL you entered

## Project Structure

```text
QR_project/
├── index.js
├── package.json
├── package-lock.json
├── qr_img.png
├── URL.txt
└── README.md
```

## Possible Improvements will do later

- Add input validation for URLs
- Save QR codes with custom file names
- Add a nicer CLI menu
- Allow generating multiple QR codes in one run
