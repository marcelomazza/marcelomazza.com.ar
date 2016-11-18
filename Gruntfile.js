/*global module:false*/
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    assemble: {
      project: {
        options: {
          data: 'src/data/*.json'
        },
        files: [
          { 'index.html': 'src/index.hbs' },
          { 'resume.html': 'src/resume.hbs' }
        ]
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'css/*.css'
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
        files: [
          { 'css/style.css': 'scss/style.scss' },
          { 'css/resume.css': 'scss/resume.scss' }
        ]
      }
    },
    watch: {
      html: {
        files: ['*.html', 'css/*.css'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass', 'postcss']
      },
      assemble: {
        files: ['*.hbs', '**/*.hbs', 'src/data/*.json'],
        tasks: ['assemble']
      },
      html_pdf: {
        files: ['css/resume.css', 'resume.html'],
        tasks: ['html_pdf']
      }
    },
    html_pdf: {
      dist: {
        options: {
          format: 'A4',
          orientation: 'portrait',
          quality: '75',
          base: 'http://localhost:88/marcelomazza.com.ar/'
        },
        files: {
          'Marcelo-Mazza-Resume.pdf': ['resume.html',],
        },
      }
    },
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['sass', 'postcss', 'assemble', 'html_pdf']);

};
