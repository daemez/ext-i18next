Ext.define('Ext.locale.i18next.picker.Picker', {
    override: 'Ext.picker.Picker',

    config: {
        doneButton: i18next.t('extjs:picker.picker.doneButton'),
        cancelButton: i18next.t('extjs:picker.picker.cancelButton')
    }
});
