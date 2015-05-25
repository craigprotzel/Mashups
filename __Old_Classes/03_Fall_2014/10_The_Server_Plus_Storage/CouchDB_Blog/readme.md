CouchDB code examples and documentation written by Steve Klise 
[github.com/sklise](https://github.com/sklise)
  
# CouchDB with Cloudant, jQuery and Express

## Sign up for Cloudant

1. Set up an account with cloudant.com.
2. Create a database on cloudant.com.

## jQuery Documentation

In these examples we use `$.ajax()` which is a great function with tons of parameters and options. The documentation for this function is [here](http://api.jquery.com/jQuery.ajax/). In the _alt.js files, the notation used with the `.done()` function calls is described in [this section](http://api.jquery.com/jQuery.ajax/#jqXHR).

In order to submit the form, we are using [`.submit()`](http://api.jquery.com/submit/).

## Request

In the server example we use the [Request](https://github.com/mikeal/request) node module to make HTTP requests to Cloudant.