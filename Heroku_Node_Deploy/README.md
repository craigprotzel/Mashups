How to Deploy to Heroku for Mashups Class
------------------

Note: The following steps are for Mac users who have node installed on their machines.

#### Step 1 - The App
* Create a Node-Express App - if you don't have one, you can use this [example app](https://github.com/craigprotzel/Mashups/tree/master/Server_Node_Express/express_with_public_folder)
* Update the `app.listen` method to include an `env.PORT` var  
  ```
  app.listen(process.env.PORT || 3000)
  ```
* Create a file named `Procfile` in the app directory
  * Add this line of code to the file `web: node app.js`
* Check the `package.json` to make sure it is complete
* Create a file named `.gitignore` in the app directory
  * Add this line of code to the file `node_modules`
  * The .gitgnore file will not appear in your directory

#### Step 2 - The Git Repo
* Install [git](http://git-scm.com/downloads)
* In Terminal, set up your `git config vars` - you only have to do this once

    ```
    git config --global user.name "YOUR_FULL_NAME"  
    git config --global user.email "YOUR_EMAIL_ADDRESS"
    ```
* Navigate (`cd`) to your app directory in Terminal
* Create a git repository and commit your app by executing the following commands in Terminal

  ```
  git init  
  git add .  
  git commit -m"First commit"
  ```
* At anytime it is helpful to execute `git status -s`

#### Step 3 - The Heroku Site
* Create an account on [Heroku](https://heroku.com)
* Install [Heroku Toolbelt](https://toolbelt.heroku.com/)
* In Terminal, set up a heroku app and Execute the following commands

  ```
  heroku login
  heroku create my-app-name
  git push heroku master
  ```
* After creating the app you can  run `git remote` to confirm and check your heroku account's "Apps" page

#### Bonus - The Updates
* To update you app, execute the following commands in Terminal

  ```
  git status -s 
  git add . 
  git status -s 
  git commit -m"Updated the app"`
  git push heroku master
  ```
* For the `git add` step you can also add files individuall by executing

  ```
  git add file-name
  ```
