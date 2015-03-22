/*global module:false*/
module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

	grunt.initConfig({
		autoprefixer: {
		    multiple_files: {
		      expand: true,
		      flatten: true,
		      src: 'css/*.css',
		      dest: 'css/'
		    }
		},    
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['sass']);

};
