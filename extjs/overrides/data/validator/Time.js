Ext.define('Ext.locale.i18next.data.validator.Time', {
    override: 'Ext.data.validator.Time',

    config: {
        message: i18next.t('extjs:data.validator.time')
    }
});
