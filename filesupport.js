'use strict';

const fs = require('fs');

exports.readFile = function(file) {
  try {
    return fs.readFileSync(file, {encoding: 'utf8'});
  }
  catch (e) {
    throw new Error('Cannot read file "' + file + '"\n' + e.message);
  }
};

exports.writeFile = function(file, content) {
  try {
    return fs.writeFileSync(file, content, {encoding: 'utf8'});
  }
  catch (e) {
    throw new Error('Cannot read file "' + file + '"\n' + e.message);
  }
};

