Ext.define('Daemez.i18next', {
    singleton: true,

    /**
     * Change i18next language
     * @param {String} lng language
     */
    changeLanguage: function (lng) {
        let key = i18next.services.languageDetector.options.lookupLocalStorage;
        localStorage.setItem(key, lng);
        i18next.changeLanguage(lng);
    }
});