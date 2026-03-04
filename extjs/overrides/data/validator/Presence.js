Ext.define('Ext.locale.i18next.data.validator.Presence', {
    override: 'Ext.data.validator.Presence',

    config: {
        message: i18next.t('extjs:data.validator.presence')
    }
});
