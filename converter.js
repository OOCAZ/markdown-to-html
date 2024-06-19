// Import required modules
const fs = require("fs");
const showdown = require("showdown");
const path = require("path");

// Function to convert Markdown file to HTML file
function convertMarkdownToHtml(inputFilePath, outputFilePath) {
  // Read the Markdown file
  fs.readFile(inputFilePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading the file ${inputFilePath}:`, err);
      return;
    }

    // Create a new Showdown converter
    const converter = new showdown.Converter();

    // Convert Markdown to HTML
    const html = converter.makeHtml(data);

    // Write the HTML to the output file
    fs.writeFile(outputFilePath, html, (err) => {
      if (err) {
        console.error(`Error writing the file ${outputFilePath}:`, err);
        return;
      }
      console.log(
        `Successfully converted ${inputFilePath} to ${outputFilePath}`
      );
    });
  });
}

// Define input and output file paths
const inputFilePath = path.join(__dirname, "input.md");
const outputFilePath = path.join(__dirname, "output.html");

// Convert the Markdown to HTML
convertMarkdownToHtml(inputFilePath, outputFilePath);
