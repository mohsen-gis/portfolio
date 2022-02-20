const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add Creative Tim licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!
      Thanks to the Creative Tim (http://www.creative-tim.com) that provided some sample contents and inspiration for developing this website.
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--
      Thanks to the Creative Tim (http://www.creative-tim.com) that provided some sample contents and inspiration for developing this website.
-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!
      Thanks to the Creative Tim (http://www.creative-tim.com) that provided some sample contents and inspiration for developing this website.
*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
