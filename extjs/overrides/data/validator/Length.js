Ext.define('Ext.locale.i18next.data.validator.Length', {
    override: 'Ext.data.validator.Length',

    config: {
        minOnlyMessage: i18next.t('extjs:data.validator.minOnlyMessage'),
        maxOnlyMessage: i18next.t('extjs:data.validator.maxOnlyMessage'),
        bothMessage: i18next.t('extjs:data.validator.bothMessage')
    }
});
