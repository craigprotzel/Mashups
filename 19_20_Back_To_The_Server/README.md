### WEEK 10 Classes 19_20: Back to the Server   

##### I. Discussion - Class 17_18 Homework

#### II. Intro to the Server & Node-Express
* [Express Framework](http://expressjs.com/)
* [NPM - Dependencies](https://www.npmjs.org/doc/files/package.json.html#dependencies)
	* [NPM - Tilde vs Caret](http://stackoverflow.com/questions/22343224/difference-between-tilde-and-caret-in-package-json)
* [Nodemon Package](http://nodemon.io/)
* Review Express Basic Examples  
	* [Understanding Module.exports & exports in NodeJS](http://www.sitepoint.com/understanding-module-exports-exports-node-js/)
	* [Exports vs Module.exports in NodeJS](http://www.hacksparrow.com/node-js-exports-vs-module-exports.html)
	* [EJS for Node](https://github.com/tj/ejs)
	* [Embedded Javascript](http://www.embeddedjs.com/)
* Dynamic Routes  
* API Calls on the Server    
	* [Request Library](https://www.npmjs.org/package/request) 
	* [Request Library Documentation](https://github.com/request/request)
	* [JSON Parse](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) & [JSON Stringify](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 

#### III. Creating your own API
 * Main Page, Input Page, Data Page
 * [CORS Enabled Routes](http://enable-cors.org/server.html)
 * [BodyParser Library](https://github.com/expressjs/body-parser)

#### IV. Homework
* Create - a  Node-Express app that runs locally on your computer that has **4 routes**
	* '/' - the landing page
	* '/:term' - a page with an api request based on the url  
	* '/api/:term' - a page that shows json data based on the url
	* '*' - a catch all page
