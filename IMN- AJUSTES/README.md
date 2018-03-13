## Gulp Installation

### Step by Step
> 1 - Install NodeJs
- download from site NodeJs

> 2 - Install Gulp (Prompt de Comando [ como adminidtrador])
- npm install gulp -g

> 3 - Criar pasta do Projeto e Navegar até  a mesma (Prompt de Comando = copiar caminho)
- cd /path/to/folder

> 4 - Install Gulp on Folder
- npm install gulp --save-dev	


> 5 - Create gulpfile.js into (Root Page '/')
> gulp 
```bash
var gulp = require ('gulp');

gulp.task('default', function(){
	//place code here
});
```



### Changed
> instal: npm install --save-dev gulp-changed
- cli run: gulp changed

```bash
var changed = require ('gulp-changed');

var SRC = './js/main.js'; // Archive for duplicate on changed
var DEST = 'dist'; // folder for recipe archives changed

gulp.task('changed', function (){
	return gulp.src(SRC)
	.pipe(changed(DEST))
	.pipe(gulp.dest(DEST));
});

```

### Watch

> CRTL + C for stop
```bash
gulp.task('watch', function(){
	gulp.watch(SRC, ['changed']);
})

gulp.task('default', ['jshint', 'watch']);
```


### Scss / Sass
> 1 - // Instalar Sass
```bash
	npm install --save-dev gulp-sass 
 ```

> 2 -  // Instanciar Sass 
 ```bash
 var scss = require ('gulp-sass'); 
 ```

> 3 -  // Criar Tarefa
 ```bash
//Scss
gulp.task('sass', function() {
 gulp.src('./scss/*.scss') //Pasta de Entrada Scss
	.pipe(scss())
	.pipe(gulp.dest('css')); //Cria a pasta css -> apontar  no html
});

 ```

> 4 - Apontar Changed
 ```bash
var SRC = './scss/*.scss';
var DEST = 'dist';

gulp.task('changed', function (){
	return gulp.src(SRC)
	.pipe(changed(DEST))
	.pipe(gulp.dest(DEST));
});

 ```

> 5 - Supervisionar Watch
```bash
gulp.task('watch', function(){
	gulp.watch(SRC, ['sass']);
})
```

> 6 - Executar Watch para ler ações do Scss e buildar Css
```bash
gulp watch
```


### BrowserSync
-  Instal
> instal: npm install browser-sync gulp --save-dev
- cli run: gulp
- Configuração Total

```bash
var scss = require ('gulp-sass');
var browserSync = require('browser-sync').create();

//Vars  Changed
var SRC = '././scss/*.scss';
var DEST = 'dist';


//HotReaload
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./"
	})
});

gulp.watch('./scss/*.scss',['sass']);
gulp.watch('./js/*js').on('change', browserSync.reload);
gulp.watch('./*html').on('change', browserSync.reload);

//Scss
gulp.task('sass', function() {
 gulp.src('./scss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());;
});


//Changed
gulp.task('changed', function (){
	return gulp.src(SRC)
	.pipe(changed(DEST))
	.pipe(gulp.dest(DEST));
});


gulp.task('watch', function(){
	gulp.watch(SRC, ['sass', 'serve']);
})

gulp.task('default', ['serve']);
```

### Execute Task (Prompt de Comando)
> instal: npm install --save-dev gulp jshint 
- cli run: gulp jshint
> Method One
```bash
var gulp = require ('gulp');

//include plugins
var jshint = require('gulp-jshint');

//Name of Task
gulp.task('jshint', function() {
	gulp.src('./js/main.js') //path to file
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

```

> Second Method 7 - Default Task // call  on execute: gulp (prompt)
```bash
var gulp = require ('gulp');

//include plugins
var jshint = require('gulp-jshint');

//Name of Task
gulp.task('jshint', function() {
	gulp.src('./js/main.js') //path to file
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('default', ['jshint']);
// gulp.task('default', ['jshint','minify']); //various alias


```


### Compress Images 
> instal: npm install --save-dev gulp-imagemin	(Imagem Compress)
- cli run: gulp compress-images
```bash
var imagemin = require('gulp-imagemin');

//CompressImage
gulp.task('compress-images', function() {
	return gulp.src('pre-images/*')
	.pipe(imagemin({ optimizationLevel: 7}))
	.pipe(gulp.dest('images'));

});

```

### Uglify Js 
> instal: npm install --save-dev gulp-uglify
- cli run: gulp ugly
```bash
var uglify = require ('gulp-uglify');

//Uglify Js
gulp.task('ugly', function() {
	return gulp.src('pre-js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js'));

});

```


### Concat Js | All files into One
> instal: npm install --save-dev gulp-concat 
- cli run: gulp concat
> Concat All Files
```bash
var concat = require ('gulp-concat');

//Concat Js
gulp.task('concat', function() {
	return gulp.src('pre-js/*.js')
	.pipe(concat('main.js'))
	.pipe(gulp.dest('js'));

});

```

> Concat Specifies Files
```bash
var concat = require ('gulp-concat');

//Concat Js
gulp.task('concat', function() {
	return gulp.src(['pre-js/file2.js','pre-js/file1.js'])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('js'));

});

```



### Minify Css
> instal: npm install --save-dev gulp-minify-css
- cli run: gulp minify-css

```bash
var minifyCSS = require ('gulp-minify-css');

//Minify Css
gulp.task('minify-css', function() {
	gulp.src('./pre-css/index.css')
	.pipe(minifyCSS({keepSpecialComments:1}))
	.pipe(gulp.dest('css'));

});

```


## Git Ignore Gulp files for Enviroment
#### Init New folder in Gulp / Sass/ HotReload /

- 1) Execute Prompt (NodeJS w/ Admin)

- 2) Create folder Project

- 5) Paste all archives from (Root Folder) in new Folder 

- 4) Navigation into folder on prompt
> execute: cd /path/to/dir

- 5) Run Gulp
> execute: gulp


## Create git ignore
- Init bash on folder of new project

- Create gitignore archive
> execute: touch .gitignore

- Insert files to ignore on archive gitignore
- name (name from archive)
- name_from_folder (for ignore all content folder)
