Ext.define('Ext.locale.i18next.panel.Collapser', {
    override: 'Ext.panel.Collapser',

    config: {
        collapseToolText: i18next.t('extjs:panel.collapser.collapseToolText'),
        expandToolText: i18next.t('extjs:panel.collapser.expandToolText')
    }
});
