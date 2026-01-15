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

Ext.define('Ext.locale.i18next.picker.Date', {
    override: 'Ext.picker.Date',

    config: {
        doneButton: i18next.t('extjs:picker.date.doneButton'),
        monthText: i18next.t('extjs:picker.date.monthText'),
        dayText: i18next.t('extjs:picker.date.dayText'),
        yearText: i18next.t('extjs:picker.date.yearText')
    }
});

Ext.define('Ext.locale.i18next.picker.Picker', {
    override: 'Ext.picker.Picker',

    config: {
        doneButton: i18next.t('extjs:picker.picker.doneButton'),
        cancelButton: i18next.t('extjs:picker.picker.cancelButton'),
    }
});

Ext.define('Ext.locale.i18next.panel.Date', {
    override: 'Ext.panel.Date',

    config: {
        nextText: i18next.t('extjs:panel.date.nextText'),
        prevText: i18next.t('extjs:panel.date.prevText'),
        buttons: {
            footerTodayButton: {
                text: i18next.t('extjs:panel.date.footerTodayButton'),
            }
        }
    }
});

Ext.define('Ext.locale.i18next.panel.Collapser', {
    override: 'Ext.panel.Collapser',

    config: {
        collapseToolText: i18next.t('extjs:panel.collapser.collapseToolText'),
        expandToolText: i18next.t('extjs:panel.collapser.expandToolText')
    }
});

Ext.define('Ext.locale.i18next.field.Field', {
    override: 'Ext.field.Field',

    config: {
        requiredMessage: i18next.t('extjs:field.field.requiredMessage'),
        validationMessage: i18next.t('extjs:field.field.validationMessage')
    }
});

Ext.define('Ext.locale.i18next.field.Number', {
    override: 'Ext.field.Number',

    decimalsText: i18next.t('extjs:field.number.decimalsText'),
    minValueText: i18next.t('extjs:field.number.minValueText'),
    maxValueText: i18next.t('extjs:field.number.maxValueText'),
    badFormatMessage: i18next.t('extjs:field.number.badFormatMessage')
});

Ext.define('Ext.locale.i18next.field.Text', {
    override: 'Ext.field.Text',

    badFormatMessage: i18next.t('extjs:field.text.badFormatMessage'),
    config: {
        requiredMessage: i18next.t('extjs:field.text.requiredMessage'),
        validationMessage: i18next.t('extjs:field.text.validationMessage')
    }
});

Ext.define('Ext.locale.i18next.Dialog', {
    override: 'Ext.Dialog',

    config: {
        maximizeTool: {
            tooltip: i18next.t('extjs:dialog.maximizeTool')
        },
        restoreTool: {
            tooltip: i18next.t('extjs:dialog.restoreTool')
        }
    }
});

Ext.define('Ext.locale.i18next.field.FileButton', {
    override: 'Ext.field.FileButton',

    config: {
        text: i18next.t('extjs:field.fileButton')
    }
});

Ext.define('Ext.locale.i18next.dataview.List', {
    override: 'Ext.dataview.List',

    config: {
        loadingText: i18next.t('extjs:dataview.list.loadingText')
    }
});

Ext.define('Ext.locale.i18next.dataview.EmptyText', {
    override: 'Ext.dataview.EmptyText',

    config: {
        html: i18next.t('extjs:dataview.emptyText.html')
    }
});

Ext.define('Ext.locale.i18next.dataview.Abstract', {
    override: 'Ext.dataview.Abstract',

    config: {
        loadingText: i18next.t('extjs:dataview.abstract.loadingText')
    }
});

Ext.define('Ext.locale.i18next.LoadMask', {
    override: 'Ext.LoadMask',

    config: {
        message: i18next.t('extjs:loadMask')
    }
});

Ext.define('Ext.locale.i18next.dataview.plugin.ListPaging', {
    override: 'Ext.dataview.plugin.ListPaging',

    config: {
        loadMoreText: i18next.t('extjs:dataview.plugin.listPaging.loadMoreText'),
        noMoreRecordsText: i18next.t('extjs:dataview.plugin.listPaging.noMoreRecordsText')
    }
});

Ext.define('Ext.locale.i18next.dataview.DataView', {
    override: 'Ext.dataview.DataView',

    config: {
        emptyText: i18next.t('extjs:dataview.dataview.emptyText')
    }
});

Ext.define('Ext.locale.i18next.field.Date', {
    override: 'Ext.field.Date',

    minDateMessage: i18next.t('extjs:field.date.minDateMessage'),
    maxDateMessage: i18next.t('extjs:field.date.maxDateMessage')
});

Ext.define('Ext.locale.i18next.grid.menu.SortAsc', {
    override: 'Ext.grid.menu.SortAsc',

    config: {
        text: i18next.t('extjs:grid.menu.sortAsc')
    }
});

Ext.define('Ext.locale.i18next.grid.menu.SortDesc', {
    override: 'Ext.grid.menu.SortDesc',

    config: {
        text: i18next.t('extjs:grid.menu.sortDesc')
    }
});

Ext.define('Ext.locale.i18next.grid.menu.GroupByThis', {
    override: 'Ext.grid.menu.GroupByThis',

    config: {
        text: i18next.t('extjs:grid.menu.groupByThis')
    }
});

Ext.define('Ext.locale.i18next.grid.menu.ShowInGroups', {
    override: 'Ext.grid.menu.ShowInGroups',

    config: {
        text: i18next.t('extjs:grid.menu.showInGroups')
    }
});

Ext.define('Ext.locale.i18next.grid.menu.Columns', {
    override: 'Ext.grid.menu.Columns',

    config: {
        text: i18next.t('extjs:grid.menu.columns')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Presence', {
    override: 'Ext.data.validator.Presence',

    config: {
        message: i18next.t('extjs:data.validator.presence')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Format', {
    override: 'Ext.data.validator.Format',

    config: {
        message: i18next.t('extjs:data.validator.format')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Email', {
    override: 'Ext.data.validator.Email',

    config: {
        message: i18next.t('extjs:data.validator.email')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Phone', {
    override: 'Ext.data.validator.Phone',

    config: {
        message: i18next.t('extjs:data.validator.phone')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Number', {
    override: 'Ext.data.validator.Number',

    config: {
        message: i18next.t('extjs:data.validator.number')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Url', {
    override: 'Ext.data.validator.Url',

    config: {
        message: i18next.t('extjs:data.validator.url')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Range', {
    override: 'Ext.data.validator.Range',

    config: {
        nanMessage: i18next.t('extjs:data.validator.range.nanMessage'),
        minOnlyMessage: i18next.t('extjs:data.validator.range.minOnlyMessage'),
        maxOnlyMessage: i18next.t('extjs:data.validator.range.maxOnlyMessage'),
        bothMessage: i18next.t('extjs:data.validator.range.bothMessage')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Bound', {
    override: 'Ext.data.validator.Bound',

    config: {
        emptyMessage: i18next.t('extjs:data.validator.bound.emptyMessage'),
        minOnlyMessage: i18next.t('extjs:data.validator.bound.minOnlyMessage'),
        maxOnlyMessage: i18next.t('extjs:data.validator.bound.maxOnlyMessage'),
        bothMessage: i18next.t('extjs:data.validator.bound.bothMessage')
    }
});

Ext.define('Ext.locale.i18next.data.validator.CIDRv4', {
    override: 'Ext.data.validator.CIDRv4',

    config: {
        message: i18next.t('extjs:data.validator.cidrv4')
    }
});

Ext.define('Ext.locale.i18next.data.validator.CIDRv6', {
    override: 'Ext.data.validator.CIDRv6',

    config: {
        message: i18next.t('extjs:data.validator.cidrv6')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Currency', {
    override: 'Ext.data.validator.Currency',

    config: {
        message: i18next.t('extjs:data.validator.currency')
    }

});

Ext.define('Ext.locale.i18next.data.validator.DateTime', {
    override: 'Ext.data.validator.DateTime',

    config: {
        message: i18next.t('extjs:data.validator.dateTime')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Exclusion', {
    override: 'Ext.data.validator.Exclusion',

    config: {
        message: i18next.t('extjs:data.validator.exclusion')
    }
});

Ext.define('Ext.locale.i18next.data.validator.IPAddress', {
    override: 'Ext.data.validator.IPAddress',

    config: {
        message: i18next.t('extjs:data.validator.ipAddress')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Inclusion', {
    override: 'Ext.data.validator.Inclusion',

    config: {
        message: i18next.t('extjs:data.validator.inclusion')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Time', {
    override: 'Ext.data.validator.Time',

    config: {
        message: i18next.t('extjs:data.validator.time')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Date', {
    override: 'Ext.data.validator.Date',

    config: {
        message: i18next.t('extjs:data.validator.date')
    }
});

Ext.define('Ext.locale.i18next.data.validator.Length', {
    override: 'Ext.data.validator.Length',

    config: {
        minOnlyMessage: i18next.t('extjs:data.validator.minOnlyMessage'),
        maxOnlyMessage: i18next.t('extjs:data.validator.maxOnlyMessage'),
        bothMessage: i18next.t('extjs:data.validator.bothMessage')
    }
});

Ext.define('Ext.locale.i18next.ux.colorpick.Selector', {
    override: 'Ext.ux.colorpick.Selector',

    okButtonText: i18next.t('extjs:ux.colorpick.selector.okButtonText'),
    cancelButtonText: i18next.t('extjs:ux.colorpick.selector.cancelButtonText')
});

// This is needed until we can refactor all of the locales into individual files
Ext.define('Ext.locale.i18next.Component', {
    override: 'Ext.Component'
});

Ext.define('Ext.locale.i18next.grid.filters.menu.Base', {
    override: 'Ext.grid.filters.menu.Base',

    config: {
        text: i18next.t('extjs:grid.filters.menu')
    }
});

Ext.define('Ext.locale.i18next.grid.locked.Grid', {
    override: 'Ext.grid.locked.Grid',

    config: {
        columnMenu: {
            items: {
                region: {
                    text: i18next.t('extjs:grid.locked.grid.columnMenu.region')
                }
            }
        },
        regions: {
            left: {
                menuLabel: i18next.t('extjs:grid.locked.grid.regions.left')
            },
            center: {
                menuLabel: i18next.t('extjs:grid.locked.grid.regions.center')
            },
            right: {
                menuLabel: i18next.t('extjs:grid.locked.grid.regions.right')
            }
        }
    }
});

Ext.define('Ext.locale.i18next.grid.plugin.RowDragDrop', {
    override: 'Ext.grid.plugin.RowDragDrop',

    dragText: i18next.t('extjs:grid.plugin.rowDragDrop.dragText')
});
