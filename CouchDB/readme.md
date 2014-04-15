# CouchDB with Cloudant, jQuery and Express

## Sign up for Cloudant

1. Set up an account with cloudant.com.
2. Create a database on cloudant.com.
3. Open Terminal and run the following command to enable CORS to your Cloudant Database (replace instances of 'USERNAME' with your username):

    ```
    curl -i -u USERNAME -X PUT https://USERNAME.cloudant.com/_api/v2/user/config/cors -X PUT -H content-type:application/json -d '{"enable_cors":true,"allow_credentials":true,"origins":["*"]}'
    ```

    Enter your password for Cloudant when prompted.

## jQuery Documentation

In these examples we use `$.ajax()` which is a great function with tons of parameters and options. The documentation for this function is [here](http://api.jquery.com/jQuery.ajax/). And the notation used with the `.done()` function calls is describe in [this section](http://api.jquery.com/jQuery.ajax/#jqXHR).

In order to submit the form, we are using [`.submit()`](http://api.jquery.com/submit/).

## Underscore

Another library we are using is Underscore. The function of most importances, used to pick from all of the rows from Cloudant is [`.filter()`](http://underscorejs.org/#filter).

## Request

In the server example we use the [Request](https://github.com/mikeal/request) node module to make HTTP requests to Cloudant.