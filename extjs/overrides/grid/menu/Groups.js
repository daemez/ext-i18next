Ext.define('Ext.locale.i18next.grid.menu.Groups', {
    override: 'Ext.grid.menu.Groups',

    config: {
        text: i18next.t('extjs:grid.menu.groups')
    },

    // The whole array replaces the class's, so iconCls and handler are repeated from Ext.grid.menu.Groups
    menu: [
        {
            iconCls: Ext.baseCSSPrefix + 'headermenu-expand-groups',
            text: i18next.t('extjs:grid.treeGrouped.expandAllText'),
            handler: 'up.expandAll'
        },
        {
            iconCls: Ext.baseCSSPrefix + 'headermenu-collapse-groups',
            text: i18next.t('extjs:grid.treeGrouped.collapseAllText'),
            handler: 'up.collapseAll'
        }
    ]
});
