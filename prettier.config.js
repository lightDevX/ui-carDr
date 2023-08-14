/** @type {import('prettier').Config} */
// eslint-disable-next-line no-undef
export const semi = false;
export const singleQuote = true;
export const trailingComma = 'all';
export const pluginSearchDirs = false;
export const plugins = ['@ianvs/prettier-plugin-sort-imports'];
export const importOrder = ['^@', '^[a-zA-Z0-9-]+', '^[./]'];
export const tailwindAttributes = ['className'];