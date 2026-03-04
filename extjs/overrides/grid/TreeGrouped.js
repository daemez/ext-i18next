Ext.define('Ext.locale.i18next.grid.TreeGrouped', {
    override: 'Ext.grid.TreeGrouped',

    config: {
        expandAllText: i18next.t('extjs:grid.treeGrouped.expandAllText'),
        collapseAllText: i18next.t('extjs:grid.treeGrouped.collapseAllText'),
        groupSummaryTpl: i18next.t('extjs:grid.treeGrouped.groupSummaryTpl'),
        summaryTpl: i18next.t('extjs:grid.treeGrouped.summaryTpl')
    }
});
