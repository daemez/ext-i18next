Ext.define('Ext.locale.i18next.data.validator.Date', {
    override: 'Ext.data.validator.Date',

    config: {
        message: i18next.t('extjs:data.validator.date')
    }
});
