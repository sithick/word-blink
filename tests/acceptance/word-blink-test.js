import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | word blink', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /word-blink', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
