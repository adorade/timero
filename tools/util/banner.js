/*!
 * Timero (v1.0.0): tools/util/banner.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

const pkg = require(`${process.cwd()}/package.json`);

const year = new Date(
  process.env.SOURCE_DATE_EPOCH ? process.env.SOURCE_DATE_EPOCH * 1000 : new Date().getTime()
).getFullYear();

export function banner () {
  let result = '';

  try {
    result = [
      '/*!',
      ` * ${pkg.name} (v${pkg.version}): <%= file.relative %>`,
      ` * ${pkg.description}`,
      ` * Copyright (c) ${year} ${pkg.author} (${pkg.homepage})`,
      ` * License under ${pkg.license} (${pkg.repository}/blob/master/LICENSE)`,
      ' * ========================================================================== */',
      '' // new line
    ].join('\n');
  } catch (err) {
    console.error(err);
  }

  return result;
}
