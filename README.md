# Markdown to HTML Converter

This project provides a simple script to convert Markdown files to HTML using the Showdown library.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Prepare your Markdown file**:

   - Ensure you have a Markdown file (`input.md`) in the project directory.

2. **Run the converter script**:
   - The script will read `input.md`, convert it to HTML, and write the result to `output.html`.
   ```bash
   node converter.js
   ```

## Script Overview

The `converter.js` script performs the following steps:

1. **Reads the Markdown file**: It reads the content of `input.md`.
2. **Converts Markdown to HTML**: It uses the Showdown library to convert the Markdown content to HTML.
3. **Writes the HTML file**: It writes the converted HTML content to `output.html`.

## Dependencies

- [Node.js](https://nodejs.org/)
- [Showdown](https://github.com/showdownjs/showdown)

## Example

Assuming you have an `input.md` file with the following content:

```markdown
# Sample Markdown

This is a sample markdown file.

- Item 1
- Item 2
- Item 3
```

# License

Check out the LICENSE file for more details
