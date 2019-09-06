/*!
 * Timero (v1.0.0): tools/util/config.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export const dirs = {
  root: './',
  src: 'src',
  dest: 'dist',
  logs: 'logs',
  test: 'test'
};

export const paths = {
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    dest: `${dirs.dest}/css/`,
    filter: [ `${dirs.dest}/css/*.css`, '!**/*.min.css' ]
  },
  scripts: {
    src: `${dirs.src}/es6/**/*.es6`,
    dest: `${dirs.dest}/js/`,
    filter: [ `${dirs.dest}/js/*.js`, '!**/*.min.js' ]
  },
  images: {
    src: `${dirs.src}/images/**/*.{gif,jpg,jpeg,png,svg}`,
    dest: `${dirs.dest}/images/`,
    webp: `${dirs.dest}/images/**/*.{jpg,jpeg,png}`
  },
  statics: {
    src: {
      icons: `${dirs.src}/statics/**/*.{ico,png,svg}`,
      conf: `${dirs.src}/statics/**/*.{json,txt,webmanifest,xml}`
    },
    dest: {
      icons: `${dirs.dest}/statics/`,
      conf: `${dirs.dest}/`
    },
    ext: '**/*.{json,txt,webmanifest,xml}'
  },
  sound: {
    src: `${dirs.src}/sound/**/*.{ogg,m4a,mp3,wav}`,
    dest: `${dirs.dest}/sound/`
  },
  views: {
    src: [`${dirs.src}/views/**/*.pug`, `!${dirs.src}/views/**/_*.pug`],
    all: `${dirs.src}/views/**/*.pug`,
    dest: `${dirs.dest}/`,
    del: `${dirs.dest}/*.html`
  },
  test: {
    js: `${dirs.test}/js/`
  },
  logs: {
    gulp: `${dirs.logs}/gulp/`
  }
};
