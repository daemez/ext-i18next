#!/usr/bin/env node

/**
 * Validates translation files for structural consistency.
 *
 * Checks:
 * 1. All locale files have identical key paths in identical order
 * 2. No truly empty string values (single space is allowed for intentional blanks)
 * 3. All code i18n keys use namespace prefix (extjs:)
 */

const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.resolve(__dirname, '../extjs/resources/locales');
const CODE_DIR = path.resolve(__dirname, '../extjs/overrides');
const LOCALES = fs.readdirSync(LOCALES_DIR).filter((d) => fs.statSync(path.join(LOCALES_DIR, d)).isDirectory());

let errors = 0;

function error(msg) {
    console.error(`  FAIL: ${msg}`);
    errors++;
}

function getKeyPaths(obj, prefix = '') {
    const keys = [];
    for (const k of Object.keys(obj)) {
        const p = prefix ? `${prefix}.${k}` : k;
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            keys.push(p);
            keys.push(...getKeyPaths(obj[k], p));
        } else {
            keys.push(p);
        }
    }
    return keys;
}

function getStringValues(obj, prefix = '') {
    const entries = [];
    for (const k of Object.keys(obj)) {
        const p = prefix ? `${prefix}.${k}` : k;
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            entries.push(...getStringValues(obj[k], p));
        } else {
            entries.push([p, obj[k]]);
        }
    }
    return entries;
}

// Load all locale files
console.log(`Found locales: ${LOCALES.join(', ')}`);
const data = {};
for (const locale of LOCALES) {
    const filePath = path.join(LOCALES_DIR, locale, 'extjs.json');
    try {
        data[locale] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
        error(`Cannot read ${locale}/extjs.json: ${e.message}`);
    }
}

if (errors > 0) {
    process.exit(1);
}

const refLocale = LOCALES[0];
const refKeys = getKeyPaths(data[refLocale]);

// 1. Check key parity across locales
console.log('Checking key parity across locales...');
for (const locale of LOCALES.slice(1)) {
    const keys = getKeyPaths(data[locale]);

    if (keys.length !== refKeys.length) {
        error(`${locale} has ${keys.length} keys, ${refLocale} has ${refKeys.length}`);
    }

    for (let i = 0; i < Math.max(refKeys.length, keys.length); i++) {
        if (refKeys[i] !== keys[i]) {
            error(`Key mismatch at index ${i}: ${refLocale}="${refKeys[i]}" vs ${locale}="${keys[i]}"`);
            break;
        }
    }
}

// 2. Check no empty values (single space is allowed for intentional blanks like emptyText)
console.log('Checking no empty values...');
for (const locale of LOCALES) {
    const entries = getStringValues(data[locale]);
    for (const [key, value] of entries) {
        if (typeof value === 'string' && value === '') {
            error(`${locale} has empty value at "${key}"`);
        }
    }
}

// 3. Check code for unnamespaced i18n keys
console.log('Checking code for unnamespaced i18n keys...');

function scanDir(dir) {
    const files = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...scanDir(full));
        } else if (entry.name.endsWith('.js')) {
            files.push(full);
        }
    }
    return files;
}

const keyPattern = /i18next\.t\(\s*'([^']+)'\s*[),]/g;
for (const file of scanDir(CODE_DIR)) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = keyPattern.exec(content)) !== null) {
        const key = match[1];
        if (!key.includes('.') && !key.includes(':')) {
            const rel = path.relative(path.resolve(__dirname, '..'), file);
            error(`Unnamespaced key "${key}" in ${rel}`);
        }
    }
}

// Summary
console.log('');
if (errors === 0) {
    console.log('All checks passed.');
} else {
    console.log(`${errors} error(s) found.`);
    process.exit(1);
}
