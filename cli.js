#!/usr/bin/env node

const util = require('util');
const { spawn } = require('child_process');
const fse = require('fs-extra');

function mySpawn(command, args, options, cb) {
  const child = spawn(command, args, options);
  child.on('close', (exitCode) => { cb(null, exitCode) });
  return child;
}

const mySpawnPromisified = util.promisify(mySpawn);

mySpawnPromisified(
    'yarn',
    ['add', 'react@18.2.0'],
    { stdio: 'inherit' }
).then(function(exitCode) {
  console.log("Installed react@18.2.0");
  console.log(`Exited with: ${ exitCode }`);
});

mySpawnPromisified(
    'yarn',
    ['add', 'react-dom@18.2.0'],
    { stdio: 'inherit' }
).then(function(exitCode) {
  console.log("Install react-dom@18.2.0");
  console.log(`Exited with: ${ exitCode }`);
});


function copyReact() {
  const srcDir = `./node_modules/pcs-polaris/templates/v1`;
  const destDir = `./`;
  // To copy a folder or file, select overwrite accordingly
  try {
    fse.copySync(srcDir, destDir, { overwrite: true|false })
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}
