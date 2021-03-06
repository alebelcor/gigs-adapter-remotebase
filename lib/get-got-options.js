'use strict';

const pkg = require('../package.json');

module.exports = function getGotOptions() {
  return {
    json: true,
    headers: {
      'user-agent': pkg.repository.url
    },
    query: {
      'is_hiring': true,
      'sortBy': 'hasJobs'
    }
  };
};
