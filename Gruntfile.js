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
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify:bundle', 'express:dev', 'express-keepalive']);


} 