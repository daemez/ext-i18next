Ext.define('Ext.locale.i18next.dataview.Abstract', {
    override: 'Ext.dataview.Abstract',

    config: {
        loadingText: i18next.t('extjs:dataview.abstract.loadingText')
    }
});
