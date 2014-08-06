var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    express: {
      server: {
        options: {
          server: 'app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['express:server', 'express-keepalive']);

}