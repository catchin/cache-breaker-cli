'use strict';

const cacheBreaker = require('cache-breaker');
const program = require('commander');
const files = require('./filesupport');

module.exports = function(args) {

  const list = function(val) {
    return val.split(',');
  };

  program
  .usage('[options] <input-file>')
  .option('-o, --out <filename>', 'output file')
  .option('-m, --match <items>', 'list of filenames to rewrite, separated by comma', list)
  .option('-p, --position <position>', 'type of replacement. Query string by default, can be set to one of [filename|overwrite]')
  .parse(args);

  const content = files.readFile(program.args[0]);
  const output = cacheBreaker.breakCache(content, program.match, {position: program.position});
  files.writeFile(program.out, output);
};
