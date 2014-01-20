Mashups: Creating with Web APIs
===============================

NYU ITP Spring 2014  
Class: Thursdays 6:30 - 9pm  
Instructor: Craig Protzel  
Email: craig.protzel@nyu.edu  
Office Hours: TBD

Class Email List  
Class Blog List  

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
**25%**  Homework Exercises    
**25%**  Assignments #1 & #2  
**25%**  Final Project

Syllabus
--------

### Week 1 (01/30) - The Web, APIs, & Data

##### Class Intro
* [StoryScramble](http://storyscramble.com)
* [VimeoLabs](http://vimeolabs.com)
* [Dynamic Web Development by John Schimmel](http://itpwebclass.herokuapp.com/)
* [Mashups - Remixing the Web by Dan Aminzade](http://webremix.org/syllabus.php)

##### Review Course Info & Syllabus

##### Student Intros

##### Lecture: The Web, APIs, & Data

* Lecture Slides
* References
  * [Programmable Web](http://programmableweb.com)
  * [Codecaademy API Tutorials](http://www.codecademy.com/tracks/apis)
  * [Temboo](https://www.temboo.com/)
  * [IFTT Recipes](https://ifttt.com/recipes)
  * [HealthCare.gov for Developers](https://www.healthcare.gov/developers/)
  * [OpenWeatherMap API](http://openweathermap.org/API)
  * [HowManyPeopleAreInSpaceRightNow?](http://www.howmanypeopleareinspacerightnow.com/)
  * [Open-Notify.org](http://open-notify.org/)
  * [Sunlight Foundation Labs - APIs](http://sunlightfoundation.com/api/)
  * [New Yorker - A Month of CitiBike Data](http://www.newyorker.com/sandbox/business/citi-bike.html)
  
##### Homework
* Sign Up - for class email list [ITP Mashups Google Group](https://groups.google.com/forum/#!forum/itp-mashups)
* Add -  your blog URL to the [class blog list](https://docs.google.com/spreadsheet/ccc?key=0AhUAnC0yr2QRdFp6alNMeVJleTZERnlYX2VDTGVjVkE&usp=sharing)
* Read - [Ch.3 of Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html) up to but not including the section on Javascript
* Download - a text editor
* Donwload - a JSON formatter for the browser
* Explore - [ProgrammableWeb](http://programmableweb.com)
* Find, Post, & Describe - a url that returns JSON data from an Open API
* Creat & Upload - a single web page (html file) that displays (some of) the data you found, feel free to copy and paste your data into the DOM, no need to programatically connect your page to the data
* Additional Readings
  * [WebPlatform.org - How Does The Internet Work](http://docs.webplatform.org/wiki/concepts/internet_and_web/how_does_the_internet_work )
  * [Mozilla - Intro to HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction)
  * [WebPlatform.org - The Basics of HTML](http://docs.webplatform.org/wiki/guides/the_basics_of_html)
  * [WebPlatform.org - Getting Started with CSS](http://docs.webplatform.org/wiki/guides/getting_started_with_css)
  * [Mozilla - Getting Started with CSS Tutorials Parts 1-14](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started)
  * [API 101](http://apievangelist.com/index.html)
  * [The Future of API Design by Daniel Jacobson](http://thenextweb.com/dd/2013/12/17/future-api-design-orchestration-layer)

### Week 2 (02/06) -  HTML, CSS, & Client-Side Templates

##### Discussion - Week 1 Homework

##### Lecture - HTML & CSS

##### Exercise - Wikipedia Search API  
* [WikiSearch Example 1](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%201)
* [WikiSearch Example 2](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%202)
* [WikiSearch Example 3](https://github.com/craigprotzel/Mashups/tree/master/WikiSearch/Example%203)

##### Homework
* Read - [Javascript section of Ch.3 - Interactive Data Viz for the Web by Scott Murray](http://chimera.labs.oreilly.com/books/1230000000345/ch03.html#_javascript) up to but not including the section on SVGs
* Read - [Javascript 101](http://learn.jquery.com/javascript-101/) up to but not including the section on Functions
* Additional Readings
  * [JS For Cats](http://jsforcats.com/)
  * [Mozilla - JS Guide - Values, Variables, & Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)

### Week 3 (02/13): Intro to Javascript

##### Discussion - Week 2 Homework

##### Lecture - Intro to Javascript

##### Exercise - NY Times + Instagram API Mashup
* [InstaTimes Example 1](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%201)
* [InstaTimes Example 2](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%202)
* [InstaTimes Example 3](https://github.com/craigprotzel/Mashups/tree/master/InstaTimes/Example%203)

##### Homework
* Read - [The rest of Javascript 101](http://learn.jquery.com/javascript-101/) starting with the section on Functions and up to and including the section on Closures
* Read - [JQuery - Introducing Events](http://learn.jquery.com/events/introduction-to-events/)
* Read - [An Undesrcore Templates Primer](http://headspringlabs.com/blog/an-underscore-templates-primer/)


### Week 4 (02/20): More Javascript + Guest Talk by Josh Begley 
API - Google Maps

##### Homework
* DUE - Assignment #1
* Read - [Getting Cozy with Underscore JS](http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/)


### Week 5 (02/27): Assignment #1 Due + Guest Talk by Martin Bravo 

##### Assignment #1 Presentations

##### Martin Bravo - "Going From 0 to 1" 
* References

##### Homework
* Read - ["If Hemingway Wrote Javascript" by Angus Croll](http://byfat.xxx/if-hemingway-wrote-javascript)


### Week 6 (03/06): Graphs on Graphs on Graphs + Guest Talk by Jeremy Scott Diamond
API - Sunlight Foundation

##### Jeremy Scott Diamond - "D3" 
* References

### Week 7 (03/13): A Blank Canvas - PaperJS & P5
API - Xively

### Week 8 (03/27):  - Video & PopcornJS   
API - Youtube & Vimeo

### Week 9 (04/03): Assignment #2 Due + Guest Talk by Steve Klise

##### Assignment #2 Presentations

##### Steve Klise - "TBD" 
* References

### Week 10 (04/10): The Other Side - Server & Routes
API - Fitbit

### Week 11 (04/17): Re-Introduce Ourselves - OAuth & Passport + Final Project Proposal
API - Twitter

### Week 12 (04/24): Running Wild - Heroku + Guest Talk by Miguel Bermudez

##### Miguel Bermudez - "MVC" 
* References

### Week 13 (05/01): Final Project Workshop & User Testing

### Week 14 (05/08): FINAL DUE

##### Final Presentations

Helpful Links
------------------
#### General Web  
* Mozilla - [Web Tutorials](https://developer.mozilla.org/en-US/docs/Web/Tutorials)
* Share Some Code  - [JS Fiddle](http://jsfiddle.net/)
* [11 Phases of a Web Developer's Career](http://net.tutsplus.com/articles/general/the-11-phases-of-a-web-developers-career-as-illustrated-by-memes/)

#### HTML
* Create a Favicon - [Favicon Generator](http://www.favicon.cc/)

#### CSS
* Set Page Background to a Full Image - [CSS Tricks](http://css-tricks.com/perfect-full-page-background-image/)
  
#### JS  
* [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript#types)
* [A Drip of JS - Archive](http://designpepper.com/js-drip-archive)  
* [45 Useful JS Tips, Tricks, & Best Practices](http://flippinawesome.org/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices/?utm_source=javascriptweekly&utm_medium=email)

#### APIs



