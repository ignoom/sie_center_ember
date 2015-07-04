import Ember from 'ember';
import AppMixinMixin from '../../../mixins/app-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | app mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var AppMixinObject = Ember.Object.extend(AppMixinMixin);
  var subject = AppMixinObject.create();
  assert.ok(subject);
});
