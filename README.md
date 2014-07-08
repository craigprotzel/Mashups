Mashups: Creating with Web APIs
===============================

NYU ITP Summer 2014  
Class: Tuesdays & Thursdays 6:30 - 9:25pm  
Instructor: Craig Protzel  
Email: craig.protzel@nyu.edu  
Office Hours:  TBD

[Class Info List](https://docs.google.com/spreadsheets/d/1c_7z-jRsvXJHaoifS1imojktuyf9nNgAepcgXZ4kBCg/edit?usp=sharing)  
[Office Hours Sign-Ups](https://www.google.com/calendar/selfsched?sstoken=UUdZSW52V1dpZUEwfGRlZmF1bHR8NGY4NmMwMTJiMWVkZGE0YjJkNjBlODM0ZmM1NTJkNjc)

Course Description
------------------

Much data and many services are now accessible through public APIs - Application Programming Interfaces - from sites such as YouTube, Google Maps, Twitter, and Wikipedia. But how can we access these datasets and services? How can we transfer, store, initialize, and display this data on our own pages? And how might we use the data to create unique and creative web experiences of our own?

This class is about building interactive single-page web applications that leverage public data from a range of existing web services. The overall goal of the class will be for each student to have 3 functional well-designed single-page web applications by end of semester. Much of class time will be spent reviewing and writing code, mostly Javascript, for client-side (front-end) web development. We will use a number of frameworks, including JQuery, Underscore, Paper, Pocporn, D3 and more. Where server-side (back-end) work is required, we will use Node-Express. Students should have some programming experience (ICM) as well as a basic understanding of web development (Comm Lab Web), specifically exposure to HTML & CSS. Experience with Javascript is a plus.

Course Goals
------------

* Develop an understanding of client-side (front-end) web development and the roles of client-side technologies, specifically HTML, CSS, Javascript, and public web APIs.
* Develop a basic understanding of Javascript along with the ecosystem of open source client-side Javascript libraries
* Learn how to work with a variety of data-serving public web APIs
* Learn how to create web pages in modern browsers that leverage data and services from public web APIs
* Gain exposure to server-side (back-end) web development and data storage
* Become empowered to produce compelling well-designed single page web experiences

Course Requirements
-------------------

* Attend all classes, no more than 2 absences allowed
* Arrive on time to the start of class or office hour appointment
* Complete all homework exercises and assignments on time
* Post homework exercises and assignments to your blog at least one hour prior to class
* Participate in class through presentations, discussion, questions, and feedback
* Respect fellow students' work, questions, and comments
* Communicate with the professor if you have any questions, would like extra help, or need further instruction
* Email the professor **in advance** if you need to miss class or (re)schedule office hours

Grading
--------

**25%**  Attendance & Class Participation  
**25%**  Homework  
**25%**  Assignments #1 & #2  
**25%**  Final Project  

Syllabus
--------

* **PART I: Classes 1 - 5 Client-Side Web + API Fundamentals**
* **PART II: Classes 5 - 9 Client-Side Javascript Frameworks**
* **PART III: Classes 9 - 12  Server-Side Web + Final Project**

### CLASS 1 (07/08): The Web, APIs, & Data

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

##### Exercise: Super Simple Page
* Setting up your page
* Adding elements

##### Homework
* Add -  yourself to the [class info list](https://docs.google.com/spreadsheets/d/1c_7z-jRsvXJHaoifS1imojktuyf9nNgAepcgXZ4kBCg/edit?usp=sharing)
* Read - [Ch.3 of Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/index.html) up to but not including the section on Javascript
* Download - a text editor (I use [Sublime Text](http://www.sublimetext.com/))
* Donwload - a JSON formatter extension for the browser (I use [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) in Chrome)
* Explore - [ProgrammableWeb](http://programmableweb.com)
* Find, Post, & Describe - a url that returns JSON data from an Open API
* Create & Upload - a single web page that displays (some of) the data you found. Your page must have some basic css styling. The upload should include a .html file and .css file. Feel free to copy and paste your data into the DOM, you DO NOT need to programatically connect your page to the data
* Additional Readings
  * [WebPlatform.org - How Does The Internet Work](http://docs.webplatform.org/wiki/concepts/internet_and_web/how_does_the_internet_work )
  * [Mozilla - Intro to HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction)
  * [WebPlatform.org - The Basics of HTML](http://docs.webplatform.org/wiki/guides/the_basics_of_html)
  * [WebPlatform.org - Getting Started with CSS](http://docs.webplatform.org/wiki/guides/getting_started_with_css)
  * [Mozilla - Getting Started with CSS Tutorials Parts 1-14](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started)
  * [API 101](http://apievangelist.com/index.html)
  * [The Future of API Design by Daniel Jacobson](http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer)

### CLASS 2 (07/10): Web Dev 101

##### Discussion - Class 1 Homework

##### Workshop - HTML & CSS
* Basic Styling
* Classes & IDs
* Position
* [HTML5 Boilerplate](http://html5boilerplate.com/)

##### Workshop - Intro to Javascript
* Using the Browser Console
* Data Types 
* The Window and the DOM

##### Exercise: [Playing with the Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)

##### Discussion - Assignment #1 Due CLASS 5 (07/22)
* Create a single web page experience that, upon user input, responds with data from at least 2 web apis. One possible approach to this assignment would be to design the experience around answering a question for the user. An example of this is [doineedanumbrella.com](http://doineedanumbrella.com/). An example of a mashup that pulls together data from two different apis is the InstaTimes example provided here in the class repo. Ulitmately, it's up to you what you want to build. But **(1)** a user needs to "trigger" an event, **(2)** data needs to be requested via AJAX from two APIs, and **(3)** the page should update appropriately. Your completed assignment should include a .html file, a .css file, and a .js file.

##### Homework
* Read - [Javascript section of Ch.3 - Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/index.html) up to but not including the section on SVGs
* Read - [Javascript 101](http://learn.jquery.com/javascript-101/) up through the section on Functions
* Complete & Upload - the 3 code exercises at the end of [Eloquent JS 2nd Edition Preview Ch.2 - Looping A Triangle, FizzBuzz, & ChessBoard](http://eloquentjavascript.net/2nd_edition/preview/02_program_structure.html)
* Think & Post - idea(s) for Assignment #1
* Additional Readings
  * [JS For Cats](http://jsforcats.com/)
  * [Eloquent Javascript 2nd Edition Preview - Intro, Ch.1, & Ch.2](http://eloquentjavascript.net/2nd_edition/preview/)
  * [Mozilla - JS Guide - Values, Variables, & Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)
  * [Mozilla - A Re-Introduction to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

### CLASS 3 (07/15): Making Things Happen On The Page

##### Discussion - Class 2 Homework

##### Workshop - Javascript + jQuery
* Loops
* Functions
* Selectors
* Events
* [AJAX with jQuery](http://learn.jquery.com/ajax/)
* References
  * [Events and Listeners in Javascript](http://idratherbewriting.com/2013/02/04/events-and-listeners-javascript/)
  * [How jQuery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)

##### Exercise - WikiSearch
* [WikiSearch API](http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search)
* [WikiSearch Examples](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch)

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
  * [A Basic Intro to the jQuery Object](http://www.smashingmagazine.com/2014/05/29/mystery-jquery-object-syntax-basic-introduction)

### CLASS 4 (07/17): Structuring Your App

##### Discussion - Class 3 Homework

##### Workshop - Objects and Arrays in Javascript
* Understanding Objects and their Prototype
* Creating Our Own Objects
* Using Arrays to store data
* [Local Web Server](http://chimera.labs.oreilly.com/books/1230000000345/ch04.html#_setting_up_a_web_server)
* NY Times + Instagram API Mashup
  * [InstaTimes Example 1](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%201)
  * [InstaTimes Example 2](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%202)
  * [InstaTimes Example 3](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%203)

##### Homework
* DUE - Assignment #1
* Watch - [The Definitive Guide to Object-Oriented Javascript (27 min)](http://www.youtube.com/watch?v=PMfcsYzj-9M) (Note - we will subscribe to the "Classical" pattern in class)
* Read - [Getting Cozy with Underscore JS](http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/)
* Read - [An Undesrcore Templates Primer](http://headspringlabs.com/blog/an-underscore-templates-primer/)
* Additional Reading
  * [What Is 'this' in Javascript](http://www.sitepoint.com/what-is-this-in-javascript/)

### CLASS 5 (07/22): Assignment #1 DUE + Dealing with Data

##### Presentations - Assignment #1

##### Data Organization & Management
* Manipulating Strings
  * [MDN - String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype#Properties)
  * Regular Expressions
    * [MDN - Regular Expression Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    * [Regular Expression Cheat Sheet](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/)
    * [Rubular](http://rubular.com/) & [Scriptular](http://scriptular.com/) - web-based regular expression editors
    * [Stack Overflow - Don't Parse HTML with RegEx](http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags)
* [Basic Underscore](https://github.com/craigprotzel/Mashups/tree/master/Basic_Underscore)
* Templates with Underscore
* [Sunlight Foundation API](http://sunlightfoundation.com/api/)
* WhatsUpCongress Example - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/WhatsUpCongress.zip)
* Managing Asynchronicity
  * [Mulitple Simultnaeous AJAX Requests In jQuery](http://css-tricks.com/multiple-simultaneous-ajax-requests-one-callback-jquery/)

##### Discussion - Assignment #2 Due Week 8 Class (07/31)
* Create a single web page experience that leverages data from at least one public api and incorporates the use of at least one "interaction" library (i.e. D3, Paper, Popcorn, etc.)

##### Homework
* Play - with Underscore Templates, add a tempalte to Assignment #1
* Read - [Ch.3 SVGs + Ch.4-6 of Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/index.html)
* Review - [PaperJS](http://paperjs.org/) library

### CLASS 6 (07/24): Drawing on the Page

##### Graphs on Graphs on Graphs
* [D3JS](http://d3js.org/)
* [Sunlight Labs - Congress Example](https://github.com/craigprotzel/Mashups/tree/master/D3_Congress) - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/D3_Congress_jsd.zip)

##### Other Graph Libraries
  * [Google Charts](https://developers.google.com/chart/)
  * [ChartJS](http://www.chartjs.org/)

##### A Blank Canvas 
* [Canvas vs SVG - How to Choose the Right Format](http://www.sitepoint.com/canvas-vs-svg-how-to-choose/)
* [Mozilla - Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial)
* [Dive Into HTML5 - Let's Call It A Draw(ing) Surface](http://diveintohtml5.info/canvas.html)
* [HTML5 Canvas Cheat Sheet](http://www.nihilogic.dk/labs/canvas_sheet/HTML5_Canvas_Cheat_Sheet.pdf)
* [CreativeJS - Request Animation Frame](http://creativejs.com/resources/requestanimationframe/)
* [Using Request Animation Frame](http://css-tricks.com/using-requestanimationframe/)

##### Other Animation Libraries
* [RafaelJS](http://raphaeljs.com/)
* [P5](https://github.com/lmccart/p5.js)
* [PaperJS vs ProcessingJS vs RafaelJS](http://coding.smashingmagazine.com/2012/02/22/web-drawing-throwdown-paper-processing-raphael/) + [Comparison Examples](http://zgrossbart.github.io/3gears/)

##### Homework
* Play - with an Animation Library
* Review - the [Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/) and [PopcornJS](http://popcornjs.org/) Video Library
* Work on Assignnment #2

### CLASS 7 (07/29): Moving Pictures & Sound

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

### Class 8 (07/31): Assignment #2 DUE + Intro to the Server

##### Presentations - Assignment #2

##### Intro to the Server
* Install [NodeJS](http://nodejs.org/)
* [Express Framework](http://expressjs.com/)
* Code Examples - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/Server_Node_Express.zip)

##### Discussion - Final Project Due Class 12 (08/14)
* Create a single web page experience that combines data from at least one public web API and data stored in your own databse. Your final project MUST be uploaded to the web before class and it MUST incorporate each of the following elements:
  * a public web API as a data source
  * a client-side js library other than jQuery
  * server-side code (i.e. Node-Express)
  * data-storage (i.e. CouchDB on Cloudant)

##### Homework
* Read - Evan Hahn - [Understanding ExpressJS](http://evanhahn.com/understanding-express/)
* Create - a basic Express app to use for your final
* Additional Reading
  * [The Basics of Express Routes](http://flippinawesome.org/2014/04/07/the-basics-of-express-routes/)
* Prepare - 2 Final Project Proposals to share with the class

### Class 9 (08/05): The Server & Storage 

##### Final Project Proposals

##### Creating your own API
* Dynamic Routes    
* Main Page, Input Page, Data Page

##### Storage with CouchDB
* Code Examples - [DOWNLOAD](https://dl.dropboxusercontent.com/u/9648298/CouchDB.zip)
* [CouchDB](http://couchdb.apache.org/)
* [Couch DB - The Definitive Guide](http://guide.couchdb.org/editions/1/en/index.html)
* [Cloudant](https://cloudant.com)

##### Homework
* Work - on Final Project
* Create - an Express-CouchDB (Cloudant) version of last week's homework

### Class 10 (08/07): The Server & Storage Continued

##### Final Project Updates

##### More Storage

##### Optional: Open Authentication (OAuth)
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

##### Homework
* Work - on Final Project
* Download & Install - [Git](http://git-scm.com/downloads)
* Read - [Introdcution to Git](http://skli.se/2012/09/22/introduction-to-git/) by Steve Klise 
* Additional
  * Read - [Git Workflow for Beginners](http://skli.se/2012/10/07/git-workflow-beginner/)
  * Try - [Interactive Git Tutorial from Gthub](http://try.github.io/levels/1/challenges/1)

### Class 11 (08/12): 

##### Working with Git

##### How to Deploy
* Heroku
  * [Getting Started with Heroku](https://devcenter.heroku.com/articles/quickstart) & [Heroku Toolbelt](https://toolbelt.heroku.com/)
  * Corey Forsyth - [Deploying Node App to Heroku](https://vimeo.com/91210794)
  * [Getting Started with NodeJS on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
* [Mashups Sepcific Tutorial](https://github.com/craigprotzel/Mashups/tree/master/Heroku_Node_Deploy)

##### Final Project Workshop

##### Homework
* DUE - Final Project

### Class 12 (08/14): Final Presentations

##### Final Presentations

##### Course Evaluations

##### Course Review

Helpful Links
------------------

#### General Web
* [Mozilla Web Tutorials](https://developer.mozilla.org/en-US/docs/Web/Tutorials)
* [Sublime Linter](http://www.hongkiat.com/blog/identify-code-errors-sublime-linter/)
* [JS Fiddle](http://jsfiddle.net/) - web-based tool to share code
* [JS Bin](http://jsbin.com/) - another web-based tool to share code
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
* [SugarJS](http://sugarjs.com/) - javascript sweetened
* [SuperheroJS](http://superherojs.com/) - a collection of the best articles, videos, and presentations on javascript
* [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
* [JS IS Sexy - 16 Concepts JS Professionals Must Know Well](http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/)
* [A Drip of JS - Archive](http://designpepper.com/js-drip-archive)
* [45 Useful JS Tips, Tricks, & Best Practices](http://flippinawesome.org/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices)
* [Mozilla - JS Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [Lear X in Y Minutes - Javascript](http://learnxinyminutes.com/docs/javascript/)
* [Javascript Garden](http://bonsaiden.github.io/JavaScript-Garden/) - a collection of documentation about the most quirky parts of JS
* [Javascript - Function Declaration Ambiguity](http://www.dustindiaz.com/javascript-function-declaration-ambiguity/)
* [Drag and Drop Tutorial - Native HTML5](http://www.html5rocks.com/en/tutorials/dnd/basics/#toc-dragging-events)


#### APIs
* ["A Brief Introduction to REST"](http://www.infoq.com/articles/rest-introduction)
* ["A REST Tutorial"](http://rest.elkstein.org/)
* [Stack Overflow - What is JSONP All About?](http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about)
* [CORS - Cross Origin Resource Sharing](http://enable-cors.org/)
* [HEX Codes for URLs](http://www.obkb.com/dcljr/charstxt.html)
