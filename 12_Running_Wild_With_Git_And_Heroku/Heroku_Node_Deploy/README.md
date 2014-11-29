Mashups: How to Deploy to Heroku
--------------------------------

#### Step 0 - The App
* Create a Node-Express App that runs locally on your machine. If you don't have one, you can use this [example app](https://github.com/craigprotzel/Mashups/tree/master/09_Back_To_The_Server/express_03_with_public_folder)
* Make sure your application runs locally without any errors. Check all the routes, check all the clicks, check all the console statements. If there are issues locally, there will be issues when your application tries to run on Heroku.

#### Step 1 - The App Config
* In the app.js file add an "environment" variable called `port`    
	```
	var port = process.env.PORT || 3000;
	```    
	This will allow Heroku to set their own port value. For our application, if no port value is set by the environment, the default port value will be 3000.  
* Next, update the `app.listen` method to have `port` as its argument.  
	```
	app.listen(process.env.PORT || 3000);
	```    
	Also, if you have a console statement that explicitly prints out the port number, you should update that as well to use the new port variable.  
	```
	console.log('Express started on port ' + port);
	```    
* Create a file named `Procfile` in your applications's main directory. In this file, add a line of code that will instruct Heroku how to run your application. The line should start with `web: node` and then be folowed by the name of your application's main javascript file. In this example, the file I call to launch my application is `app.js`. So, I need to add:  
	```
	web: node app.js
	```     
	Again, this is basically the command we type in the Terminal to run our application and this will instruct Heroku how to properly run our application. 
* Check the `package.json` to make sure it is complete and accurate. Be careful, the `name` value in the `package.json` should not have any spaces!
* Create a file named `.gitignore` in the app's main directory and add this line of code to the file
	```
	node_modules
	```    
	This will exclude the node_modules folder from your git repository. Note, the `.gitgnore` file may not appear in your finder directory. If you are on a Mac running OSX, you may also want to add `.DS_Store` on another line to your `.gitignore` file. 
* Lastly, if you are linking to any **external** client-side javascript or css libraries, such as jquery, underscore or google fonts, make sure the src value has `https`. Heroku may yell at you if they are not. These are files that are not hosted within your own application.  	

#### Step 2 - The Git Repo
* Install [git](http://git-scm.com/downloads) (skip if already installed)
* In Terminal, set up your `git config vars` - you only have to do this once (skip if already set up)

	```
	git config --global user.name "YOUR_FULL_NAME"  
	git config --global user.email "YOUR_EMAIL_ADDRESS"
	```  
* Navigate (`cd`) to your app's main directory in Terminal
* Create a git repository and commit your app by executing the following commands in Terminal

	```
	git init  
	git add -A  
	git commit -m "First commit"
	```  
* At anytime it is helpful to execute `git status` or `git status -s` for a "short-hand" version of the state of the git repository.
* If you are unsure of what is going to be added to the git repository when you run `git add -A`, you can always type `git add -n .` to do a test run of what will occur. 
* If you are only interested in adding a specific file to the git repository, you can type `git add file-name` to add only a specific file
* Also, when you first run `git add -A`, you should NOT see anything that has been declared in your `.gitignore` file.

#### Step 3 - The Heroku Site
* Create an account on [Heroku](https://heroku.com)
* Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)
* In Terminal in your app's main directory, first login to Heroku by typing 

	```
	heroku login
	```  
	You will be asked for your username and password. When typing your password, nothing will appear.
* **STOP** Assuming you have never used Heroku before, you should be prompted to either (1) add an existing SSH key, which you might already have on your computer especially if you are a gihtub user or (2) generate a new one. We are going to type `N` and deploy via HTTP rather than ssh. (If you would like to use SSH, see the ALT steps listed at the bottom of the tutorial.)
* You are now ready to create an empty Heroku app repo by typing:

  ```
	heroku create my-app-name --http-git
	```  
	* Note, what you enter for `my-app-name` will be part of your app's url. So, if I enter `heroku create mysuperawesomeapp --http-git`, the url Heroku assigns to my app will be `http://mysuperawesomeapp.herokuapp.com`
* After creating the app, type `git remote` to confirm the app was created and has been added as a remote repository. It should list `heroku` as a remote. You can also check your heroku account's "Apps" page to confirm the app was created and added to your account.
* The last step here is to push (i.e send) the app files to heroku by executing the following command

	```
	git push heroku master
	```  
* Once the push is complete, your site should be live at `https://your-app-name.herokuapp.com/`
This url will also print out to the Terminal after your push is complete
* If you would like your app to use a "custom domain", meaning your own url, Heroku's [Custom Domains Page](https://devcenter.heroku.com/articles/custom-domains) will help step you through doing this.

#### Step 4 - The Updates
* To update you app at any time, you will need to first (1) update your local git repository and then second (2) push the updated files to Heroku. This can be done by executing the following commands in Terminal in your app's directory

	```
	git status -s 
	git add -A 
	git status -s 
	git commit -m "Updated the app"`
	git push heroku master
	```  
* For the `git add` step you can also add files individually by executing

	```
	git add file-name
	```  
* If you navigate to your app, which you can do by typing `heroku open` in the Terminal window, you should see your updated application.

#### ALT - SSH Deploy	
* Assuming you have never used Heroku before, you should be prompted to either (1) add an existing SSH key, which you might already have on your computer especially if you are a gihtub user or (2) generate a new one. We are going to type `Y` and deploy via HTTP rather than ssh. 
*  If you already have one, feel free to use that one. If you don't have an SSH key, then you should generate a new one.
* Note, at any time you can create a new key on your machine, add a new key to Heroku, remove an existing key from Heroku, and/or clear all of your existing keys on Heroku. For reference, Heroku's ["Manage Your SSH Keys"](https://devcenter.heroku.com/articles/keys) page provides helpful information. Also, the Heroku specific command line prompts can help you navigate Heroku SSH key issues 
* Extra tip - to check for existing SSH keys on your computer, type `ls -al ~/.ssh`. If you have files named either `id_rsa.pub` or `id_dsa.pub`, then you do have a key.
* Once you are logged in and you have an SSH key added to your heroku account, you are ready to create an empty Heroku app repo by typing

	 ```
	heroku create my-app-name
	```  
* Note, what you enter for `my-app-name` will be part of your app's url. So, if I enter `heroku create mysuperawesomeapp`, the url Heroku assigns to my app will be `http://mysuperawesomeapp.herokuapp.com`
