#!/usr/bin/env node
require('source-map-support').install();
const path = require('path');
const AzkBenchmarkCli = require('../lib/src/cli/index');

const cli = new AzkBenchmarkCli();
cli.createCli({ path: path.join(__dirname, 'usage.txt') });
