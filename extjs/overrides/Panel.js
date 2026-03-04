Ext.define('Ext.locale.i18next.Panel', {
    override: 'Ext.Panel',

    config: {
        standardButtons: {
            ok: {
                text: i18next.t('extjs:panel.ok')
            },
            abort: {
                text: i18next.t('extjs:panel.abort')
            },
            retry: {
                text: i18next.t('extjs:panel.retry')
            },
            ignore: {
                text: i18next.t('extjs:panel.ignore')
            },
            yes: {
                text: i18next.t('extjs:panel.yes')
            },
            no: {
                text: i18next.t('extjs:panel.no')
            },
            cancel: {
                text: i18next.t('extjs:panel.cancel')
            },
            apply: {
                text: i18next.t('extjs:panel.apply')
            },
            save: {
                text: i18next.t('extjs:panel.save')
            },
            submit: {
                text: i18next.t('extjs:panel.submit')
            },
            help: {
                text: i18next.t('extjs:panel.help')
            },
            close: {
                text: i18next.t('extjs:panel.close')
            }
        },
        closeToolText: i18next.t('extjs:panel.closeToolText')
    }
});
