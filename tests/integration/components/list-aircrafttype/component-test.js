import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-aircrafttype', 'Integration | Component | list aircrafttype', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{list-aircrafttype}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#list-aircrafttype}}
      template block text
    {{/list-aircrafttype}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
