# Cache Breaking CLI

[![Build Status](https://travis-ci.org/catchin/cache-breaker-cli.svg?branch=master)](https://travis-ci.org/catchin/cache-breaker-cli.svg)

This module provides a command line interface to the cache-breaker plugin. It can be used for npm-only build scripts

**ATTENTION: Note that this npm module is no longer maintained and outdated, also because the main dependency is not maintained**


## Install

```
npm install cache-breaker
```

## Usage

```
Usage: cache-breaker [options] <input-file>

Options:

  -h, --help                 output usage information
  -o, --out <filename>       output file
  -m, --match <items>        list of filenames to rewrite, separated by comma
  -p, --position <position>  type of replacement. Query string by default, can be set to one of [filename|overwrite]
```

## Usage Example
The following appends a timestamp query string to the style.css and main.js files in inputfile.html and writes the result to outputfile.html.
```
cache-breaker -o outputfile.html -m 'style.css,main.js' inputfile.html
```
