#!/usr/bin/env node

/* eslint @typescript-eslint/no-var-requires: "off" */
const util = require('util');
/* eslint @typescript-eslint/no-var-requires: "off" */
const { spawn } = require('child_process');
/* eslint @typescript-eslint/no-var-requires: "off" */
const fse = require('fs-extra');
const fs = require('fs');

function mySpawn(command: string, args: string[], options: any, cb: any) {
  const child = spawn(command, args, { ...options, ...{ shell: true } });
  child.on('close', (exitCode: any) => {
    cb(null, exitCode);
  });
  return child;
}

const mySpawnPromisified = util.promisify(mySpawn);

function createReactApp() {
  const srcDir = `./node_modules/pcs-polaris/templates/v1`;
  const destDir = `./`;
  // To copy a folder or file, select overwrite accordingly
  try {
    let allFiles: string[] = [];
    fs.readdirSync(destDir).forEach((file: string) => {
      allFiles.push(file);
    });
    if (allFiles.includes('src')) {
      console.log('\x1b[31m%s\x1b[0m', `Create pcs admin template failed! The "src" directory is already exists`);
    } else {
      fse.copySync(srcDir, destDir, { overwrite: true });
      console.log('\x1b[36m%s\x1b[0m', `Create pcs admin template successfully`);
    }
  } catch (err) {
    console.error(err);
  }
}

const argv = process.argv;
console.log(process.argv);
if (argv[2] == 'create') {
  // mySpawnPromisified(
  //     'yarn',
  //     [
  //         'add',
  //         'react@18.2.0',
  //         'react-dom@18.2.0',
  //         'react-router-dom@6.12.1',
  //         'react-redux@8.1.1',
  //         '@reduxjs/toolkit@1.9.5',
  //         'redux-saga@1.2.3',
  //         'axios@1.4.0',
  //         'lodash@4.17.21',
  //         'moment@2.29.4',
  //     ],
  //     {stdio: 'inherit'},
  // ).then(function (exitCode: any) {
  //     console.log('\x1b[36m%s\x1b[0m', `Installed package dependencies successfully ${exitCode}`);
  //
  //     mySpawnPromisified(
  //         'yarn',
  //         [
  //             'add',
  //             '-D',
  //             '@testing-library/react',
  //             '@types/jest',
  //             '@types/lodash',
  //             '@types/react',
  //             '@types/react-dom',
  //             '@types/react-router-dom',
  //             '@typescript-eslint/eslint-plugin',
  //             '@typescript-eslint/parser',
  //             '@vitejs/plugin-react',
  //             'eslint',
  //             'eslint-config-prettier',
  //             'eslint-plugin-prettier',
  //             'eslint-plugin-react',
  //             'eslint-plugin-react-hooks',
  //             'jest',
  //             'jest-canvas-mock',
  //             'jest-environment-jsdom',
  //             'prettier',
  //
  //             'typescript',
  //             'sass',
  //             'sass-loader',
  //             'ts-jest',
  //             'vite',
  //         ],
  //         {stdio: 'inherit'},
  //     ).then(function (exitCode: any) {
  //         console.log('\x1b[36m%s\x1b[0m', `Installed package devDependencies successfully ${exitCode}`);
  //
  //
  //     });
  // });
  createReactApp();
}
