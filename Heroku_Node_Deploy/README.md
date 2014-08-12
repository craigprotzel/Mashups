How to Deploy to Heroku for Mashups Class
------------------

Note: The following steps are spcifically for Mac users who have node installed on their machines.

#### Step 1 - The App
* Create a Node-Express App - if you don't have one, you can use this [example app](https://github.com/craigprotzel/Mashups/tree/master/Server_Node_Express/express_with_public_folder)
* In the app.js file update the `app.listen` method to include an `env.PORT` variable  
	```
	app.listen(process.env.PORT || 3000);
	```
* Create a file named `Procfile` in the app directory. Add this line of code to the file
	```
	web: node app.js
	```
* Check the `package.json` to make sure it is complete
* Create a file named `.gitignore` in the app directory and add this line of code to the file
	```
	node_modules
	```
	* Note, the `.gitgnore` file will not appear in your directory

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
	git commit -m "First commit"
	```
* At anytime it is helpful to execute `git status` or `git status -s` for a "short" version of what the state of the git repository is.
* If you are unsure of what is going to be added to the git repository when you run `git add .`, you can always type `git add -n .` to do a test run of what will occur. 
* If you are only interested in adding a specific file to the repository you can type `git add file-name` to add only a specific file

#### Step 3 - The Heroku Site
* Create an account on [Heroku](https://heroku.com)
* Install [Heroku Toolbelt](https://toolbelt.heroku.com/)
* In Terminal in your app's directory, first login to Heroku by typing 

	```
	heroku login
	```
  * Assuming you have never used Heroku before, you should be prompted to either (1) add an existing SSH key, which you might already have on your computer especially if you are a gihtub user or (2) generate a new one. If you already have one, feel free to use that one. If you don't have an SSH key, then you should generate a new one.
  * Note, at any time you can create a new key on your machine, add a new key to Heroku, remove an existing key from Heroku, and/or clear all of your existing keys on Heokru. For reference, Heroku's ["Manage Your SSH Keys"](https://devcenter.heroku.com/articles/keys) page provides helpful information and the Heroku specific command line prompts to deal with Heroku SSH key issues 
  * Extra tip - to check for existing SSH keys on your computer, type `ls -al ~/.ssh`. If you have files named either `id_rsa.pub` or `id_dsa.pub`, then you do have a key.

* Once you are logged in and you have an SSH key added to your heroku account, you are ready to create an empty Heroku app repo by typing

  ```
	heroku create MY-APP-NAME
	```
	* Note, what you enter for `MY-APP-NAME` will be part of your app's url. So, if I enter `heroku create mysuperawesomeapp`, the url Heroku assigns to my app will be `http://mysuperawesomeapp.herokuapp.com`
* After creating the app, type `git remote` to confirm the app was created and added as a remote repo. It should list `heroku` as a remote. You can also check your heroku account's "Apps" page to confirm the app was created and added to your account.
* The last step here is to push (i.e send) the app files to heroku by executing the following command

	```
	git push heroku master
	```
* Once the push is complete, your site should be live at `http://YOUR-APP-NAME.herokuapp.com/`
This url will also print out to the Terminal after your push is complete

#### Step 4 - The Updates
* To update you app at any time, you will need to update your local git repository and then push the updated files to Heroku. This can be done by executing the following commands in Terminal in your app's directory

	```
	git status -s 
	git add . 
	git status -s 
	git commit -m "Updated the app"`
	git push heroku master
	```
* For the `git add` step you can also add files individually by executing

	```
	git add file-name
	```

