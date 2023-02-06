/*
Utility for fixing Github 404 error when you use React Router DOM 
*/
console.log("Creating 404.html for react-router-dom...");

const fs = require("fs");

const src = "./build/index.html";
const dest = "./build/404.html";

fs.copyFile(src, dest, (error) => {
    if (error) {
      console.error(error);
      return;
    }
  
    console.log("Copied Successfully!");
  });

/* 
Taken from https://melvingeorge.me/blog/copy-contents-from-file-asynchronously-nodejs
*/
