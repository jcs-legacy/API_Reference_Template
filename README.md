[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Release Tag](https://img.shields.io/github/tag/jcs090218/API_Reference_Template.svg?label=release)](https://github.com/jcs090218/API_Reference_Template/releases/latest)

# API Reference Template

[![Build Status](https://travis-ci.com/jcs090218/API_Reference_Template.svg?branch=master)](https://travis-ci.com/jcs090218/API_Reference_Template)

* Demo: [API_Reference_Template](http://www.jcs-profile.com:3000)

The goal of this project is for API developer who do not actually
care too much about the looks of their API documents. This project
provide a simple API reference website template, so once the developer
have done developed their API. They can use this website(template) to
fast create their API document webpage.

## Acknowledge

This application is using NodeJS for the backend. You might need
some knowledge of `express.js` in order to expand the application
if you need to. The frontend are only using the basic `HTML`, `CSS`,
and `jQuery`. You will also need the minimal knowledge of these tools.

## How to use?

All the api components will be search under `./website/ScriptReference/api`
directory. The manual components will be search under `./website/Manual/doc`
directory. Make all the API references into a MD files then the server
should acknowledge the changes and display it in the webpage. 

## Run the application

Before you run the application, make sure you install node.js to
your OS environment. Step one, run `./scripts/setup.bat`, this
file will install all the dependencies you need for this project.
Step two, run `./scripts/run.bat` in order to start the server.
If you are running of Linux environment with bash installed, just
execute the same scripts but with `.sh` extension behind.
Step three, run you favorite web browser with `localhost:3000` and
the following screens should appear infront of you.

Manual Screen                                                   | Scripting Reference Screen
:--------------------------------------------------------------:|:----------------------------------------------------------------------------:|
<img src="./screenshot/demo_01.png" width="465" height="245"/>  |  <img src="./screenshot/demo_02.png" width="465" height="245"/>

## Deploy on to server

If you are ready to deploy your scripting manual application, run
`./scripts/start_forever.bat` and the server will run even you terminated
the console. If you want to stop the server, run `./scripts/stop_forever.bat`
to terminate the previous started server. If you are on linux distro
with bash installed, run the same script but with `.sh` extension behind.

## Directing to other page

### Path Keyword Conversion List

| Key  | Entity |
|------|--------|
| _sl_ | /      |
| _sp_ |        |

If you wish to direct to other page, see the code below for example. This 
line of code will direct user to `./api/HelloWorld/Test Ref.md` page.
```
<!-- Here _sl_ will convert to slash. And _sp_ will convert to space. -->
[Test Ref](?page=HelloWorld_sl_Test_sp_Ref)
```

## Search Engine

Search engine is implemented by simply comparing the file name with keyword 
case insensitively.
<img src="./screenshot/search_demo.png" width="930" height="490"/>

## Configuration

If you do not like any of these settings, checkout `./config.js` and `./website/js/config.js`.
You can change the path, manual name, version number, copyright text, etc.
Basically anything you need to make a API reference document website.

If you do not like style you can load you own CSS file at `./website/css-lib.html`.
Or change the CSS property in `./website/css/style.css`. For the content's style can
be found in `./website/css/content.css`.

## Example

* [JCSUnity-Scrpting-Manual](https://github.com/jcs090218/JCSUnity-Scripting-Manual)
