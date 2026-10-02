const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                Ext: 'writable',
                i18next: 'writable',
                LanguageDetector: 'writable',
                Backend: 'writable',
                LocalStorageBackend: 'writable',
                HTTPBackend: 'writable',
                _defaults: 'writable'
            }
        },
        rules: {
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'always']
        }
    },
    {
        files: ['scripts/**/*.js'],
        languageOptions: { globals: globals.node }
    }
];
