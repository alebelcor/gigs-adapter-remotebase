'use strict';

const gigs = require('gigs');

const isFullTime = require('./is-full-time');
const getPublishedAt = require('./get-published-at');

const ADAPTER_SOURCE = 'remotebase';
const ADAPTER_SOURCE_URL = 'https://remotebase.io';

module.exports = function getGigs(json) {
  return json.map((job) => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL,
      title: job.title,
      description: job.description,
      url: job.url,
      company_name: job.company.name,
      full_time: isFullTime(job),
      remote: true,
      published_at: getPublishedAt(job)
    });
  });
};
