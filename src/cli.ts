#!/usr/bin/env node

/* eslint @typescript-eslint/no-var-requires: "off" */
const util = require('util')
/* eslint @typescript-eslint/no-var-requires: "off" */
const { spawn } = require('child_process')
/* eslint @typescript-eslint/no-var-requires: "off" */
const fse = require('fs-extra')

function mySpawn(command: string, args: string[], options: any, cb: any) {
  const child = spawn(command, args, options)
  child.on('close', (exitCode: any) => {
    cb(null, exitCode)
  })
  return child
}

const mySpawnPromisified = util.promisify(mySpawn)

mySpawnPromisified(
  'yarn',
  [
    'add',
    'react@18.2.0',
    'react-dom@18.2.0',
    'react-router-dom@6.12.1',
    'react-redux',
    '@reduxjs/toolkit',
    'redux-saga',
    'axios',
    'lodash',
    'moment',
  ],
  { stdio: 'inherit' },
).then(function (exitCode: any) {
  console.log('Installed package dependences successfully')
  console.log(`Exited with: ${exitCode}`)
})

mySpawnPromisified(
  'yarn',
  ['add', '-D', '@types/react', '@types/react-dom', '@types/react-router-dom', 'typescript', 'sass', 'sass-loader'],
  { stdio: 'inherit' },
).then(function (exitCode: any) {
  console.log('Installed package devDependences successfully')
  console.log(`Exited with: ${exitCode}`)
})

function copyReact() {
  const srcDir = `./node_modules/pcs-polaris/templates/v1`
  const destDir = `./`
  // To copy a folder or file, select overwrite accordingly
  try {
    fse.copySync(srcDir, destDir, { overwrite: false })
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}
copyReact()
