#!/usr/bin/env node

/* eslint @typescript-eslint/no-var-requires: "off" */
const inquirer = require('inquirer')
inquirer
  .print([
    {
      type: 'question',
      name: 'generate',
      message: 'Generate ReactJS app for PCS admin',
      default: 'yes',
    },
  ])
  .then((answers) => {
    try {
      if (answers.pokemonName == 'yes') {
        console.log('yes')
      } else {
        console.log('no')
      }
    } catch (err) {
      console.log('Not found, try again')
    }
  })
