# Client-side Notepad built with CouchDB

## Getting Started

1. Sign in to Cloudant and create a new database, save the name of the new database in `public/clientside_notepad.js` as the value for `CLOUDANT_DATABASE`.
2. In `public/clientside_notepad.js` at the top, set the values of the Cloudant variables `CLOUDANT_USERNAME`,
3. Click the "Doc" dropdown when viewing your new database. And choose the Permissions Option
4. Click "Generate API Key" and take the KEY and PASSWORD values and save them in `public/clientside_notepad.js` as `CLOUDANT_KEY` and `CLOUDANT_PASSWORD`.. **This is your only chance to see the Password**. And then, from the permissions page in Cloudant, check the **Reader** and **Writer** boxes for the KEY you just created.
5. In Terminal, `cd` to the "client" folder in this repository and run `npm install`.
6. Be sure there were no errors with the previous step. If not, then run: `npm run start` or `node app.js`
7. Now visit [http://localhost:3000/](http://localhost:3000/) and you've got a notepad synced to a couchdb account.

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
