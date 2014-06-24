module.exports = function (grunt) {
	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		watch: {
			all: {
				files: ['./**'],
				options: {
					livereload: true
				}
			}
		}
	});
	grunt.registerTask('default', ['watch']);
};
