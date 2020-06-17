'use strict';

module.exports = function(grunt) {

    // show time spent on each task
    require('time-grunt')(grunt);

    // required for sass
    const sass = require('node-sass');

    grunt.initConfig({

        // load packages.json
        pkg: grunt.file.readJSON('package.json'),

        /***************************************************************************************************************
         *  NOTIFY
         *  https://github.com/dylang/grunt-notify
         **************************************************************************************************************/
        'notify': {
            done: {
                options: {
                    title: 'Grunt ',
                    message: 'All tasks were successfully completed!'
                }
            }
        },

        /***************************************************************************************************************
         *  SASS
         *  https://www.npmjs.org/package/grunt-sass
         **************************************************************************************************************/
        'sass': {
            expanded: {
                options: {
                    implementation: sass,
                    outputStyle: 'expanded',
                    indentWidth: 4
                },
                files: {
                    'dist/css/bootstrap/zebra_datepicker.css': 'src/css/bootstrap/zebra_datepicker.scss',
                    'dist/css/default/zebra_datepicker.css': 'src/css/default/zebra_datepicker.scss',
                    'dist/css/metallic/zebra_datepicker.css': 'src/css/metallic/zebra_datepicker.scss'
                }
            },
            minified: {
                options: {
                    implementation: sass,
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/css/bootstrap/zebra_datepicker.min.css': 'src/css/bootstrap/zebra_datepicker.scss',
                    'dist/css/default/zebra_datepicker.min.css': 'src/css/default/zebra_datepicker.scss',
                    'dist/css/metallic/zebra_datepicker.min.css': 'src/css/metallic/zebra_datepicker.scss'
                }
            }
        },

        /***************************************************************************************************************
         *  CSSMIN
         *  https://github.com/gruntjs/grunt-contrib-cssmin
         **************************************************************************************************************/
        'cssmin': {
            beutify: {
                options: {
                    compatibility: {
                        properties: {
                            ieBangHack: true,
                            ieFilters: true,
                            iePrefixHack: true,
                            ieSuffixHack: true
                        },
                        selectors: {
                            ie7Hack: true
                        }
                    },
                    format: {
                        breaks: {
                            afterAtRule: true,
                            afterBlockBegins: true,
                            afterBlockEnds: true,
                            afterComment: true,
                            afterProperty: true,
                            afterRuleBegins: true,
                            afterRuleEnds: true,
                            beforeBlockEnds: true,
                            betweenSelectors: true
                        },
                        indentBy: 4,
                        indentWith: 'space',
                        spaces: {
                            aroundSelectorRelation: true,
                            beforeBlockBegins: true,
                            beforeValue: true
                        }
                    },
                    level: 2
                },
                files: {
                    'dist/css/bootstrap/zebra_datepicker.css': 'dist/css/bootstrap/zebra_datepicker.css',
                    'dist/css/default/zebra_datepicker.css': 'dist/css/default/zebra_datepicker.css',
                    'dist/css/metallic/zebra_datepicker.css': 'dist/css/metallic/zebra_datepicker.css'
                }
            },
            minify: {
                options: {
                    compatibility: {
                        properties: {
                            ieBangHack: true,
                            ieFilters: true,
                            iePrefixHack: true,
                            ieSuffixHack: true
                        },
                        selectors: {
                            ie7Hack: true
                        }
                    },
                    level: 2
                },
                files: {
                    'dist/css/bootstrap/zebra_datepicker.min.css': 'dist/css/bootstrap/zebra_datepicker.min.css',
                    'dist/css/default/zebra_datepicker.min.css': 'dist/css/default/zebra_datepicker.min.css',
                    'dist/css/metallic/zebra_datepicker.min.css': 'dist/css/metallic/zebra_datepicker.min.css'
                }
            }
        },

        /***************************************************************************************************************
         *  ESLINT
         *  http://eslint.org/docs/rules/
         **************************************************************************************************************/
        'eslint' : {
            options: {
                configFile: 'eslint.json'
            },
            src: ['src/zebra_datepicker.src.js']
        },

        /***************************************************************************************************************
         *  JSHINT
         *  https://npmjs.org/package/grunt-contrib-jshint
         **************************************************************************************************************/
        'jshint': {
            options: {
                strict:     false,       //  requires all functions to run in ECMAScript 5's strict mode
                asi:        true,       //  suppresses warnings about missing semicolons
                globals: {              //  white list of global variables that are not formally defined in the source code
                    '$':                true,
                    'alert':            true,
                    'console':          true,
                    'jQuery':           true
                },
                browser:    true,       //  defines globals exposed by modern browsers (like `document` and `navigator`)
                bitwise:    true,       //  prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others
                curly:      false,      //  whether to always put curly braces around blocks in loops and conditionals
                eqeqeq:     true,       //  this options prohibits the use of == and != in favor of === and !==
                freeze:     true,       //  this options prohibits overwriting prototypes of native objects such as Array, Date and so on
                scripturl:  true,       //  allow use of scripts
                nonew:      true,       //  this option prohibits the use of constructor functions without assigning them to a variable
                loopfunc:   true,       //  allow functions to be defined inside loops
                undef:      true        //  this option prohibits the use of explicitly undeclared variables
            },
            src: ['src/zebra_datepicker.src.js']
        },

        /***************************************************************************************************************
         *  UGLIFY
         *  https://npmjs.org/package/grunt-contrib-uglify
         **************************************************************************************************************/
        'uglify': {
            options: {
                compress: true,
                mangle: true,
                beautify: false,
                output: {
                    ie8: true
                }
            },
            build: {
                src: 'src/zebra_datepicker.src.js',
                dest: 'dist/zebra_datepicker.min.js'
            }
        },

        /***************************************************************************************************************
         *  COPY
         *  https://github.com/gruntjs/grunt-contrib-copy
         **************************************************************************************************************/
        'copy': {
            all: {
                files: [
                    { src: 'src/zebra_datepicker.src.js', dest: 'dist/zebra_datepicker.src.js' },
                    { expand: true, cwd: 'src/css/default/', src: '*.png', dest: 'dist/css/default/' },
                    { expand: true, cwd: 'src/css/bootstrap/', src: '*.png', dest: 'dist/css/bootstrap/' },
                    { expand: true, cwd: 'src/css/metallic/', src: '*.png', dest: 'dist/css/metallic/' }
                ]
            }
        },

        /***************************************************************************************************************
         *  WATCH
         *  https://npmjs.org/package/grunt-contrib-watch
         **************************************************************************************************************/
        'watch': {
            js: {
                files: ['src/zebra_datepicker.src.js'],
                tasks: ['newer:eslint', 'newer:jshint', 'newer:uglify', 'copy', 'notify:done'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass', 'cssmin', 'notify:done'],
                options: {
                    livereload: true
                }
            }
        }

    });

    // register plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass', 'cssmin', 'eslint', 'jshint', 'uglify', 'copy', 'watch']);

};