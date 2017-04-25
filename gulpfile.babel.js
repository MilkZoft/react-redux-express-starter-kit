// NPM Dependencies
import { exec } from 'child_process';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import mocha from 'gulp-mocha';
import nodemon from 'gulp-nodemon';
import notify from 'gulp-notify';
import open from 'gulp-open';
import remoteSrc from 'gulp-remote-src';
import runSequence from 'run-sequence';

// Mocha task
gulp.task('test', () => {
  return gulp.src('test/**/*Test.js')
    .pipe(mocha({
      compilers: 'js:babel-core/register'
    }));
});

// Linter task
gulp.task('analyze', () => {
  return gulp.src([
    'src/**/*.js',
    'test/**/*Test.js',
    '!src/public/*.bundle.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// Start dev task
gulp.task('start-dev', () => {
  nodemon({
    script: 'src/backend',
    ext: 'js',
    ignore: [],
    env: {
      'NODE_ENV': 'development',
      'BABEL_ENV': 'development'
    }
  })
  .on('restart', () => {
    gulp
      .src('src/backend')
      .pipe(notify('Reloading page, please wait...'));
  });
});

// Start production
gulp.task('start', () => {
  nodemon({
    script: 'src/backend',
    ext: 'js',
    env: {
      'NODE_ENV': 'production',
      'BABEL_ENV': 'production'
    }
  });
});

gulp.task('webpack', () => {
  exec('yarn run build');
});

// Default task
gulp.task('p', ['webpack', 'start']);
gulp.task('default', ['start-dev']);
