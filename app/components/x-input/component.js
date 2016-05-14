import Ember from 'ember';

const { Component, computed, get, set, isPresent } = Ember;

export default Component.extend({

    tagName: "md-input-container",

    classNames: ['input-field', 'md-default-theme'],

    classNameBindings: ['hasValue:md-input-has-value'],
    //classNameBindings: ['isInvalid:md-input-invalid', 'hasValue:md-input-has-value'],

    hasValue: computed("value", function() {
        if( isPresent(get(this,"value")) && get(this, "value.length") > 0 ) {
            set(this, "isTouched", true);
            return true;
        }
        return false;
    }),


    isTouched: false,

    isInvalid:computed("isTouched", "_errorMessages", function() {
        return get(this, "isTouched") === true && get(this, "_errorMessages.length") > 0;
    }),

    type: "text",


    inputElementId: computed('elementId', function() {
        return `input-${this.get('elementId')}`;
    }),

    _errorMessages: computed('errors.[]', function() {
        return (this.get('errors') || []).join(', ');
    })

});
