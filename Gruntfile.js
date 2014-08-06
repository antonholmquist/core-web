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
    }
  });

  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['express:dev', 'express-keepalive']);

} 