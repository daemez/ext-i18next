Ext.define('Ext.locale.i18next.grid.plugin.grouping.Panel', {
    override: 'Ext.grid.plugin.grouping.Panel',

    groupingPanelText: i18next.t('extjs:grid.plugin.grouping.panel.groupingPanelText'),
    showGroupingPanelText: i18next.t('extjs:grid.plugin.grouping.panel.showGroupingPanelText'),
    hideGroupingPanelText: i18next.t('extjs:grid.plugin.grouping.panel.hideGroupingPanelText'),
    clearGroupText: i18next.t('extjs:grid.plugin.grouping.panel.clearGroupText'),
    sortAscText: i18next.t('extjs:grid.plugin.grouping.panel.sortAscText'),
    sortDescText: i18next.t('extjs:grid.plugin.grouping.panel.sortDescText'),
    moveLeftText: i18next.t('extjs:grid.plugin.grouping.panel.moveLeftText'),
    moveRightText: i18next.t('extjs:grid.plugin.grouping.panel.moveRightText'),
    moveBeginText: i18next.t('extjs:grid.plugin.grouping.panel.moveBeginText'),
    moveEndText: i18next.t('extjs:grid.plugin.grouping.panel.moveEndText'),
    removeText: i18next.t('extjs:grid.plugin.grouping.panel.removeText'),

    config: {
        emptyText: i18next.t('extjs:grid.plugin.grouping.panel.emptyText'),
        groupText: i18next.t('extjs:grid.plugin.grouping.panel.groupText')
    }
});
