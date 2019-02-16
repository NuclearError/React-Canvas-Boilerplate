# React-Canvas-Boilerplate
Boilerplate for projects using React and HTML Canvas

------------------------

### Get Started

Having cloned or downloaded the repo, run the following:

````
npm install
npm start
````

A local version of the project can be viewed at [http://localhost:8080/index.html](http://localhost:8080/index.html). Port 8080 is the default used by webpack-dev-server. In the case that port 8080 is already in use, edit the webpack dev server config file:

`node_modules\webpack-dev-server\bin\webpack-dev-server.js`

Change the port number from 8080 to any other valid port number.

### Using Canvas with React

This boilerplate is set up to show how a Canvas component can be embedded within a React project, with a basic demonstration of loading up some image assets and getting some text to display. The intention of the boilerplate is to allow for working with the canvas while also being able to use React patterns, as opposed to vanilla JS.

To be able to create HTML elements (`div` etc) and then use them as canvas assets, you would need to convert them to a `HTMLImageElement`, or another format that is accepted by the canvas `drawImage` method. There are libraries to do this (eg. [HTML-to-Image](https://www.npmjs.com/package/html-to-image)) but it may be less overhead to work with image assets within the canvas in a more traditional manner.

### Compiling the CSS using Gulp

This project is set up to use Gulp in order to convert Sass files to CSS. Using `gulp` on the command line will watch the files contained in the SCSS folder and compile as required. Note that this process uses gulp-ruby-sass, so you may need to install Ruby if it is not already installed.

### Unit Testing

Unit tests can be found in src/tests and use Jest with Enzyme.

To run all tests, use:

````
npm test
````

To run one test file, use:

````
npm test my-component.test.jsx
````
