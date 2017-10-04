module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'compile/compiled-sass.css': 'sass/styles.scss'
                }
            } 
        },
        concat: {
            js: {
                src: [
					'sass/vendors/jquery.min.js',
                    'sass/vendors/bootstrap.js',
					'sass/vendors/flexslider.js',
					'sass/vendors/paper-collapse.min.js',
					'sass/vendors/init.js'

                ],
                dest: 'sass/vendors/script.js',
            },
			 
			css: {
                src: [
					'sass/vendors/bootstrap.min.css',
					'sass/vendors/font-awesome.min.css',
					'compile/compiled-sass.css'

                ],
                dest: 'css/styles.min.css',
            }
        },
        uglify: {
            build: {
                src: 'sass/vendors/script.js',
                dest: 'js/script.min.js'
            }
        },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};