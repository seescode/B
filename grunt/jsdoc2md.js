module.exports = {
	oneOutputFile: {
		expand: true,
		src: 'SRC/**/*.js',
		dest: 'SRC/', 
		rename: function(dest, src) {
			// use the source directory to create the file
			// example with your directory structure
			//   dest = 'dev/js/'
			//   src = 'module1/js/main.js'
			console.log(src);
			console.log(src.replace(/[a-zA-Z0-9 _-]+.js/, 'readme.md'));
			return src.replace(/[a-zA-Z0-9 _-]+.js/, 'readme.md');
		}

	}
};
