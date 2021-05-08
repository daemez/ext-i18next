i18next = require('i18next').default;
LanguageDetector = require('i18next-browser-languagedetector').default;
Backend = require('i18next-chained-backend').default;
LocalStorageBackend = require('i18next-localstorage-backend').default;
HTTPBackend = require('i18next-http-backend').default;
_defaults = require('./utils.js').defaults;

const getDefaults = () => {
    return {
        fallbackLng: ['en'],
        ns: ['translation', 'extjs'],
        defaultNS: 'translation',
        preload: ['en'],
        debug: true,
        detection: {
            lookupLocalStorage: 'ext_i18nextLng',
        },
        backend: {
            backends: [
                LocalStorageBackend,  // primary
                HTTPBackend           // fallback
            ],
            backendOptions: [{
                prefix: 'ext_i18nextRes-',
                defaultVersion: Ext.manifest.localeVersion || '0.1.0',
                expirationTime: 365 * 24 * 60 * 60 * 1000
            }, {
                loadPath: (languages, namespaces) => {
                    if (namespaces == 'extjs') {
                        return Ext.getResourcePath('locales/{{lng}}/{{ns}}.json', null, 'i18next');
                    }
                    return Ext.getResourcePath('locales/{{lng}}/{{ns}}.json');
                }
            }]
        }
    };
};

module.exports.init = (options = {}) => {
    this.options = _defaults(options, this.options || {}, getDefaults());

    if (!options.backend.backends) {
        this.options.backend.backends = getDefaults().backend.backends;
    } else {
        this.options.backend.backends = _defaults(options.backend.backends, getDefaults().backend.backends);
    }

    if (!options.backend.backendOptions[0]) {
        this.options.backend.backendOptions[0] = getDefaults().backend.backendOptions[0];
    } else {
        this.options.backend.backendOptions[0] = _defaults(options.backend.backendOptions[0], getDefaults().backend.backendOptions[0]);
    }

    if (!options.backend.backendOptions[1]) {
        this.options.backend.backendOptions[1] = getDefaults().backend.backendOptions[1];
    } else {
        this.options.backend.backendOptions[1] = _defaults(options.backend.backendOptions[1], getDefaults().backend.backendOptions[1]);
    }

    i18next
        .use(LanguageDetector)
        .use(Backend)
        .init(this.options);

    i18next.on('initialized', function () {
        i18next.on('languageChanged', function () {
            window.location.reload();
        });
    });
};