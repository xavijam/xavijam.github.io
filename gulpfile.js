var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');


gulp.task('default', function(){
  gulp.src(['./app/_font_icon/svgs/*.svg'])
    
    .pipe(iconfontCss({
      fontName: 'penguicon',
      path: './app/_font_icon/templates/_icons.scss',
      targetPath: '../_scss/common/icon-font.scss',
      fontPath: '../../fonts/'
    }))

    .pipe(iconfont({
      fontName: 'penguicon', // required
      appendCodepoints: true // recommended option
    }))

    .pipe(gulp.dest('app/fonts/'));
});
