# CouchDB with Cloudant, jQuery and Express

## Sign up for Cloudant

1. Set up an account with cloudant.com.
2. Create a database on cloudant.com.
3. Open Terminal and run the following command to enable CORS to your Cloudant Database (replace instances of 'USERNAME' with your username):

    ```
    curl -i -u USERNAME -X PUT https://USERNAME.cloudant.com/_api/v2/user/config/cors -X PUT -H content-type:application/json -d '{"enable_cors":true,"allow_credentials":true,"origins":["*"]}'
    ```

    Enter your password for Cloudant when prompted.
