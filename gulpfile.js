var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  i18n = require("gulp-html-i18n"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  cleanCSS = require("gulp-clean-css");

const distPath = `./docs`;

// localization
function localization() {
  return gulp
    .src(`./src/index.html`)
    .pipe(
      i18n({
        langDir: `./src/lang`,
        createLangDirs: true,
      })
    )
    .pipe(gulp.dest(`${distPath}/`));
}

// copy
function copy(cd) {
  gulp.src(`./src/img/*`).pipe(gulp.dest(`${distPath}/img/`));
  gulp.src(`./src/js/*`).pipe(gulp.dest(`${distPath}/js/`));
  gulp.src(`./src/fonts/*`).pipe(gulp.dest(`${distPath}/fonts/`));
  gulp.src(`./src/css/*`).pipe(gulp.dest(`${distPath}/css/`));
  gulp
    .src(`./src/main.html`)
    .pipe(rename("index.html"))
    .pipe(gulp.dest(`${distPath}/`));
  cd();
}

// sass
function sassStyles() {
  return gulp
    .src(`./src/sass/style.scss`, { allowEmpty: true })
    .pipe(
      sass({
        includePaths: ["node_modules/"],
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest(`${distPath}/css`));
}

function watchFiles(cd) {
  gulp.watch([`./src/lang/**/*.json`, `./src/index.html`], localization);
  gulp.watch(
    [`./src/img/*`, `./src/js/*`, `./src/fonts/*`, `./src/main.html`],
    copy
  );
  gulp.watch([`./src/sass/*.scss`], sassStyles);
  cd();
}

exports.default = gulp.parallel(localization, copy, sassStyles);
exports.watch = gulp.series(
  gulp.parallel(localization, copy, sassStyles),
  watchFiles
);
