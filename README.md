# API Reference Template #

The goal of this project is for API developer who do not actually 
care too much about the looks of their API documents. This project 
provide a simple API reference website template, so once the developer 
have done developed their API. They can use this website(template) to 
fast create their API document webpage. <br/><br/>


## Acknowledge ##
This application is using NodeJS for the backend. You might need 
some knowledge of `express.js` in order to expand the application 
if you need to. The frontend are only using the basic `HTML`, `CSS`, 
and `jQuery`. You will also need the minimal knowledge of these tools.


## How to use? ##
All the api components will be search under `./website/ScriptReference/api` 
directory. The manual components will be search under `./website/Manual/doc` 
directory. Make all the API references into a HTML files then the server 
should acknowledge the changes and display it in the webpage. Importantly 
that the path cannot contain any space character. Please use underscore 
instead of just remove all the spaces completely.

<br/>

### Directory ###
Bad : `./website/ScriptReference/api/Hello World` <br/>
Good : `./website/ScriptReference/api/Hello_World` <br/> 
Good : `./website/ScriptReference/api/HelloWorld` <br/>

### File ###
Bad : `./website/ScriptReference/api/Hello World.html` <br/>
Good : `./website/ScriptReference/api/Hello_World.html` <br/>
Good : `./website/ScriptReference/api/HelloWorld.html` <br/>

## Example ##
N/A
