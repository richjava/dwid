# Dwid
A starter project for command line scaffolding of Hello World tutorial projects.

Use Dwid to scaffold out projects in a step by step process.

---

## For developers (remove this section before publishing to NPM)

### Intro
DWID stands for "Do What I Do". The idea for it came about from observing that people who had put in hours of effort trying to learn web technologies through interactive cloud-based tutorials still didn't know how to put projects together and how the technologies work with each other.

### Process
The basic process for creating a Dwid app is:
1. Developing
To run it locally:
* Navigate to the project on the command line.
* Run:
````
npm install
````
Then:
````
node index.js dwid
````
* Put in the assets (files) you want to scaffold out. Do this in the commands/assets directory. These could be HTML/CSS/JS files, images, etc.
* Create topics. Do this in command/topics and export them in the command/topics/index.js file.
* Configure the flow of the scaffolding. Do this in commands/topics/dwid.js.

2. Preparing to publish
In package.json:
* Change the name of the app to the name of your Dwid, e.g. "dwid-web-design".
* Change the version to a starting version (0.0.1).
* Change the value of the "bin" property to use a custom CLI command for your app. For example, the following will allow the app to be run with a CLI command of "dwid-web-design":
````
"bin": {
    "dwid-web-design": "./bin/dwid"
  }
````
* Modify any other other applicable properties.
In README.md (this file):
* Modify the description under the main heading to suit your app.
* Remove the "For developers" section.
* In the "Installation" section, change the install command from:
````
npm install -g dwid
````
To the command you specified in package.json, for example:
````
npm install -g dwid-web-design
````
And in the "Usage" section, change:
````
dwid
````
To your global command, for example:
````
dwid-web-design
````

3. Publishing
* Create an [NPM account](https://www.npmjs.com/signup).
* Set your NPM author info:
````
npm set init.author.name "Your Name"
npm set init.author.email "you@example.com"
npm set init.author.url "http://yourblog.com"

npm adduser
````
* Publish your Dwid to NPM
````
npm publish ./
````

### Best practices
* The naming convention for Dwid projects is lowercase and prefixed with "dwid" and suffewith the "my-project-name" being the topic of study: dwid-my-project-name, 
* Each project built with Dwid should be a well-rounded and reasonably narrow unit of learning.
* Dwid works best if the scaffolded items are well commented to explain each step. 
* Links to related resources are also handy and can be included in the comments.

### Contributing
If you're interested in developing the Dwid project, fork this repository :)

---

## Installation
### In short:
````
npm install -g dwid
````
### For beginners:
Dwid is run on the command line and is installed through NPM. You'll need to have Node.js on your computer, which can be downloaded here:
[Node.js](https://nodejs.org/en/)

Then you can open the terminal (on Mac) or command prompt (on Windows) to run the NPM command above.

## Usage
Create a folder on your machine that you want Dwid to use, you could call it "Dwid". Open your terminal or command prompt on this folder and run the following command:
````
dwid
````
From here, just follow the commands and Dwid will take you through the tutorial!

## What is Dwid?
DWID stands for "Do What I Do". It is a starter CLI tool project for scaffolding Hello World projects in a step by step process. 

## Attributions
Dwid was built on top of the [Commander Starter](https://github.com/tsantef/commander-starter) project.

## Licence
This project is licensed under the terms of the MIT license.