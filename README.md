# Deprecated

![No Maintenance Intended](https://img.shields.io/maintenance/no/2018.svg)

[RemoteBase](https://remotebase.io) has shut down.

- - -

# gigs-adapter-remotebase

> A [gigs](https://github.com/alebelcor/gigs) adapter for [RemoteBase](https://remotebase.io)

[![npm version](https://img.shields.io/npm/v/gigs-adapter-remotebase.svg)](https://npmjs.org/package/gigs-adapter-remotebase)
[![Build Status](https://img.shields.io/travis/alebelcor/gigs-adapter-remotebase/master.svg)](https://travis-ci.org/alebelcor/gigs-adapter-remotebase)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/gigs-adapter-remotebase.svg)](https://coveralls.io/github/alebelcor/gigs-adapter-remotebase)

## Install

Ensure you have [Node.js](https://nodejs.org) version 4+ installed. Then run the following:

```bash
npm install --save gigs
npm install --save gigs-adapter-remotebase
```

## Usage

```js
const gigs = require('gigs');

const adapter = require('gigs-adapter-remotebase');

gigs([adapter])
  .process()
  .then(gigs => {
    console.log(gigs);
    //=> [ {title: 'Senior Node.js Developer'}, ... ]
  });
```

## Related

* [gigs](https://github.com/alebelcor/gigs) - A jobs/careers/openings/positions aggregator

## License

MIT © Alejandro Beltrán

## Disclaimer

This was made for illustrative purposes.
I do not own the content generated by this tool.
All rights belong to their respective owners.
No copyright infringement intended.
