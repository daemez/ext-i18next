/**
 * i18next Translation
 */
Ext.i18nextDate = (function() {

    if (Ext.Date) {
        Ext.Date.monthNames = [
            i18next.t('extjs:date.january'),
            i18next.t('extjs:date.february'),
            i18next.t('extjs:date.march'),
            i18next.t('extjs:date.april'),
            i18next.t('extjs:date.may'),
            i18next.t('extjs:date.june'),
            i18next.t('extjs:date.july'),
            i18next.t('extjs:date.august'),
            i18next.t('extjs:date.september'),
            i18next.t('extjs:date.october'),
            i18next.t('extjs:date.november'),
            i18next.t('extjs:date.december')
        ];

        Ext.Date.getShortMonthName = function(month) {
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        Ext.Date.monthNumbers =  {};
        Ext.Date.monthNumbers[i18next.t('extjs:date.januaryShort')] = 0;
        Ext.Date.monthNumbers[i18next.t('extjs:date.februaryShort')] = 1;
        Ext.Date.monthNumbers[i18next.t('extjs:date.marchShort')] = 2;
        Ext.Date.monthNumbers[i18next.t('extjs:date.aprilShort')] = 3;
        Ext.Date.monthNumbers[i18next.t('extjs:date.mayShort')] = 4;
        Ext.Date.monthNumbers[i18next.t('extjs:date.juneShort')] = 5;
        Ext.Date.monthNumbers[i18next.t('extjs:date.julyShort')] = 6;
        Ext.Date.monthNumbers[i18next.t('extjs:date.augustShort')] = 7;
        Ext.Date.monthNumbers[i18next.t('extjs:date.septemberShort')] = 8;
        Ext.Date.monthNumbers[i18next.t('extjs:date.octoberShort')] = 9;
        Ext.Date.monthNumbers[i18next.t('extjs:date.novemberShort')] = 10;
        Ext.Date.monthNumbers[i18next.t('extjs:date.decemberShort')] = 11;

        Ext.Date.getMonthNumber = function(name) {
            return Ext.Date.monthNumbers[
                name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()
            ];
        };

        Ext.Date.dayNames = [
            i18next.t('extjs:date.sunday'),
            i18next.t('extjs:date.monday'),
            i18next.t('extjs:date.tuesday'),
            i18next.t('extjs:date.wednesday'),
            i18next.t('extjs:date.thursday'),
            i18next.t('extjs:date.friday'),
            i18next.t('extjs:date.saturday')
        ];

        Ext.Date.getShortDayName = function(day) {
            return Ext.Date.dayNames[day].substring(0, 3);
        };

        Ext.Date.defaultFormat = i18next.t('extjs:date.defaultFormat');
        Ext.Date.defaultTimeFormat = i18next.t('extjs:date.defaultTimeFormat');
        Ext.Date.defaultFullFormat = Ext.Date.defaultFormat + ' ' + Ext.Date.defaultTimeFormat;
        Ext.Date.firstDayOfWeek = parseInt(i18next.t('extjs:date.firstDayOfWeek'), 10);

        Ext.Date.formatCodes.a = i18next.t('extjs:date.formatCodes.a');
        Ext.Date.formatCodes.A = i18next.t('extjs:date.formatCodes.A');

        // This will match am or a.m.
        Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = {
            g: i18next.t('extjs:date.parseCodes.A.g'),
            c: i18next.t('extjs:date.parseCodes.A.c'),
            s: i18next.t('extjs:date.parseCodes.A.s'),
            calcAtEnd: true
        };

        Ext.Date.parseCodes.S.s = i18next.t('extjs:date.parseCodes.S.s');
    }

    if (Ext.util && Ext.util.Format) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: i18next.t('extjs:format.thousandSeparator'),
            decimalSeparator: i18next.t('extjs:format.decimalSeparator'),
            currencySign: i18next.t('extjs:format.currencySign'),
            defaultDateFormat: i18next.t('extjs:format.dateFormat'),
            dateFormat: i18next.t('extjs:format.dateFormat')
        });
    }
})();
