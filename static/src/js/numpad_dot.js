odoo.define('web_decimal_numpad_dot.numpad_dot', function (require) {
"use strict";

var core = require('web.core');

var _t = core._t;
var QWeb = core.qweb;

core.form_widget_registry.get('float').include({
    render_value: function() {
        var self = this;
        this._super();
        if (!this.get('readonly')){
            this.$el.find('input').on('keypress', this.floatKeypress.bind(this));
        }
    },
    floatKeypress: function(e){
        if(e.keyCode == '46' || e.charCode == '46'){
            //Cancel the keypress
            e.preventDefault();
            // Add the comma to the value of the input field
            if(this.$el.find("input")[0].value.slice(-1)!=','){
                this.$("input").val(this.$("input").val() + ',');
            }
         }
},
});

});
