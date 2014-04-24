How to Deploy to Heroku for Mashups Class
------------------

Note: These following steps are for Mac users who have node installed on their machines.

##### Step 1 - The App
* Create a Node-Express App - if you don't have one, you can use this [example app](https://github.com/craigprotzel/Mashups/tree/master/Server_Node_Express/express_with_public_folder)
* Update the `app.listen` method to include an `env.PORT` var  
  ```
  app.listen(process.env.PORT || 3000)
  ```
* Create a file named `Procfile` in the app directory
  * Add this line of code to the file `web: node app.js`
* Check the package.json to make sure it is complete
* Create a file named `.gitignore` in the app directory
  * Add this line of code to the file `node_modules`

##### Step 2 - The Git Repo
* Install [git](http://git-scm.com/downloads)
* In Terminal, set up your git config vars - you only have to do this once
  * ```
    $ git config --global user.name "YOUR_FULL_NAME"
    $ git config --global user.email "YOUR_EMAIL_ADDRESS"
    ```
* Navigate (cd) to your app directory in Terminal
* Create a git repository and commit your app by executing the following commands
  1. `git init`
  2. `git add .`
  3. `git commit -m"First commit"`
  * At anytime it is helpful to execute `git status -s`

##### Step 3 - The Heroku Site
* Create an account on [Heroku](https://heroku.com)
* Install [Heroku Toolbelt](https://toolbelt.heroku.com/)
* In Terminal, set up a heroku app and Execute the following commands in Terminal
  1. `heroku login`
  2. `heroku create my-app-name`
  3. test by executing `git remote` and by checking your heroku account's "Apps" page
  4. `git push heroku master`

##### Bonus - The Updates
* To update you app, execute the following commands
  1. `git status -s` to see what files have changed 
  2. `git add .`  to stage all updated files or `git add file-name` to stage individual files
  3. `git status -s` to see what was staged
  4. `git commit -m"Updated the app"`
  5. `git status -s` again to double check
  6. `git push heroku master`


