Ext.define('Ext.locale.i18next.panel.Date', {
    override: 'Ext.panel.Date',

    config: {
        headerLength: 2,
        startDay: parseInt(i18next.t('extjs:date.firstDayOfWeek'), 10),
        nextText: i18next.t('extjs:panel.date.nextText'),
        prevText: i18next.t('extjs:panel.date.prevText'),
        buttons: {
            footerTodayButton: {
                text: i18next.t('extjs:panel.date.footerTodayButton')
            }
        }
    }
});
