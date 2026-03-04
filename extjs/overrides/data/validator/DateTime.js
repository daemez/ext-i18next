Ext.define('Ext.locale.i18next.data.validator.DateTime', {
    override: 'Ext.data.validator.DateTime',

    config: {
        message: i18next.t('extjs:data.validator.dateTime')
    }
});
