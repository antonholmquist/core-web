var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    express: {
      dev: {
        options: {
          server: 'app.js',
          serverreload: true
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
        src: 'public_src/javascript/app.js',
        dest: 'public/javascript/bundle.js'
      }
    },

    watch: {
      js: {
        files: ['public_src/javascript/**/*.js'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify:bundle', 'watch', 'express:dev', 'express-keepalive']);


} 