#!/usr/bin/env node

const path = require("path");
const { execSync } = require("child_process");

const undoChanges = [];

// const test1 = execSync("git diff --name-only ", { encoding: "utf-8" })
// const test2 = execSync("git diff --cached --name-only", { encoding: "utf-8" })

// console.log(`Test1: 'git diff --name-only': ${test1}`);
// console.log(`Test2: 'git diff --cached --name-only': ${test2}`);

const test3 = execSync("git ls-files --others --exclude-standard", {
  encoding: "utf-8",
});

const arrFolders = test3.split("\n");
console.dir(arrFolders);

arrFolders.forEach((el, i, arr) => {
  if (el.includes("Building_a_Magazine")) {
    undoChanges.push(el);
  }
});

console.log(undoChanges);
undoChanges.length = 0;
console.log(undoChanges);

const statuses = ["??", "A"];

const status = execSync("git status --short", { encoding: "utf-8" });

console.log(status.split("\n"));

// execSync(`git clean -f ${undoChanges.join(' ')}`)   // if you '??'
// execSync('git restore ${}`)                         // if you 'AD', 'AM', 'M', 'D'
// execSync(`git restore --staged ${}`)                // if you 'A'

config = ["Building_a_Magazine"];

config.forEach((el, i, arr) => {
  execSync(`git restore --staged ${el}`);
  execSync(`git restore ${el}`);
  execSync(`git clean -f ${el}`);
});
