/**
 * Reads the names of all files in a folder and writes them to a file.
 *
 * Usage: node index.js <folder> <file>
 */

import chalk from "chalk";
import fs from "fs";

const folderInput = process.argv[2];
const fileOutput = process.argv[3];

if (!folderInput || !fileOutput) {
  console.log(chalk.bold.red("Please provide a file and folder as an argument.\n"));
  process.exit(1);
} else if (!fs.existsSync(folderInput)) {
  console.log(chalk.bold.red("Folder does not exist.\n"));
  process.exit(1);
} else if (!fs.statSync(folderInput).isDirectory()) {
  console.log(chalk.bold.red("Path is a file, expected directory.\n"));
  process.exit(1);
}

const files = fs.readdirSync(folderInput);
const fileNames = files.map((file) => file.replace(/\.[^/.]+$/, ""));

fs.writeFileSync(fileOutput, fileNames.join("\n"));

console.log(chalk.green(`File names have been written to ${fileOutput}.\n`));
