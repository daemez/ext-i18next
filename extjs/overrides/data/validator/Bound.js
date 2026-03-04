Ext.define('Ext.locale.i18next.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: i18next.t('extjs:data.validator.bound.emptyMessage'),
        minOnlyMessage: i18next.t('extjs:data.validator.bound.minOnlyMessage'),
        maxOnlyMessage: i18next.t('extjs:data.validator.bound.maxOnlyMessage'),
        bothMessage: i18next.t('extjs:data.validator.bound.bothMessage')
    }
});
