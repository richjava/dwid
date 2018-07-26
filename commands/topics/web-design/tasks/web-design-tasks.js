'use strict';
let Utils = require('../../utils'),
    Config = require('./tasks-config'),
    Promise = require('bluebird'),
    promiseWhile = require('promise-while')(Promise);

/**
 * Class for tasks to create a web project.
 */
module.exports = {

    /**
    * Task to create project directory.
    */
    createProjectDirectory: function () {
        let args = {
            path: Config.projectName,
            successText: 'Created project directory in ' + process.cwd(),
            explanationText: 'Your web project "' + Config.projectName + '" is just a folder with HTML files and other ' +
            'resources inside.'
        }
        return Utils.createDirectory(args);
    },

    /**
     * Task to create index file.
     */
    createIndexFile: function () {
        let args = {
            fromFileName: 'boilerplate.html',
            toFileName: 'index.html',
            fromPath: Config.assetsDir + '/html/setup/',
            toPath: Config.projectName + '/',
            successText: 'Created index.html file in the project directory',
            explanationText: 'Your home HTML page is named "index" because web servers ' +
            'will look for an HTML file by this name as a starting point. Right now there\'s just some "boilerplate" ' +
            'code (code to start off with) in it. Double-click on the file to open it in a browser.'
        }
        return Utils.createFile(args);
    },

    /**
     * Task to create CSS directory.
     */
    createCssDirectory: function () {
        let args = {
            path: Config.projectName + '/css',
            successText: 'Created "css" directory in ' + process.cwd()
        }
        return Utils.createDirectory(args);
    },

    /**
     * Task to create main CSS file.
     */
    createCssFile: function () {
        let args = {
            fromFileName: 'comments.css',
            toFileName: 'style.css',
            fromPath: Config.assetsDir + '/css/setup/',
            toPath: Config.projectName + '/css',
            successText: 'Created "style.css" file in the "css" directory',
            explanationText: 'Your project should only have one CSS file for your styles. This is because it takes time ' +
            'to retrieve each file from the server and more files will increase the page loading time. Common naming ' +
            'conventions for this file are "style.css", "styles.css" or "main.css".'
        }
        return Utils.createFile(args)
            .catch(error => console.log(error.message));
    },

    /**
    * Task to create HTML link element in index file.
    */
    createHTMLLinkElement: function (resolve) {
        let args = {
            fromFileName: 'stylesheet-link.html',
            toFileName: 'index.html',
            fromPath: Config.assetsDir + '/html/setup/',
            toPath: Config.projectName + '/',
            successText: 'Created HTML link element in index.html',
            explanationText: 'A link to your stylesheet was added to the "head" section of your index.html. Now any ' +
            'styles that your write in main.css will be applied. Now we have our project set up, so let\'s get started with ' +
            'the web design!'
        }
        return Utils.createFile(args)
            .catch(error => console.log(error.message));
    }
}