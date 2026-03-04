Ext.define('Ext.locale.i18next.field.Date', {
    override: 'Ext.field.Date',

    minDateMessage: i18next.t('extjs:field.date.minDateMessage'),
    maxDateMessage: i18next.t('extjs:field.date.maxDateMessage')
});
