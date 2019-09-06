/*!
 * Timero (v1.0.0): tools/tasks/sounds.js
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import { src, dest, lastRun, $, bs, magenta, green, paths } from '../util';

// For debugging usage:
// .pipe($.debug({ title: 'unicorn:' }))

export function cleanSounds () {
  $.fancyLog(`${green('-> Clean up')} in ${magenta(paths.sound.dest)} folder`);
  return $.del(paths.sound.dest);
}
cleanSounds.displayName = 'clean:sounds';
cleanSounds.description = 'Clean up sound files';

export function noise () {
  return src(paths.sound.src, {
    since: lastRun(noise)
  })
    .pipe(dest(paths.sound.dest))
    .pipe(bs.stream({ match: '**/*.{ogg,m4a,mp3,wav}' }));
}
noise.displayName = 'noise';
noise.description = 'Copy sound files';
