# ext-i18next

Use i18next library on your ExtJS project.

## Instalation and configuration

First install npm package

```bash
npm install @daemez/ext-i18next
```

To allow sencha builder to locate the npm package you need yo add the following entry to `workspace.json`

```json
"packages": {
    "dir": "...,${workspace.dir}/node_modules/@daemez"
}
```

Then you should enable it in your app.json

```json
"requires": [
    "daemez-i18next"
]
```
You can also include in your app.json a version to refresh cached locale

```json
"localeVersion": "1.1.0"
```

Finally in your `index.js` you need to add the required package

```javascript
_i18next = require('@daemez/ext-i18next');
_i18next.init();
```

You can now use i18next on your ExtJS project