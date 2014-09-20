module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    sass:
      dist:
        options:
          style: 'expanded'
        files: [{
          expand: true
          cwd: 'assets/stylesheets/scss/'
          src: ['*.scss']
          dest: 'assets/stylesheets/'
          ext: '.css'
        }]
    coffee:
      dist:
        files: [{
          expand: true
          cwd: 'assets/javascripts/coffee/'
          src: ['*.coffee']
          dest: 'assets/javascripts/'
          ext: '.js'

        }]

    watch:
      styles:
        files: ['assets/stylesheets/scss/*.scss']
        tasks: ['sass']
      scripts:
        files: ['assets/javascripts/coffee/*.coffee']
        tasks: ['coffee']

  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  # grunt.loadNpmTasks 'grunt-contrib-jasmine'

  grunt.registerTask 'default', ['sass', 'coffee', 'watch']
