Ext.define('Ext.locale.i18next.field.Text', {
    override: 'Ext.field.Text',

    badFormatMessage: i18next.t('extjs:field.text.badFormatMessage'),
    config: {
        requiredMessage: i18next.t('extjs:field.text.requiredMessage'),
        validationMessage: i18next.t('extjs:field.text.validationMessage')
    }
});
