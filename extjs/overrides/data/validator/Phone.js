Ext.define('Ext.locale.i18next.data.validator.Phone', {
    override: 'Ext.data.validator.Phone',

    config: {
        message: i18next.t('extjs:data.validator.phone')
    }
});
