'use strict'

import gulp from "gulp";
import {spawn} from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import BrowserSync from "browser-sync";
import watch from "gulp-watch";
import webpack from "webpack";
import webpackConfig from "./webpack.config";
import gulpLoadPlugins from 'gulp-load-plugins';
import tildeImporter from 'node-sass-tilde-importer';

const $ = gulpLoadPlugins();
const browserSync = BrowserSync.create();
const isProduction = process.env.NODE_ENV === 'production';
const hugoSpawn = isProduction ? './bin/hugo' : 'hugo';

// Hugo arguments
const hugoArgsDefault = ["-d", "../public", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["fonts", "sass", "js", "images"], (cb) => buildSite(cb, [], "production", ['html']));
gulp.task("build-preview", ["fonts", "sass", "js", "images"], (cb) => buildSite(cb, hugoArgsPreview, "production"));

gulp.task('sass', () => {
  return gulp.src('src/sass/app.scss')
  .pipe($.plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe($.print())
  .pipe($.sassLint())
  .pipe($.sassLint.format())
  .pipe($.sass({ precision: 5, importer: tildeImporter }))
  .pipe($.autoprefixer(['ie >= 10', 'last 2 versions']))
  .pipe($.if(isProduction, $.cssnano({ discardUnused: false, minifyFontValues: false })))
  .pipe($.size({ gzip: true, showFiles: true }))
  .pipe(gulp.dest('./public/css'))
  .pipe(browserSync.stream())
});

// Compile Javascript
gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

// Compress HTML
gulp.task('html', () => {
  return gulp.src('public/**/*.html')
    .pipe($.htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('public'));
});

// Compress images
gulp.task('images', () => {
  return gulp.src('src/images/**/*.{png,jpg,jpeg,gif,svg,webp}')
    .pipe($.newer('./site/static/images'))
    .pipe($.print())
    .pipe($.imagemin())
    .pipe(gulp.dest('./public/images'));
});

// Move fonts if needed
gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*.{woff,woff2,ttf,eot,svg}')
    .pipe($.newer('./site/static/fonts'))
    .pipe(gulp.dest('./public/fonts'));
});

// Development server with browsersync
gulp.task("server", ["hugo", "fonts", "sass", "js", "images"], () => {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  watch("./src/js/**/*.js", () => { gulp.start(["js"]) });
  watch("./src/sass/**/*.scss", () => { gulp.start(["sass"]) });
  watch("./src/images/**/*.scss", () => { gulp.start(["images"]) });
  watch("./site/**/*", () => { gulp.start(["hugo"]) });
});

// Run hugo and build the site
function buildSite(cb, options, environment = "development", afterTasks) {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      if (afterTasks) {
        gulp.start(afterTasks, cb);
      } else {
        cb();
      }
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}