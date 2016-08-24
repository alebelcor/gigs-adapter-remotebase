'use strict';

import test from 'ava';
import getGigs from '../lib/get-gigs';

test('it should return an array of results', t => {
  const json = [{company: {name: 'foo'}}, {company: {name: 'bar'}}, {company: {name: 'baz'}}];

  t.true(Array.isArray(getGigs(json)));
  t.deepEqual(3, getGigs(json).length);
});
