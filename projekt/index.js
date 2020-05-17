#!/usr/bin/env node

require('yargs')
.scriptName("amnc")
.command({
    command: 'fixdates <file> <columns..>',
    desc: 'Read a CSV, convert written dates to numbers and saves the CSV',
    aliases: ['fd'],
    builder: (yargs) => yargs.default('value', 'true'),
    handler: require('./src/fixdates')
  })
.command({
    command: 'urltotitle <file> <columns..>',
    desc: 'Read a CSV, convert URLs to its <title> and saves the CSV',
    aliases: ['utt'],
    builder: (yargs) => yargs.default('value', 'true'),
    handler: require('./src/urltotitle')
  })
.demandCommand(1, 1, "Requires a command to run", "Can only run 1 command")
.version(false)
.help(false)
.argv;