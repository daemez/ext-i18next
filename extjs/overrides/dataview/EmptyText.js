Ext.define('Ext.locale.i18next.dataview.EmptyText', {
    override: 'Ext.dataview.EmptyText',

    config: {
        html: i18next.t('extjs:dataview.emptyText.html')
    }
});
