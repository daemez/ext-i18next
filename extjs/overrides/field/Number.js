Ext.define('Ext.locale.i18next.field.Number', {
    override: 'Ext.field.Number',

    decimalsText: i18next.t('extjs:field.number.decimalsText'),
    minValueText: i18next.t('extjs:field.number.minValueText'),
    maxValueText: i18next.t('extjs:field.number.maxValueText'),
    badFormatMessage: i18next.t('extjs:field.number.badFormatMessage')
});
