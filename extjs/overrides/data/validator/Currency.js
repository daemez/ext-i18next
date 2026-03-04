Ext.define('Ext.locale.i18next.data.validator.Currency', {
    override: 'Ext.data.validator.Currency',

    config: {
        message: i18next.t('extjs:data.validator.currency')
    }
});
