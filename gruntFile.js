module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'Badger.Dashboard/Assets/js/**/*.js',
        dest: 'Badger.Dashboard/Assets/js/build/**/*.js'
      }
    },
	jshint: {
	  all: ['Badger.Dashboard/src/*.js', 'tests/**/*.js']
	},
	qunit: {
	  all: ['tests/**/*.html']
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['uglify']);
};