# Changelog

## [2.1.0] - 2026-10-12

### Changed
- The package names its maker: `author` is Daemez Solucions, S.L. with https://daemez.com, and the
  Sencha `creator` is spelled the same way. SBOMs read the manufacturer from these fields.

## [2.0.0] - 2026-10-02

### Breaking Changes
- i18next is now `^26.4.2`. ext-i18next exposes `i18next` as a global and passes `init()` options
  through, so its removals reach you: `interpolation.format` is gone (use
  `i18next.services.formatter.add()`), and `initImmediate` is ignored (use `initAsync`).
- i18next-http-backend is now `^4.0.2`: it uses the host's `fetch` and no longer bundles a polyfill.
- i18next-chained-backend is now `^5.0.6`.

### Security
- i18next `^26.4.2`: fixes
  [GHSA-6jcc-5g8w-32mx](https://github.com/i18next/i18next/security/advisories/GHSA-6jcc-5g8w-32mx),
  `addResourceBundle(..., deep, overwrite)` could overwrite shared built-ins (DoS). Not backported to 25.x.
- i18next-http-backend `^4.0.2`: fixes
  [GHSA-xvq9-wjp8-hwqf](https://github.com/i18next/i18next-http-backend/security/advisories/GHSA-xvq9-wjp8-hwqf),
  URL injection through `lng`/`ns` when `loadPath` starts with a placeholder. Not backported to 3.x.
  The default `loadPath` here starts with a resource path.

### Fixed
- Grouped grid summary rows (`Ext.grid.column.Groups`) and the Expand all / Collapse all items of the
  Groups column menu (`Ext.grid.menu.Groups`) are now translated, reusing the `grid.treeGrouped` keys.
- `npm run lint` works again: ESLint 10 with a flat `eslint.config.js`.

## [1.0.2] - 2026-10-02

### Changed
- `LICENSE`: the copyright holder is the company, Daemez Solucions, S.L., 2021-2026. Still MIT;
  nothing else changed.

## [1.0.1] - 2026-09-26

### Security
- `i18next-http-backend` raised to `^3.0.6` (was `^2.0.0`, resolving 2.7.3): fixes
  [GHSA-q89c-q3h5-w34g](https://github.com/i18next/i18next-http-backend/security/advisories/GHSA-q89c-q3h5-w34g)
  (CVE-2026-41691), request URLs built from unchecked `lng`/`ns` values (path traversal, SSRF).
  The `loadPath` function is unchanged: v3 still interpolates `{{lng}}` and `{{ns}}`.

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
