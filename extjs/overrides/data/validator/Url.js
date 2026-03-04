Ext.define('Ext.locale.i18next.data.validator.Url', {
    override: 'Ext.data.validator.Url',

    config: {
        message: i18next.t('extjs:data.validator.url')
    }
});
