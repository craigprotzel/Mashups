### The Server Plus Storage 

##### I. Discussion - Week 9 Homework

##### II. Node-Express Intro Redux
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

##### III. Creating your own API
 * Main Page, Input Page, Data Page

##### IV. Storage with CouchDB
* Download Code Examples
* [CouchDB](http://couchdb.apache.org/)
* [Couch DB - The Definitive Guide](http://guide.couchdb.org/editions/1/en/index.html)
* [Cloudant](https://cloudant.com)

##### V. Discussion - Final Project
* Create a single web page experience that combines (1) data from at least one public web API and (2) data submiteed by users that is stored in your own databse. Your final project should be uploaded to the web before class and should incorporate the following elements:
	* a public web API as a data source
	* a client-side js library other than jQuery and/or Underscore
	* server-side code (i.e. Node-Express)
	* data-storage (i.e. CouchDB on Cloudant)
	* at least one route that returns json data to the page
In terms of 'data-storage', the idea is that a user will somehow contribute (i.e. input data) to your application. User input could come in many forms including but not limited to requests, comments, reviews, links, media, feedback, high scores, solutions and more. The input could be available only to that user through a personal link or could affect the entire experience of the application. It is up to you to decide! 

Here are some links for inspiration:
	* [The Nicest Place on the Internet](http://thenicestplaceontheinter.net/)
	* [ThisIsSand](http://thisissand.com/)
	* [Wordnik](https://www.wordnik.com/)


##### VI. Homework
* Create - a  Node-Express app that runs locally on your computer that has **4 routes**
	* '/' - the landing page
	* '/:term' - a page with an api request based on the url  
	* '/api/:term' - a page that shows json data based on the url
	* '*' - a catch all page
* Prepare - 2 Final Project Proposals to share with the class