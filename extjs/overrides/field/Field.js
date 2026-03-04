Ext.define('Ext.locale.i18next.field.Field', {
    override: 'Ext.field.Field',

    config: {
        requiredMessage: i18next.t('extjs:field.field.requiredMessage'),
        validationMessage: i18next.t('extjs:field.field.validationMessage')
    }
});
