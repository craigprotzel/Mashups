# Client-side Notepad built with CouchDB

## Getting Started

1. Set up an account with cloudant.com. Set the corresponding variable in `clientside_notepad.js`.
2. Create a database on cloudant.com. Set the corresponding variable in `clientside_notepad.js`.
3. Click the "Doc" dropdown when viewing your new database. And choose the Permissions Option
4. Click "Generate API Key" and take the KEY and PASSWORD values and assign the corresponding variables in `clientside_notepad.js`. And then, from the permissions page in Cloudant, check the **Reader** and **Writer** boxes for the KEY you just created.
5. Open Terminal and run the following command to enable CORS to your Cloudant Database (replace instances of 'USERNAME' with your username):

    ```
    curl -i -u USERNAME -X PUT https://USERNAME.cloudant.com/_api/v2/user/config/cors -X PUT -H content-type:application/json -d '{"enable_cors":true,"allow_credentials":true,"origins":["*"]}'
    ```

    Enter your password for Cloudant when prompted.
6. Run `python -m SimpleHTTPServer` from the folder where this file is. Visit http://localhost:8000 and this small app should be running.

## Things to Note

- The KEY and PASSWORD from Cloudant are being saved in a really bad way here. This is not recommended for anything you put on the internet.
- We are fetching every single record stored in the CouchDB database. That means if a user knows how to dig through the Web Console they can see stuff all of the info in your database.

The above points are good reasons to write a server side app to hide stuff from the user.

## What's next?

Here's a list of things you could do to make this example more interesting without making it too complicated.

- Render Markdown for the notes using https://github.com/chjj/marked
- Add more fields to the forms.
- Change the order that notes are shown.
- Find a better way to escape notes.
- Check that fields are filled before submitting.
- Format the dates in a more readable way.