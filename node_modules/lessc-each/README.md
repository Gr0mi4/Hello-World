# lessc-each
A node package that compiles each Less CSS file in a directory.

This module takes some Less files in a given directory,
compiles them into CSS counterparts,
then puts the CSS files into another specified directory.

This function does *not* run recursively, that is, it does *not* look inside subdirectories.
This feature may be added at a later time, so stay tuned.

## Installation

    $ npm install [-g] lessc-each

## Usage

### Command Line

    $ lessc-each  ‹dir1›  ‹dir2›

Where
`‹dir1›` is the directory of Less files to compile, and
`‹dir2›` is the directory for output files.
If `‹dir2›` does not exist, it will automatically be created.
**Both directories *must* be relative to the current path of the command line.**

### Programmatic

(in your own node module)

Currently not supported as this package does not export a module.
This is a feature I would like to add later, so check back for updates.

```js
var lessceach = require('lessc-each')
// would be what you would use
```


## Info

Required

1. Only files ending with `.less` are processed.
2. Files starting with `__` (two underscores), even Less files, are ignored.<sup>&lowast;</sup>

Permissive

- Less files starting with `_` are processed.
- Filenames may contain `.` (period).

**<sup>&lowast;</sup>Why are files starting with `__` ignored?**
Some less files do not output any CSS. Such files include variables, mixins, etc., but do not
include real CSS selectors or rules. It is my personal convention to name these files beginning with
a double-underscore. This program will skip these files in the compiling process.

## Discussion

If you’re asking, “Why would I want to do this?”, read on.

Most authors would rather just `@import` their Less files into one huge master stylesheet, and
then compile the master last. While that workflow may be faster and require fewer steps, it
denies the author of one desperately needed feature in CSS: **encapsulation**.

By compiling each Less file individually, you are able to encapsulate, or modularize, the contents
of the file including its variables and mixins. These essentially makes them private to the file,
and inaccessible to the global namespace, while keeping your pure-CSS selectors still public.
This is a good thing, especially when you have naming conflicts.

But how do you access variables and mixins from, say, a global settings file? Just
`@import (reference)` the file you need at the top of the Less file you need it in. Yes,
this means you might have a bunch of Less files with the same `@import` statement at the top,
but because you are flagging it with `(reference)`, it doesn’t make the file size any bigger.

After you have compiled all mini stylesheets separately, you can concatenate the output files
into your huge master stylesheet by using `@import (inline)`. Then compile the master.

## Changelog

It’s on [Github](https://github.com/chharvey/lessc-each/releases).
