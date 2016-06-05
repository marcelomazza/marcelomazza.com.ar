/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    assemble: {
      project: {
        options: {
          partials: 'partials/*.hbs'
        },
        files: {
          'index.html': ['pages/index.hbs']
        }
      }
    },
    autoprefixer: {
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
    },
    responsive_images: {
      myTask: {
        options: {},
        files: [{
          expand: true,
          src: ['**.{jpg,gif,png}'],
          cwd: 'img/orig/',
          dest: 'img/'
        }]
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    watch: {
      src: {
        files: ['scss/*.scss'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['sass']);

};
