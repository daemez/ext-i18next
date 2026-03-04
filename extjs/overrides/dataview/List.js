Ext.define('Ext.locale.i18next.dataview.List', {
    override: 'Ext.dataview.List',

    config: {
        loadingText: i18next.t('extjs:dataview.list.loadingText')
    }
});
