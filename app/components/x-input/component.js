import Ember from 'ember';

const { Component, computed, get, isPresent } = Ember;

export default Component.extend({

    tagName: "md-input-container",

    classNames: ['input-field', 'md-default-theme'],

    classNameBindings: ['hasValue:md-input-has-value'],
    hasValue: computed("value", function() {
        return isPresent(get(this,"value")) && get(this, "value.length") > 0;
    }),

    type: "text",


    inputElementId: computed('elementId', function() {
        return `input-${this.get('elementId')}`;
    }),

    _errorMessages: computed('errors.[]', function() {
        return (this.get('errors') || []).join(', ');
    })

});
