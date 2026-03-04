Ext.define('Ext.locale.i18next.LoadMask', {
    override: 'Ext.LoadMask',

    config: {
        message: i18next.t('extjs:loadMask')
    }
});
