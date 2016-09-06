'use strict';

const cacheBreakerCli = require('../main');
const files = require('../filesupport');
const expect = require('chai').expect;

describe('cache-breaker-cli', function() {
  const callWithMatch = function(match, additionalArgs) {
    let cliArgs = ['node', 'test', '-o', 'test-out.html', '-m', match];
    if (additionalArgs) {
      cliArgs = cliArgs.concat(additionalArgs);
    }
    cliArgs.push('test.html');
    cacheBreakerCli(cliArgs);
    return files.readFile('test-out.html');
  };

  it('should add query string by default', function() {
    const replacedContent = callWithMatch('main.js,style.css');

    expect(replacedContent).to.match(/"main.js\?rel=[0-9]+"/);
    expect(replacedContent).to.match(/"style.css\?rel=[0-9]+"/);
  });

  it('should only modify matched files', function() {
    const replacedContent = callWithMatch('main.js');

    expect(replacedContent).to.match(/"main.js\?rel=[0-9]+"/);
    expect(replacedContent).to.not.match(/"style.css\?rel=[0-9]+"/);
  });

  it('should use filename replacement if specified', function() {
    const replacedContent = callWithMatch('main.js', ['-p', 'filename']);

    expect(replacedContent).to.match(/"main\.[0-9]+\.js"/);
    expect(replacedContent).to.not.match(/"style\.[0-9]+\.css"/);
  });
});