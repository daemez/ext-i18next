Ext.define('Ext.locale.i18next.dataview.plugin.ListPaging', {
    override: 'Ext.dataview.plugin.ListPaging',

    config: {
        loadMoreText: i18next.t('extjs:dataview.plugin.listPaging.loadMoreText'),
        noMoreRecordsText: i18next.t('extjs:dataview.plugin.listPaging.noMoreRecordsText')
    }
});
