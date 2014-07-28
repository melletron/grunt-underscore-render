/*global module:true*/
'use strict';
module.exports = function gruntTask(grunt) {
    var fs = require('fs');
    var _ = require('underscore');
    grunt.registerTask('underscore_render', 'Render underscore templates into JavaScript', function () {

        var templateSource = '';
        var config = this.options({
            'outputFile': './templates.js',
            'globalName': 'templates',
            'srcFiles': []
        });

        var operator = function (path, name) {
            grunt.log.writeln("reading " + path);
            var underscoreTemplate = grunt.file.read(path);
            grunt.log.writeln("template " + name + " appended");
            var tpl = underscoreTemplate.match(/<!--data-underscore-->([^]*)<!--\/data-underscore-->/)[1];
            return 'window.' + config.globalName + '[\'' + name + '\']=' + _.template(tpl).source + ';'
        };

        templateSource += 'window.' + config.globalName + '=window.' + config.globalName + '||{};';

        _.each(config.srcFiles, function (module) {
            templateSource += operator(module.src, module.name);
        });

        grunt.log.writeln("writing templates to " + config.outputFile);
        grunt.file.write(config.outputFile, templateSource);
        grunt.log.ok();

    });

};
