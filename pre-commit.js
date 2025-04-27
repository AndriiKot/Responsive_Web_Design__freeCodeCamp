#!/usr/bin/env node

const path = require("path");
const { execSync } = require("child_process");

const undoChanges = []

// const test1 = execSync("git diff --name-only ", { encoding: "utf-8" })
// const test2 = execSync("git diff --cached --name-only", { encoding: "utf-8" })

// console.log(`Test1: 'git diff --name-only': ${test1}`);
// console.log(`Test2: 'git diff --cached --name-only': ${test2}`);


const test3 = execSync("git ls-files --others --exclude-standard", { encoding: "utf-8" });

const arrFolders = test3.split('\n');
console.dir(arrFolders);

arrFolders.forEach((el,i, arr) => { 
 if (el.includes('Building_a_Magazine')) {
    undoChanges.push(el)
  }
})

//console.log(undoChanges);
undoChanges.length = 0
//console.log(undoChanges);

const status = execSync("git status --short", { encoding: "utf-8" });

console.log(status.split('\n'));

// execSync(`git clean -f ${undoChanges.join(' ')}`)




/*
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

const projectRoot = path.join(__dirname, "..");

const scriptPath = path.join(
  projectRoot,
  "automation",
  "ManagerREADMES",
  "manager_readmes.js"
);

const diffedFiles2 = execSync("git diff --name-only", { encoding: "utf-8" })
  .trim()
  .split("\n");
const stagedFiles2 = execSync("git diff --staged --name-only", {
  encoding: "utf-8",
})
  .trim()
  .split("\n");
const newFiles2 = execSync("git ls-files --others --exclude-standard", {
  encoding: "utf-8",
})
  .trim()
  .split("\n");

const relevantFiles = [...diffedFiles2, ...stagedFiles2, ...newFiles2].filter(
  (file) =>
    ["styles.css", "index.html", "script.js"].includes(path.basename(file))
);


(async () => {
  if (relevantFiles.length > 0) {
    require(scriptPath);
  } else {
    console.log("No relevant changes detected. Skipping script execution.");
  }
})();

setTimeout(() => {
   execSync("git add .", { stdio: "inherit" });  
}, 10000);
  */