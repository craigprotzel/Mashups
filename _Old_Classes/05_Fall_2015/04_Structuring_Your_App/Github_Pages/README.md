How To Deploy To Github Pages
-----------------------------

This is a quick step-by-step guide on how to deploy to Github Pages for Mashups students. This is not a comprehensive git or Github tutorial. The objective is solely to get your local single page application deployed to the web via Github Pages. 

### Step 1: Test Your Application 
* Make sure your application runs locally **WITHOUT ANY ERRORS**. Test this by running a localhost. If you are unfamiliar with what a localhost is, read through this [tutorial](https://github.com/craigprotzel/Mashups/tree/master/05_Dealing_With_Data/Local_Server) and/or through read this [explanation](http://chimera.labs.oreilly.com/books/1230000000345/ch04.html#_setting_up_a_web_server) by Scott Murrray. 
* If the application is logging any errors, resolve those before moving forward.

### Step 2: Check The HTML File Name
* For your application to be served correctly, you need the primary html page to be named `index.html

### Step 3: Create A git Repository
* Make sure you have [git](http://git-scm.com/downloads) installed on your machine.
	* If you are new to git (and Github), please read this tutorial by [Steve Klise - Introdcution to Git](http://skli.se/2012/09/22/introduction-to-git/)
* Navigate to your app directory in Terminal. You can do this by typing `cd` into the command prompt then a space and then drag 'n drop the folder that contains your application files. Press enter and you should cd (change directory) to that folder. Double check that you are in the correct folder by typing `pwd` into the command prompt and press enter. The path to whichever directory you are in will log out. Make sure it is correct. 
* Create a git repository and commit your app by executing the following commands in Terminal

	```
	git init  
	git add -A  
	git commit -m "First commit"
	```
	* At anytime it is helpful to execute `git status` or `git status -s` for a "short" version of what the state of the git repository is.
	* If you are unsure of what is going to be added to the git repository when you run `git add .`, you can always type `git add -n .` to do a test run of what will occur. 
	* If you are only interested in adding a specific file to the repository you can type `git add file-name` to add only a specific file

### Step 4: Create A Github Repository
* You will need an account on [Github](https://github.com/)
* Follow the ['Create A New Repository on Github'](https://help.github.com/articles/create-a-repo) steps provided by Github's Help pages. Note, **DO NOT MAKE A README.md** file when making a new repository. We can do this ourselves at a later time.
* Once you create a repository, you want to follow the second set of instructions that says **'...or push an existing repository from the command line'**. And enter the provided commands

	```
	git remote add origin git@github.com:your-user-name-goes-here/your-reposotry-name-goes-here.git
	git push -u origin master
	```
* After you run these commands, check your repository web page on Github. Your files should be there!

###Step 5: Create A gh-pages Branch

* Your code files are now on Github, but the application is not running on the web just yet. We still need to put them in a separate git branch named 'gh-pages' 
* On your computer, to see a branch in your git repository, you can type `git branch`. You should only see one branch `master`
* To make a new branch named 'gh-pages', type    
	```
	git branch gh-pages
	```
* Now type `git branch` and you should see both 'master' and 'gh-pages'. The branch with the asterisk is the one you are currently working on. To switch to the gh-pages branch, type    
	```
	git checkout gh-pages
	```
* If you type `git branch` again, you should now see the asterisk next to 'gh-pages'
* All we need to do now is to send the 'gh-branch' to Github. To do this, type    
	```
	git push origin gh-pages
	```
* Once the repository has been sent, check your Github repository to confirm this new branch has been sent. On your repository page, there is a button just above the files that says 'branch:master'. If you click on that button, a dropdown menu should appear that will display all the branches that exist in your repository. Yours should show both 'master' and 'gh-pages'. If so, you are good to go! 

###Step 6: Check Your Site
* Now you just need to give Github a few minutes to work it's magic and properly serve your files. Your application should be running at      
	```
	your-github-user-name.github.io/your-repository-name
	```

###Step 7: Updating Your App
* In your Terminal window, type `git branch` to see what branch you are in. Assuming you have not changed branches since you last pushed your files to Github, you should switch back into your master branch. You can do this by typing  
	```
	git checkout master
	```
You will be back in your master branch and can continue your normal workflow. 
* If/when you make changes to your files and want to push your updated code to Github, you should first make a normal commit to your repo and push the changes to Github    
	```
	git add -A
	git commit -m "Made some changes"
	git push origin master
	```
* Then, once your changes have been sent to Github, update your gh-pages branch **locally on your computer**     
	```
	git checkout gh-pages
	git merge master
	```
* Send the updated gh-pages branch to github    
	```
	git push gh-pages master 
	```
* Switch back into the master branch    	
	```
	git checkout master
	```
* Rinse and Repeat!
