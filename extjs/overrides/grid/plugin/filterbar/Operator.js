Ext.define(
    'Ext.locale.i18next.grid.plugin.filterbar.Operator',
    {
        override: 'Ext.grid.plugin.filterbar.Operator',

        operatorsTextMap: {
            eq: i18next.t('extjs:grid.plugin.filterbar.operator.eq'),
            ne: i18next.t('extjs:grid.plugin.filterbar.operator.ne'),
            gt: i18next.t('extjs:grid.plugin.filterbar.operator.gt'),
            ge: i18next.t('extjs:grid.plugin.filterbar.operator.ge'),
            lt: i18next.t('extjs:grid.plugin.filterbar.operator.lt'),
            le: i18next.t('extjs:grid.plugin.filterbar.operator.le'),
            like: i18next.t('extjs:grid.plugin.filterbar.operator.like'),
            nlike: i18next.t('extjs:grid.plugin.filterbar.operator.nlike'),
            empty: i18next.t('extjs:grid.plugin.filterbar.operator.empty'),
            nempty: i18next.t('extjs:grid.plugin.filterbar.operator.nempty'),
            identical: i18next.t('extjs:grid.plugin.filterbar.operator.identical'),
            nidentical: i18next.t('extjs:grid.plugin.filterbar.operator.nidentical'),
            regex: i18next.t('extjs:grid.plugin.filterbar.operator.regex'),
            in: i18next.t('extjs:grid.plugin.filterbar.operator.in'),
            notin: i18next.t('extjs:grid.plugin.filterbar.operator.notin')
        }
    },
    function () {
        var prototype = this.prototype,
            texts = prototype.operatorsTextMap;

        texts['='] = texts.eq;
        texts['=='] = texts.eq;
        texts['!='] = texts.ne;
        texts['==='] = texts.identical;
        texts['!=='] = texts.nidentical;
        texts['>'] = texts.gt;
        texts['>='] = texts.ge;
        texts['<'] = texts.lt;
        texts['<='] = texts.le;
        texts['/='] = texts.regex;
    }
);
