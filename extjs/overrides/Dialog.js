Ext.define('Ext.locale.i18next.Dialog', {
    override: 'Ext.Dialog',

    config: {
        maximizeTool: {
            tooltip: i18next.t('extjs:dialog.maximizeTool')
        },
        restoreTool: {
            tooltip: i18next.t('extjs:dialog.restoreTool')
        }
    }
});
