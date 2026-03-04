Ext.define('Ext.locale.i18next.grid.plugin.RowOperations', {
    override: 'Ext.grid.plugin.RowOperations',

    config: {
        triggerText: i18next.t('extjs:grid.plugin.rowOperations.triggerText'),
        cancelText: i18next.t('extjs:grid.plugin.rowOperations.cancelText'),
        deleteText: i18next.t('extjs:grid.plugin.rowOperations.deleteText')
    }
});
