Ext.define('gw.override.form.FieldSet', {
override: 'Ext.form.FieldSet',

    //@UpgradedSencha 5.1 - Identical to Ext.form.FieldSet.setExpanded except
    //                      updateLayout has been commented out (see below)
    setExpanded: function(expanded) {
        var me = this,
            checkboxCmp = me.checkboxCmp,
            operation = expanded ? 'expand' : 'collapse';

        if (!me.rendered || me.fireEvent('before' + operation, me) !== false) {
            expanded = !!expanded;

            if (checkboxCmp) {
                checkboxCmp.setValue(expanded);
            }

            if (expanded) {
                me.removeCls(me.baseCls + '-collapsed');
            } else {
                me.addCls(me.baseCls + '-collapsed');
            }
            me.collapsed = !expanded;
            if (expanded) {
                delete me.getInherited().collapsed;
            } else {
                me.getInherited().collapsed = true;
            }
            if (me.rendered) {
                //@UpgradedSencha 5.1 - Only change from Ext.form.Fieldset:setExpanded
                //me.updateLayout({ isRoot: false }); <--- causes scrolling issues
                me.fireEvent(operation, me);
            }
        }
        return me;
    }

});