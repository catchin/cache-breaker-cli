#Cache Breaking CLI

**This module provides a command line interface to the cache-breaker plugin. It can be used for npm-only build scripts**


##Install

```
npm install cache-breaker
```

##Usage

```
Usage: cli [options] <input-file>

Options:

  -h, --help                 output usage information
  -o, --out <filename>       output file
  -m, --match <items>        list of filenames to rewrite, separated by comma
  -p, --position <position>  type of replacement. Query string by default, can be set to one of [filename|overwrite]
```

##Usage Example
The following appends a timestamp query string to the style.css and main.js files in inputfile.html and writes the result to outputfile.html.
```
cache-breaker -o outputfile.html -m 'style.css,main.js' inputfile.html
```
