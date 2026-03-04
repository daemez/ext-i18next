Ext.define('Ext.locale.i18next.picker.Date', {
    override: 'Ext.picker.Date',

    config: {
        doneButton: i18next.t('extjs:picker.date.doneButton'),
        monthText: i18next.t('extjs:picker.date.monthText'),
        dayText: i18next.t('extjs:picker.date.dayText'),
        yearText: i18next.t('extjs:picker.date.yearText')
    }
});
