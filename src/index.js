/**
 * @daemez/ext-i18next - i18next integration for Ext JS
 * Handles ESM/CJS module interoperability automatically
 */

// Helper to handle both ESM and CJS exports
const interop = (m) => m.default || m;

// Expose i18next globally for use in Ext JS components
// These intentionally omit const/let to create globals
/* eslint-disable no-implicit-globals, no-undef */
i18next = require('i18next');
LanguageDetector = interop(require('i18next-browser-languagedetector'));
Backend = interop(require('i18next-chained-backend'));
LocalStorageBackend = interop(require('i18next-localstorage-backend'));
HTTPBackend = interop(require('i18next-http-backend'));
/* eslint-enable no-implicit-globals, no-undef */

const _defaults = require('./utils.js').defaults;

const getDefaults = () => {
    return {
        initImmediate: false,
        load: 'languageOnly',
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
                    if (namespaces === 'extjs') {
                        return Ext.getResourcePath('locales/{{lng}}/{{ns}}.json', null, 'i18next');
                    }
                    return Ext.getResourcePath('locales/{{lng}}/{{ns}}.json');
                }
            }]
        }
    };
};

let _options = {};

module.exports.init = (options = {}) => {
    _options = _defaults(options, _options, getDefaults());

    if (!options.backend?.backends) {
        _options.backend.backends = getDefaults().backend.backends;
    } else {
        _options.backend.backends = _defaults(options.backend.backends, getDefaults().backend.backends);
    }

    if (!options.backend?.backendOptions?.[0]) {
        _options.backend.backendOptions[0] = getDefaults().backend.backendOptions[0];
    } else {
        _options.backend.backendOptions[0] = _defaults(options.backend.backendOptions[0], getDefaults().backend.backendOptions[0]);
    }

    if (!options.backend?.backendOptions?.[1]) {
        _options.backend.backendOptions[1] = getDefaults().backend.backendOptions[1];
    } else {
        _options.backend.backendOptions[1] = _defaults(options.backend.backendOptions[1], getDefaults().backend.backendOptions[1]);
    }

    i18next
        .use(LanguageDetector)
        .use(Backend)
        .init(_options);

    i18next.on('initialized', function () {
        i18next.on('languageChanged', function () {
            window.location.reload();
        });
    });
};