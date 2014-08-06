var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    express: {
      dev: {
        options: {
          server: 'app.js',
          serverreload: false
        }
      }
    },
    browserify: {
      options: {
        bundleOptions : {
            debug: false, 
        }
      },
      bundle: {
        src: 'public_src/js/app.js',
        dest: 'public/javascripts/bundle.js'
      }
    },

    watch: {
      js: {
        files: ['public_src/js/**/*.js'],
        tasks: ['browserify'],
        options: {
          livereload: false,
          spawn: false
        }
      },
      express: {
        // Restart any time client or server js files change
        files:  ['app.js'],
        tasks:  ['express:dev'],
        options: {
          //Without this option specified express won't be reloaded
          livereload: false,
          spawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify:bundle', 'express:dev','watch']);


} 