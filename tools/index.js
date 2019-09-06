/*!
 * Timero (v1.0.0): tools/index.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

export {
  checks, clean,                                        // Checks and Clean
  cleanCss, lintScss, compile, minify,                  // Styles
  cleanJs, lintEs, transpile, uglify,                   // Scripts
  cleanImages, imagine, convert,                        // Images
  cleanStatics, favicons, statica,                      // Statics
  cleanSounds, noise,                                   // Sounds
  cleanPages, lintPages, pagile,                        // Pages
  serve                                                 // Serve and Watch
} from './tasks';
