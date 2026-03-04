# Changelog

## [1.0.0] - 2026-03-04

### Breaking Changes
- Minimum i18next version is now `^25.0.0` (renamed `initImmediate` to `initAsync` in v24)
- Minimum i18next-browser-languagedetector version is now `^8.0.0`
- Minimum i18next-chained-backend version is now `^4.0.0`
- Minimum i18next-http-backend version is now `^2.0.0`
- Minimum i18next-localstorage-backend version is now `^4.0.0`

### Added
- French (fr) locale translations
- Portuguese (pt) locale translations
- Explicit short day names (`sundayShort`..`saturdayShort`) in all locale JSONs
- Explicit short month names array (`shortMonthNames`) for accurate abbreviations
- Date panel `headerLength: 2` for unique 2-letter day headers (fixes Catalan D,D,D... issue)
- Date panel `startDay` from `firstDayOfWeek` translation
- Missing `data/summary/Count` override and translations
- Missing fields in `grid/plugin/Summaries` (`textNone`, `summaryText`)
- Missing fields in `grid/TreeGrouped` (`groupSummaryTpl`, `summaryTpl`)
- Missing 11 fields in `grid/plugin/grouping/Panel` (groupingPanelText, sort, move, remove, etc.)
- Translation validation script (`npm run validate`)
- Prettier configuration and formatting scripts
- Full README with installation, configuration, and usage examples

### Changed
- Split monolithic `ext-locale-i18next.js` (632 lines) into individual override files per component (43 files), mirroring ExtJS's own `ext-modern-locale` structure
- `getShortDayName` now uses explicit translatable short names instead of `substring(0, 3)`
- `getShortMonthName` now uses explicit translatable short names instead of `substring(0, 3)`
- `utils.js` now uses CJS `module.exports` consistently (was ESM `export`)
- Updated `initImmediate: false` to `initAsync: false` for i18next v24+

## [0.4.3] - Previous release

- Added RowOperations plugin translations
- Corrected AM/PM format codes to match Sencha defaults
- Fixed array namespaces in loadPath function
- Added ExtJS 7.x translations
