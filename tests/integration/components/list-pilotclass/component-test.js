import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-pilotclass', 'Integration | Component | list pilotclass', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{list-pilotclass}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#list-pilotclass}}
      template block text
    {{/list-pilotclass}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
