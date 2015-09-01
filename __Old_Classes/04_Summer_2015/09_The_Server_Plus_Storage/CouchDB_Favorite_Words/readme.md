#Favorite Words On Couch DB

## Getting Started

0. Sign up for Cloudant
1. Sign in to Cloudant and create a new database, 
2. Save the name of the new database as the value for `CLOUDANT_DATABASE` in app.js.
3. Also in app.js, save your Cloudant username as the value for `CLOUDANT_USERNAME`.
4. Back in Cloudant, when viewing your new database, choose the "Permissions" Option.
5. Click "Generate API Key" and take the KEY and PASSWORD values and save them in app.js as `CLOUDANT_KEY` and `CLOUDANT_PASSWORD`.. **This is your only chance to see the Password**.
6. Then, from the permissions page in Cloudant, check the **Reader** and **Writer** boxes for the KEY you just created.
7. In Terminal, `cd` into this main directory and run `npm install`.
8. Be sure there were no errors with the previous step. If not, then run: `npm run start` or `node app.js`
9. Now visit [http://localhost:3000/](http://localhost:3000/) and your app should be synced to your couchdb on Cloudant!