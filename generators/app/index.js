'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('MaterializeWebpack') + ' generator!'
    ));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      ["_package.json", "_webpack.config.js", "src"].map(function(src) {
        var is_template = (src.substring(0,1) == '_');
        var dest = is_template ? src.substring(1) : src;
        this.fs.copy(
          this.templatePath(src),
          this.destinationPath(dest)
        );
      }.bind(this));
    },

    projectfiles: function () {
      ["editorconfig", "gitignore", "jshintrc"].map(function(src) {
        this.fs.copy(
          this.templatePath(src),
          this.destinationPath('.' + src)
        );
      }.bind(this));
    }
  },

  install: function () {
    this.npmInstall();
  }
});
