Ext.define('Ext.locale.i18next.data.validator.Email', {
    override: 'Ext.data.validator.Email',

    config: {
        message: i18next.t('extjs:data.validator.email')
    }
});
