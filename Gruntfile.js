module.exports = funciton(grunt) {
  grunt.initConfig({
    clean: ['dist/'],
    browserify: {
      'dist/js/index.js': ['js/index.js']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['clean', 'browserify']);
};