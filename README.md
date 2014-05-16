Mashups: Creating with Web APIs
===============================

NYU ITP Spring 2014  
Class: Thursdays 6:30 - 9pm  
Instructor: Craig Protzel  
Email: craig.protzel@nyu.edu  
Office Hours: [Thursdays 10:30am - 2:30pm](https://www.google.com/calendar/selfsched?sstoken=UUdZSW52V1dpZUEwfGRlZmF1bHR8NGY4NmMwMTJiMWVkZGE0YjJkNjBlODM0ZmM1NTJkNjc)

[Class Email List](https://groups.google.com/forum/#!forum/itp-mashups)  
[Class Blog List](https://docs.google.com/spreadsheet/ccc?key=0AhUAnC0yr2QRdFp6alNMeVJleTZERnlYX2VDTGVjVkE&usp=sharing)  
[Office Hours Sign-Ups](https://www.google.com/calendar/selfsched?sstoken=UUdZSW52V1dpZUEwfGRlZmF1bHR8NGY4NmMwMTJiMWVkZGE0YjJkNjBlODM0ZmM1NTJkNjc)

Course Description
------------------

Much data and many services are now accessible through public APIs - Application Programming Interfaces - from sites such as YouTube, Google Maps, Twitter, and Xively. But how can we access these datasets and services? How can we transfer, store, initialize, and display this data on our own pages? And how might we use the data to create unique and creative web experiences of our own? 

This class is about building interactive single-page web applications that leverage public data from a range of existing web services. The overall goal of the class will be for each student to have 3 functional well-designed single-page web applications by end of semester. Much of class time will be spent reviewing and writing code, mostly Javascript, for front-end (in-browser) web development. We will use a number of frameworks, including JQuery, Underscore, PaperJs, and D3. Where backend work is required, we will use Node-Express. Students should have some programming experience (ICM) as well as a basic understanding of web development (Comm Lab Web). Experience with Javascript is a plus.


Course Goals
------------

* Develop an understanding of front-end web development and the roles of client-side technologies, specifically HTML, CSS, Javascript, and public web APIs.
* Develop a basic understanding of Javascript and the world of open source (client-side) Javascript libraries
* Learn how to work with a variety of data-serving public web APIs
* Learn how to create web pages in modern browsers that leverage data from web services via public web APIs
* Gain exposure to server-side web development
* Be empowered to produce compelling single page web experiences


Course Requirements
-------------------

* Sign up for class email list - [ITP Mashups Google Group](https://groups.google.com/forum/#!forum/itp-mashups)
* Attend all classes, no more than 2 absences allowed 
* Arrive on time to the start of class or office hour appointment
* Complete all homework exercises and assignments on time
* Post homework exercises and assignments to your blog at least one hour prior to class
* Participate in class through presentations, discussion, questions, and feedback
* Respect fellow students' work, questions, and comments
* Communicate with me if you need to miss class, would like extra help, or schedule additional office hours


Grading
--------

**25%**  Attendance & Class Participation  
**25%**  Homework  
**25%**  Assignments #1 & #2  
**25%**  Final Project  

Syllabus
--------

* **PART I: Weeks 1 - 5 Client-Side Web + API Fundamentals**
* **PART II: Weeks 6 - 9 Client-Side Javascript Frameworks**
* **PART III: Weeks 10 - 14 Server-Side Web + Final Project**


### Week 1 (01/30) - The Web, APIs, & Data

##### Class Intro
* [ITP Mashups - Remixing the Web by Dan Aminzade](http://webremix.org/syllabus.php)
* [ITP Write Once Access Anywhere by Corey Menscher](http://menscher.com/teaching/woaa/)
* [ITP Dynamic Web Development by John Schimmel](http://itpwebclass.herokuapp.com/)
* [StoryScramble](http://storyscramble.com)
* [VimeoLabs](http://vimeolabs.com)

##### Review Course Info & Syllabus

##### Student Intros

##### Lecture: The Web, APIs, & Data

* [Lecture Slides](https://dl.dropboxusercontent.com/u/9648298/Mashups_TheWebAPIsData_LectureSlides.pdf)
* References
  * [What's In An HTTP Request](http://rve.org.uk/dumprequest)
  * [Programmable Web](http://programmableweb.com)
  * [Codecademy API Tutorials](http://www.codecademy.com/tracks/apis)
  * [Temboo](https://www.temboo.com/)
  * [IFTT Recipes](https://ifttt.com/recipes)
  * [HealthCare.gov for Developers](https://www.healthcare.gov/developers/)
  * [OpenWeatherMap API](http://openweathermap.org/API)
  * [HowManyPeopleAreInSpaceRightNow?](http://www.howmanypeopleareinspacerightnow.com/)
  * [Data.Nasa.gov API](http://data.nasa.gov/api-info/)
  * [Open-Notify.org](http://open-notify.org/)
  * [Sunlight Foundation Labs - APIs](http://sunlightfoundation.com/api/)
  * [New Yorker - A Month of CitiBike Data](http://www.newyorker.com/sandbox/business/citi-bike.html)
  
##### Homework
* Sign Up - for class email list [ITP Mashups Google Group](https://groups.google.com/forum/#!forum/itp-mashups)
* Add -  your blog URL to the [class blog list](https://docs.google.com/spreadsheet/ccc?key=0AhUAnC0yr2QRdFp6alNMeVJleTZERnlYX2VDTGVjVkE&usp=sharing)
* Read - [Ch.3 of Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/index.html) up to but not including the section on Javascript
* Download - a text editor
* Donwload - a JSON formatter extension for the browser (I use [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) in Chrome)
* Explore - [ProgrammableWeb](http://programmableweb.com)
* Find, Post, & Describe - a url that returns JSON data from an Open API
* Create & Upload - a single web page that displays (some of) the data you found with some basic css styling. The upload should include a .html file and .css file. Feel free to copy and paste your data into the DOM, no need to programatically connect your page to the data 
* Additional Readings
  * [WebPlatform.org - How Does The Internet Work](http://docs.webplatform.org/wiki/concepts/internet_and_web/how_does_the_internet_work )
  * [Mozilla - Intro to HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction)
  * [WebPlatform.org - The Basics of HTML](http://docs.webplatform.org/wiki/guides/the_basics_of_html)
  * [WebPlatform.org - Getting Started with CSS](http://docs.webplatform.org/wiki/guides/getting_started_with_css)
  * [Mozilla - Getting Started with CSS Tutorials Parts 1-14](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started)
  * [API 101](http://apievangelist.com/index.html)
  * [The Future of API Design by Daniel Jacobson](http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer)


### Week 2 (02/06) -  Web Dev 101 - HTML, CSS, & Javascript

##### Discussion - Week 1 Homework

##### Mashup of the Day - [Spell with Flickr](http://metaatem.net/words/)

##### Workshop - HTML & CSS
* Setting up your page(s)
* Adding Elements
* Basic Styling
* Pair Programming Exercise
* Review

##### Workshop - Intro to Javascript
* Using the Browser Console
* Playing with Data Types
* The Window and the DOM
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) Example

##### Discussion - Assignment #1 Due Week 5 Class (03/02) 
* Create a single web page experience that, upon user input, responds with data from at least 2 web apis. One possible approach to this assignment would be to design the experience around answering a question for the user. An example of this is [doineedanumbrella.com](http://doineedanumbrella.com/). An example of a mashup that pulls together data from two different apis is the InstaTimes example provided here in the class repo. Ulitmately, it's up to you what you want to build. But **(1)** a user needs to "trigger" an event, **(2)** data needs to be requested via AJAX from two APIs, **(3)** and the page should update appropriately. Your completed assignment should include a .html file, a .css file, and a .js file. 


##### Homework
* Read - [Javascript section of Ch.3 - Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/index.html) up to but not including the section on SVGs
* Read - [Javascript 101](http://learn.jquery.com/javascript-101/) up through the section on Functions  
* Complete & Upload - the 3 code exercises at the end of [Eloquent JS 2nd Edition Preview Ch.2 - Looping A Triangle, FizzBuzz, & ChessBoard](http://eloquentjavascript.net/2nd_edition/preview/02_program_structure.html)
* Think & Post - idea(s) for Assignment #1
* Additional Readings
  * [Eloquent Javascript 2nd Edition Preview - Intro, Ch.1, & Ch.2](http://eloquentjavascript.net/2nd_edition/preview/)
  * [JS For Cats](http://jsforcats.com/)
  * [Mozilla - JS Guide - Values, Variables, & Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)
  * [Mozilla - A Re-Introduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)


### Week 3 (02/13): Making Things Happen On The Page - Javascript + jQuery

##### Discussion - Week 2 Homework

##### Workshop - Javascript + jQuery
* References
  * [Events and Listeners in Javascript](http://idratherbewriting.com/2013/02/04/events-and-listeners-javascript/)
  * [How jQuery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)
* Loops
* Functions
* Selectors
* Events
* [AJAX with jQuery](http://learn.jquery.com/ajax/)
* [WikiSearch API](http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search)
* [WikiSearch Example 1](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%201)
* [WikiSearch Example 2](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%202)
* [WikiSearch Example 4](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%204)
* Multiple API calls

##### Homework
* Review - [jQuery - Selecting Elements](http://learn.jquery.com/using-jquery-core/selecting-elements/)
* Review - [jQuery - Manipulating Elements](http://learn.jquery.com/using-jquery-core/manipulating-elements/)
* Review - [JQuery - Introducing Events](http://learn.jquery.com/events/introduction-to-events/)
* Watch - [Lynda.com: Javascript Essential Training - Ch.13 Advanced Javascript Features - Working With Objects and Prototypes (9min)](http://www.nyu.edu/its/lynda/)
* Get API Keys for both the [NY Times API](http://developer.nytimes.com/) and the [Instagram API](http://instagram.com/developer/)
* Create & Upload - a single web page that uses AJAX to load and display data from a public web api, your work should include a .html file, a .css file, and a .js file
* Additional Readings
  * Stewart Smith - [Javascript Basics - Objects Section](http://stewd.io/javascript/01-1-javascript.html) + [Prototypal Inheritance](http://stewd.io/javascript/05-1-inheritance.html)
  * [Mozilla - Intro to Object-Oriented Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)


### Week 4 (02/20): Structuring Your App + Guest Talk by Josh Begley 

##### Discussion - Week 3 Homework

##### Workshop - OOP in JS 
* Creating Our Own Objects
* Understanding the Prototype
* [Local Web Server](http://chimera.labs.oreilly.com/books/1230000000345/ch04.html#_setting_up_a_web_server)
* NY Times + Instagram API Mashup
  * [InstaTimes Example 1](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%201)
  * [InstaTimes Example 2](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%202)
  * [InstaTimes Example 3](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%203)

##### Josh Begley - Guest Speaker
*  [JoshBegley.com](http://joshbegley.com/)

##### Homework
* DUE - Assignment #1
* Watch - [The Definitive Guide to Object-Oriented Javascript (27 min)](http://www.youtube.com/watch?v=PMfcsYzj-9M) (Note - we will be implementing the "Classical" pattern in class)
* Read - [Getting Cozy with Underscore JS](http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/)
* Read - [An Undesrcore Templates Primer](http://headspringlabs.com/blog/an-underscore-templates-primer/)
* Additional Reading
  * [What Is 'this' in Javascript](http://www.sitepoint.com/what-is-this-in-javascript/)


### Week 5 (03/02): Assignment #1 DUE + Guest Talk by Martin Bravo 

###### **NOTE CLASS DATE HAS BEEN RESCHEDULED FOR SUNDAY 03/02 2:30PM**

##### Presentations - Assignment #1

##### Martin Bravo - "Going From 0 to 1"
* [Friend Forecast - A Facebook Weather Mashup](https://github.com/bravomartin/friend-forecast)
* Process
* Development Tips
  * Underscore Data Manipulation
  * Underscore Templates
* Additional Examples
  * [WikiSearch Example 3](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%203)
  * [WikiSearch Example 5](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%205)

##### Homework
* Read - [Ch.3 SVGs + Ch.4-6 of Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/index.html)


### Week 6 (03/06): Data Organization & Management + Guest Talk by Jeremy Scott-Diamond

##### Managing the Data
* Manipulating Strings
  * [MDN - String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#Properties)
  * Regular Expressions
    * [MDN - Regular Expression Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    * [Regular Expression Cheat Sheet](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)
    * [Rubular](http://rubular.com/) & [Scriptular](http://scriptular.com/) - web-based regular expression editors
    * [Stack Overflow - Don't Parse HTML with RegEx](http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags)
* Wotking with Arrays & Objects
* Using Underscore
* Managing Asynchronicity
  * [Mulitple Simultnaeous AJAX Requests In jQuery](http://css-tricks.com/multiple-simultaneous-ajax-requests-one-callback-jquery/)
* [Sunlight Foundation API](http://sunlightfoundation.com/api/)
* WhatsUpCongress Examples - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/WhatsUpCongress.zip)
 
##### [Jeremy Scott Diamond](http://jeremyscottdiamond.com/#projects) - "Working With D3" 
* [D3JS](http://d3js.org/)
* [Sunlight Labs - Congress Example](https://github.com/craigprotzel/Mashups/tree/master/D3_Congress) - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/D3_Congress_jsd.zip)
* Additional Tools
  * [Google Charts](https://developers.google.com/chart/)
  * [ChartJS](http://www.chartjs.org/)

##### Discussion - Assignment #2 Due Week 9 Class (04/03) 
* Create a single web page experience that leverages data from at least one public api and incorporates the use of at least one "interaction" library (i.e. D3, P5, Popcorn, etc.)

##### Homework
* Play with D3   
* Look at the [P5](https://github.com/lmccart/p5.js) & [PaperJS](http://paperjs.org/) libraries


### Week 7 (03/13): A Blank Canvas

##### Animation in the Browser
* [Canvas vs SVG - How to Choose the Right Format](http://www.sitepoint.com/canvas-vs-svg-how-to-choose/)
* [Mozilla - Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial)
* [Dive Into HTML5 - Let's Call It A Draw(ing) Surface](http://diveintohtml5.info/canvas.html)
* [HTML5 Canvas Cheat Sheet](http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.pdf)
* [CreativeJS - Request Animation Frame](http://creativejs.com/resources/requestanimationframe/)
* [Using Request Animation Frame](http://css-tricks.com/using-requestanimationframe/)
* [PaperJS vs ProcessingJS vs RafaelJS](http://coding.smashingmagazine.com/2012/02/22/web-drawing-throwdown-paper-processing-raphael/) + [Comparison Examples](http://zgrossbart.github.io/3gears/)

##### Animation Tools
* [P5](https://github.com/lmccart/p5.js)
* [PaperJS](http://paperjs.org/)
* [RafaelJS](http://raphaeljs.com/)

##### Homework
* Play with an Animation Library
* Look at the Web Audio API and Video Libraries


### Week 8 (03/27): Moving Pictures & Sound

##### Audio
* Web Audio API
  * [HTML5 Rocks: Getting Started With Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/)
  * [Web Audio API by Boris Smus](http://chimera.labs.oreilly.com/books/1234000001552/index.html) - Ch.1 & 2
  * [Canvas Deep Dive - Intro to Web Audio](http://joshondesign.com/p/books/canvasdeepdive/chapter12.html#overview) by [Josh Marinacci](https://twitter.com/joshmarinacci)
  * [StuartMemo.com - Web Audio Projects & Tutorials](http://stuartmemo.com/)
  * [Stuart Memo Video - How to Create Audio Using the Web Audio API](http://www.youtube.com/watch?v=oHBx_kMmsRE)
  * [Stack Overflow - What's the Difference Between Web Audio & HTML5 Audio Anyway?](http://stackoverflow.com/questions/13121250/whats-the-difference-between-web-audio-and-html5-audio-anyway)
* Web Audio API Libraries
  * [Howler](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library) - Basic Web Audio + HTML5 Audio
  * [Annyang](https://www.talater.com/annyang/) - Speech Recognition
  * [Timbre](http://mohayonao.github.io/timbre.js/) - Process and Synthesize Audio
  * [Buzz](http://buzz.jaysalvat.com/documentation/buzz/) - HTML5 Audio
* [FreeSound API](https://www.freesound.org/help/developers/)
* Code Examples - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/Basic_Audio.zip)

##### Video
* [HTML5 Video](http://www.html5rocks.com/en/tutorials/video/basics/)
* HTML5 Video Libraries
  * [PopcornJS](http://popcornjs.org/)  
  * [Popcorn Starter Code](https://github.com/benrito/popcorn-starter) - [Ben Moskowitz](https://twitter.com/benrito)
  * [VideoJS](http://www.videojs.com/) 
* [Youtube API](https://developers.google.com/youtube/v3/)  
* Code Examples - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/Basic_Video.zip)

##### Homework
* DUE - Assignment #2


### Week 9 (04/03): Assignment #2 DUE + Intro to the Server

##### Presentations - Assignment #2

##### Intro to the Server
* Install [NodeJS](http://nodejs.org/)
* [Express Framework](http://expressjs.com/)
* Code Examples - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/Server_Node_Express.zip)

##### Homework
* Read - Evan Hahn - [Understanding ExpressJS](http://evanhahn.com/understanding-express/)
* Create - An Express version of one of your assignments
* Additional Reading
  * [The Basics of Express Routes](http://flippinawesome.org/2014/04/07/the-basics-of-express-routes/)


### Week 10 (04/10): The Server & Storage + Guest Talk by Steve Klise

##### Steve Klise - Storage with CouchDB
* Code Examples - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/CouchDB.zip)
* [CouchDB](http://couchdb.apache.org/)
* [Couch DB - The Definitive Guide](http://guide.couchdb.org/editions/1/en/index.html)
* [Cloudant](https://cloudant.com)

##### Discussion - Final Project Due Week 14 Class (05/08)
* Create a single web page experience that leverages the skills and technologies learned in this course. Your final project MUST be uploaded to the web before class and it MUST incorporate at least ONE of the following elements:
  * a public web API as a data source
  * a client-side js library other than jQuery
  * server-side code (i.e. Node-Express)
  * data-storage (i.e. CouchDB on Cloudant)

##### Homework
* Create - An Express-CouchDB (Cloudant) version of last week's homework
* Proposal - Present At Least Two Final Project Ideas


### Week 11 (04/17): Re-Introduce Ourselves with OAuth + Final Project Proposal
* Open Authentication (OAuth)
  * [Hueniverse: OAuth Intro - A Valet Key For the Web](http://hueniverse.com/oauth/guide/intro/)
  * [OAuth Diagram From Fitbit](https://wiki.fitbit.com/display/API/OAuth+Authentication+in+the+Fitbit+API#OAuthAuthenticationintheFitbitAPI-TheOAuthFlow)
  * [OAuth Case Study with Foursquare](http://www.sitepoint.com/oauth-explained-with-foursquar/)
  * [OAuth 2.0 - The Good, The Bad, & The Ugly](http://code.tutsplus.com/tutorials/oauth-2-0-the-good-the-bad-the-ugly--net-33216)
  * [PassportJS](http://passportjs.org/) - Authentication for Node
  * [Twitter REST API v.1.1](https://dev.twitter.com/docs/api/1.1)
  * Code Example - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/OAuth_Twitter.zip)

* Additional
  * Sessions, Cookies, Local Storage, SSL, and HTTPS
  * [XKCD - How The Heartbleed Bug Works](http://xkcd.com/1354/)


### Week 12 (04/24): Running Wild on Heroku + Guest Talk by Miguel Bermudez

##### How to Deploy
* Git
  * [Download & Install Git](http://git-scm.com/downloads)
  * Steve Klise - [Introdcution to Git](http://skli.se/2012/09/22/introduction-to-git/) + [Git Workflow for Beginners](http://skli.se/2012/10/07/git-workflow-beginner/)
  * [Interactive Git Tutorial from Gthub](http://try.github.io/levels/1/challenges/1)
* Heroku
  * [Getting Started with Heroku](https://devcenter.heroku.com/articles/quickstart) & [Heroku Toolbelt](https://toolbelt.heroku.com/)
  * Corey Forsyth - [Deploying Node App to Heroku](https://vimeo.com/91210794)
  * [Getting Started with NodeJS on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
* [Mashups Sepcific Tutorial]()

##### Miguel Bermudez - IRL
* [github.com/miguelbermudez](https://github.com/miguelbermudez)
* [Control Group](http://www.controlgroup.com/)


### Week 13 (05/01): Final Project Workshop & User Testing


### Week 14 (05/08): FINAL PRESENTATIONS

##### Final Presentations
* Guest Critics
  * Gerald Mitchell - [swich.to](http://swich.to)
  * Justin Dickinson - [vimeo.com](http://vimeo.com)
  * Mimi Yin - [ponder.co](https://www.ponder.co/welcome/)
  * Miguel Bermudez - [Control Group](http://www.controlgroup.com/)

##### Course Evaluations


Helpful Links
------------------

#### General Web
* [Mozilla Web Tutorials](https://developer.mozilla.org/en-US/docs/Web/Tutorials)
* [JS Fiddle](http://jsfiddle.net/) - web-based tool to share code
* [11 Phases of a Web Developer's Career](http://net.tutsplus.com/articles/general/the-11-phases-of-a-web-developers-career-as-illustrated-by-memes/)
* [Wappalyzer](http://wappalyzer.com/) - browser plug-in to quickly identify a site's software
* [URL Encoding](http://www.blooberry.com/indexdot/html/topics/urlencoding.htm) or 'What are those "%20" codes in URLs'?
* [Favicon Generator](http://www.favicon.cc/)
* [Can I Use](http://caniuse.com/)
* [WebKit for Developers](http://www.paulirish.com/2013/webkit-for-developers/) by Paul Irish
* [Ars Technica - Does Webkit Face A Troubled Future Now That Google Is Gone](http://arstechnica.com/information-technology/2013/04/does-webkit-face-a-troubled-future-now-that-google-is-gone/)
* [Best Practices for Speeding Up Your Web Site - Yahoo Developer Network](http://developer.yahoo.com/performance/rules.html)

#### HTML
* [What Is HTML5?](http://radar.oreilly.com/2011/07/what-is-html5.html)

#### CSS
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/) - scalable customizable icons controlled by CSS
* [CSS Tricks - Set Page Background to a Full Image](http://css-tricks.com/perfect-full-page-background-image/)
* [Little CSS Stuff Newcomers Get Confused ABout](http://css-tricks.com/little-css-stuff-newcomers-get-confused-about/)
* [CSS Positioning 101](http://alistapart.com/article/css-positioning-101)

#### JS
* ["If Hemingway Wrote Javascript" by Angus Croll](http://byfat.xxx/if-hemingway-wrote-javascript)
* [SuperheroJS](http://superherojs.com/) - a collection of the best articles, videos, and presentations on javascript
* [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
* [JS IS Sexy - 16 Concepts JS Professionals Must Know Well](http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/)
* [A Drip of JS - Archive](http://designpepper.com/js-drip-archive)  
* [45 Useful JS Tips, Tricks, & Best Practices](http://flippinawesome.org/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices)
* [Mozilla - JS Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [Lear X in Y Minutes - Javascript](http://learnxinyminutes.com/docs/javascript/)
* [Javascript Garden](http://bonsaiden.github.io/JavaScript-Garden/) - a collection of documentation about the most quirky parts of JS
* [Javascript - Function Declaration Ambiguity](http://www.dustindiaz.com/javascript-function-declaration-ambiguity/)
* [Sublime Linter](http://www.hongkiat.com/blog/identify-code-errors-sublime-linter/)
* [Drag and Drop Tutorial - Native HTML5](http://www.html5rocks.com/en/tutorials/dnd/basics/#toc-dragging-events)

#### APIs
* ["A Brief Introduction to REST"](http://www.infoq.com/articles/rest-introduction)
* ["A REST Tutorial"](http://rest.elkstein.org/)
* [Stack Overflow - What is JSONP All About?](http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about)
* [CORS - Cross Origin Resource Sharing](http://enable-cors.org/)
