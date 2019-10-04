/*
    PLWEB-5666: We need to manually destroy the time field store to prevent a memory leak.
    This is similar to the metachange listener leak, but there's one more leak involved.
 */
Ext.define('gw.override.form.field.Time', {
    override: 'Ext.form.field.Time',

    destroy: function() {
        var me = this;
        if(me.store) {
            me.store.destroy();
        }
        me.callParent(arguments);
    },

    // PLWEB-6214: check the submit value first to prevent formatting javascript error. If it's not valid, still
    // send back the value to let server side handle the validation.
    // @SenchaUpgrade override private method.
    getSubmitValue: function () {
        var me = this;
        if (!me.isValid()) {
            return me.getValue() || me.getRawValue();
        }
        return me.callParent(arguments);
    }
});