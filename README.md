# ext-i18next

Internationalization for Ext JS applications using [i18next](https://www.i18next.com/).

Provides translated ExtJS framework strings (dates, validators, grid menus, dialogs, etc.) with runtime language switching via i18next, replacing Sencha's build-time locale packages.

## Features

- Runtime language switching (no rebuild required)
- Chained backend: LocalStorage cache with HTTP fallback
- Pre-built translations for **English**, **Spanish**, **Catalan**, **French** and **Portuguese**
- All ExtJS modern toolkit components covered (40+ overrides)
- Easy to add new languages — just add a JSON file

## Installation

```bash
npm install @daemez/ext-i18next
```

### Sencha workspace configuration

Add the package path to your `workspace.json` so Sencha Cmd can find it:

```json
"packages": {
    "dir": "...,${workspace.dir}/node_modules/@daemez"
}
```

### App configuration

Enable the package in your `app.json`:

```json
"requires": [
    "daemez-i18next"
]
```

Optionally add a locale version for cache busting — changing this value will refresh cached translations in LocalStorage:

```json
"localeVersion": "1.0.0"
```

## Usage

### Basic setup

In your application's `index.js`:

```javascript
_i18next = require('@daemez/ext-i18next');
_i18next.init();
```

This initializes i18next with sensible defaults:
- Detects browser language (stored in `localStorage` as `ext_i18nextLng`)
- Falls back to English
- Caches translations in LocalStorage for 1 year
- Loads both `translation` (your app) and `extjs` (framework) namespaces
- Reloads the page on language change

### Custom configuration

You can override any default by passing options to `init()`. Options are deep-merged with defaults, so you only need to specify what you want to change:

```javascript
_i18next = require('@daemez/ext-i18next');
_i18next.init({
    fallbackLng: ['en'],
    debug: true,
    interpolation: {
        skipOnVariables: false
    },
    detection: {
        lookupLocalStorage: 'myapp-i18nextLng',
    },
    backend: {
        backendOptions: [{
            prefix: 'myapp-i18nextRes-'
        }]
    }
});
```

### Using translations in your app

Use the `translation` namespace (default) for your app strings:

```javascript
// In your app code
i18next.t('dashboard.title')        // uses 'translation' namespace
i18next.t('menu.settings')          // uses 'translation' namespace
```

ExtJS framework strings are in the `extjs` namespace and are applied automatically via overrides — you don't need to reference them directly.

### Switching languages

```javascript
i18next.changeLanguage('fr');  // triggers page reload automatically
```

The selected language is persisted in LocalStorage and restored on next visit.

## Translation files

### Structure

```
extjs/resources/locales/
    en/extjs.json     # ExtJS framework strings
    es/extjs.json
    ca/extjs.json
    fr/extjs.json
    pt/extjs.json

your-app/resources/locales/
    en/translation.json   # Your app strings
    es/translation.json
    ...
```

### Adding a new language

1. Copy `extjs/resources/locales/en/extjs.json` to `extjs/resources/locales/{lang}/extjs.json`
2. Translate all values (keep the keys identical)
3. Run `npm run validate` to verify the structure matches

You can use the ExtJS locale files in `node_modules/@sencha/ext-modern-locale/overrides/{lang}/` as reference for translations.

### Validation

```bash
npm run validate
```

Checks that all locale files have identical key structure and no empty values.

## How it works

1. **`index.js`** initializes i18next with chained backends (LocalStorage + HTTP) and language detection
2. **`ext-locale-i18next.js`** sets up `Ext.Date` and `Ext.util.Format` with translated values
3. **Individual override files** (one per ExtJS component) apply translations using `i18next.t('extjs:...')` calls at class definition time
4. The `initImmediate: false` option ensures translations are loaded synchronously before ExtJS processes the overrides

## Available overrides

Panel, Dialog, LoadMask, picker/Date, picker/Picker, panel/Date, panel/Collapser, field/Field, field/Number, field/Text, field/FileButton, field/Date, dataview/List, dataview/EmptyText, dataview/Abstract, dataview/DataView, dataview/plugin/ListPaging, grid/menu/SortAsc, grid/menu/SortDesc, grid/menu/GroupByThis, grid/menu/ShowInGroups, grid/menu/Columns, grid/menu/AddGroup, grid/menu/RemoveGroup, grid/menu/Groups, grid/column/Groups, grid/filters/menu/Base, grid/locked/Grid, grid/plugin/RowDragDrop, grid/plugin/RowOperations, grid/plugin/Summaries, grid/plugin/filterbar/Operator, grid/plugin/grouping/Panel, grid/TreeGrouped, data/summary/Count, data/validator/* (18 validators), ux/colorpick/Selector

## License

MIT
