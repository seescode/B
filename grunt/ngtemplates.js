module.exports = {
    
    //[NOTE] the module name (atom.b) has to be manually updated for each lib
	"atom.b": {
		src: 'src/**/*.html',
		dest: 'dist/templates.js',
		options: {
			url: function (url) {                              
				return url.replace(/^src/, '');
			}
		}
    }
};
