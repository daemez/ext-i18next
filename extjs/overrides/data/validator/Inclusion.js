Ext.define('Ext.locale.i18next.data.validator.Inclusion', {
    override: 'Ext.data.validator.Inclusion',

    config: {
        message: i18next.t('extjs:data.validator.inclusion')
    }
});
