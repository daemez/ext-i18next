Ext.define('Ext.locale.i18next.grid.column.Groups', {
    override: 'Ext.grid.column.Groups',

    config: {
        text: i18next.t('extjs:grid.column.groups'),
        groupSummaryTpl: i18next.t('extjs:grid.treeGrouped.groupSummaryTpl'),
        summaryTpl: i18next.t('extjs:grid.treeGrouped.summaryTpl')
    }
});
