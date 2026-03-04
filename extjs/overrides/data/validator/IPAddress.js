Ext.define('Ext.locale.i18next.data.validator.IPAddress', {
    override: 'Ext.data.validator.IPAddress',

    config: {
        message: i18next.t('extjs:data.validator.ipAddress')
    }
});
