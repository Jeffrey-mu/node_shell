#!/usr/bin / env node
require('shelljs/global');
var argv = require('yargs')
  .command("morning", "good morning", function (yargs) {
    echo("Good Morning");
  })
  .command("evening", "good evening", function (yargs) {
    echo("Good Evening");
  })
  .argv;

console.log('hello ', argv.n);
