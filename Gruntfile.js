/*global module:true*/




/*
 * grunt-underscore-render
 * https://github.com/
 *
 * Copyright (c) 2014 Melle Hofman
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {


    // Project configuration.
    grunt.initConfig({

        clean: {
            tests: ['tmp']
        },

        // Configuration to be run (and then tested).
        underscore_render: {
            options: {
                'outputFile': './tmp/templates.js',
                'globalName': 'templates',
                'srcFiles': [
                    {
                        'src': './tests/fixtures/FlightDetails.html',
                        'name': 'flightDetails'
                    },
                    {
                        'src': './tests/fixtures/HotelDetails.html',
                        'name': 'hotelDetails'
                    }
                ]
            }
        },

        nodeunit: {
            tests: ['tests/*_test.js']
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'underscore_render', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['test']);

};