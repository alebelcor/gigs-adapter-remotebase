'use strict';

const got = require('got');

const getGotOptions = require('./lib/get-got-options');
const getResponseBody = require('./lib/get-response-body');
const getGigs = require('./lib/get-gigs');

const ADAPTER_ENDPOINT = 'http://api.remotebase.io/jobs';

module.exports = function gigsAdapterRemoteBase(options) {
  options = options || {};

  return got.get(ADAPTER_ENDPOINT, getGotOptions())
    .then(getResponseBody)
    .then(getGigs)
    .catch(console.error);
}
