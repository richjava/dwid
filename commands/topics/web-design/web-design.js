let Utils = require('../utils'),
    Tasks = require('./tasks/web-design-tasks'),
    inquirer = require('inquirer'),
    Promise = require('bluebird'),
    promiseWhile = require('promise-while')(Promise),
    emoji = require('node-emoji'),
    chalk = require('chalk');

/**
 * Tasks to create a web project.
 */
module.exports = {

    /**
     * The main set of steps for this topic.
     */
    steps: [{
        name: 'createIndex',
        message: 'Create a web project directory with index.html file inside',
        tasks: [
            Tasks.createProjectDirectory,
            Tasks.createIndexFile
        ]
    }, {
        name: 'connectStylesheet',
        message: 'Create and connect a CSS stylesheet',
        tasks: [
            Tasks.createCssDirectory,
            Tasks.createCssFile,
            Tasks.createHTMLLinkElement
        ]
    }],

    /**
     * Run prompts for steps.
     */
    init: function () {
        let self = this;
        let i = 0;
        promiseWhile(function () { return i < self.steps.length },
            function () {
                return new Promise(function (resolve, reject) {
                    let step = self.steps[i];
                    inquirer
                        .prompt({
                            type: 'confirm',
                            name: step.name,
                            message: step.message
                        }).then((confirm) => {
                            if (confirm[step.name]) {
                                Utils.executeTasks(step.tasks).then(() => { resolve(i++); });
                            }
                        });
                });
            })
            .then(function () {
                console.log(chalk.green('***********************'));
                console.log(chalk.green(emoji.get('heavy_check_mark') + ' Done!'));
                console.log(chalk.green('***********************'));
            });
    }
}
