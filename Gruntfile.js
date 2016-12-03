/* 
* Simple GRuntifile sample copied from http://gruntjs.com/getting-started 
*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   cssmin: {  // cssmin is an grunt plugin, it can be found here: https://github.com/gruntjs/grunt-contrib-cssmin
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    }
  });
  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Default task(s).
  grunt.registerTask('default', ['cssmin']);
};