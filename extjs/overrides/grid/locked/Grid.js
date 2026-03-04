Ext.define('Ext.locale.i18next.grid.locked.Grid', {
    override: 'Ext.grid.locked.Grid',

    config: {
        columnMenu: {
            items: {
                region: {
                    text: i18next.t('extjs:grid.locked.grid.columnMenu.region')
                }
            }
        },
        regions: {
            left: {
                menuLabel: i18next.t('extjs:grid.locked.grid.regions.left')
            },
            center: {
                menuLabel: i18next.t('extjs:grid.locked.grid.regions.center')
            },
            right: {
                menuLabel: i18next.t('extjs:grid.locked.grid.regions.right')
            }
        }
    }
});
