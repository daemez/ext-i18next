Ext.define('Ext.locale.i18next.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    config: {
        nanMessage: i18next.t('extjs:data.validator.range.nanMessage'),
        minOnlyMessage: i18next.t('extjs:data.validator.range.minOnlyMessage'),
        maxOnlyMessage: i18next.t('extjs:data.validator.range.maxOnlyMessage'),
        bothMessage: i18next.t('extjs:data.validator.range.bothMessage')
    }
});
