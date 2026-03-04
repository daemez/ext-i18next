Ext.define('Ext.locale.i18next.dataview.DataView', {
    override: 'Ext.dataview.DataView',

    config: {
        emptyText: i18next.t('extjs:dataview.dataview.emptyText')
    }
});
