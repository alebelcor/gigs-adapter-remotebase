'use strict';

import test from 'ava';
import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2016-12-16', getPublishedAt({created_at: 1481846400000}));
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
