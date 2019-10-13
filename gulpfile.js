const gulp = require("gulp")
const ts = require("gulp-typescript")

const tsProject = ts.createProject("tsconfig.json")

function typescript() {
	const tsResult = tsProject.src().pipe(tsProject())
	return tsResult.js.pipe(gulp.dest("./dist"))
}

function watchTypescript() {
	return gulp.watch("src/**/*.ts", { ignoreInitial: false }, typescript)
}

function views() {
	return gulp.src("src/views/**/*.ejs").pipe(gulp.dest("./dist/views"))
}

function watchViews() {
	return gulp.watch("src/views/**/*.ejs", { ignoreInitial: false }, views)
}

function public() {
	return gulp.src("src/public/**/*").pipe(gulp.dest("./dist/public"))
}

function watchPublic() {
	return gulp.watch("src/public/**/*", { ignoreInitial: false }, public)
}

gulp.task("build", function(done) {
	typescript()
	views()
	public()
	done()
})

gulp.task("dev", function(done) {
	watchTypescript()
	watchViews()
	watchPublic()
	done()
})
