Ext.define('Ext.locale.i18next.data.validator.Number', {
    override: 'Ext.data.validator.Number',

    config: {
        message: i18next.t('extjs:data.validator.number')
    }
});
