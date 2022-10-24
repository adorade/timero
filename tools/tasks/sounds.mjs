/*!
 * Timero (v1.0.0): tools/tasks/sounds.mjs
 * Copyright (c) 2019 Adorade (https://adorade.ro)
 * Licensed under MIT
 * ========================================================================== */

import {
  src, dest, lastRun, fancyLog, bs, green, magenta, paths, opts,
  del, size /*, debug */
} from '../utils/index.mjs';

// For debugging usage:
// .pipe(debug({ title: 'unicorn:' }))

export async function cleanSounds () {
  fancyLog(`${green('-> Clean up')} in ${magenta(paths.sound.dest)} folder`);
  await del(paths.sound.dest);
}
cleanSounds.displayName = 'clean:sounds';
cleanSounds.description = 'Clean up sound files';

export function noise () {
  return src(paths.sound.src, {
    since: lastRun(noise)
  })
    .pipe(size(opts.size))
    .pipe(dest(paths.sound.dest))
    .pipe(bs.stream({ match: '**/*.{ogg,m4a,mp3,wav}' }));
}
noise.displayName = 'noise';
noise.description = 'Copy sound files';
