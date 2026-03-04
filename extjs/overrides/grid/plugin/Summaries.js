Ext.define('Ext.locale.i18next.grid.plugin.Summaries', {
    override: 'Ext.grid.plugin.Summaries',

    textNone: i18next.t('extjs:grid.plugin.summaries.textNone'),
    summaryText: i18next.t('extjs:grid.plugin.summaries.summaryText'),

    config: {
        text: i18next.t('extjs:grid.plugin.summaries.text')
    }
});
