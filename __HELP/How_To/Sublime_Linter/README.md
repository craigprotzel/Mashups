How To Set Up A JS Linter in Sublime Text 3
-------------------------------------------

### Step 0 Install NodeJS
* Go to [NodeJS website](https://nodejs.org)
* Install the "LTS" version

### Step 1 Copy Package Control Code
* Go to [Package Control Installation](https://packagecontrol.io/installation#st3) page
* Follow the "Simple" installation instructions on the left side of the page.
* Copy the code for Sublime Text 3

### Step 2 Install Package Control
* Open Sublime Text 3. If you do not have it installed, please do so now.
* Open the Sublime Text console (View > Show Console).
* Paste in the copied code and press Enter.
* This should install "Package Control". Sublime Text may ask you to restart. Do so if it asks.

### Step 3 Navigate into Package Control
* Assuming you have installed "Package Control" correctly, press "Command-Shift-P" and a drop-down menu will appear. 
* Start typing "Package Control" and select "Package Control: Install Package". 
* Press Enter and the list of available packages should load. Be patient, it may take a moment/minute for them to load.

### Step 4: Initial SublimeLinter Setup
* Once you see a new drop-down menu appear, start typing "SublimeLinter". You should see an option that says "SublimeLinter". The description should say something like "a linter package for sublime text 3...". 
* Select that and press Enter.
* At this point, you have setup SublimeLinter, BUT you **DO NOT** actually have the necessary linter libraries yet! They need to be installed separately. 

### Step 5: Import JSHint Node Package
* Assuming node was installed in Step 0, open the Terminal (for Macs) or a Command Line Prompt (for Windows).
* Copy and paste the following line of code and press enter. 
`
sudo npm install -g jshint
`
* You will be asked for your password. Enter your password and press ok. This will install the javascript hint package to your computer and will allow Sublime to use it.

### Step 6: Install SublimeLinter-jshint
* Go back into Sublime. Press "Command-Shift-P" again. Select  "Package Control: Install Package" again and press Enter. 
* Start typing "SublimeLinter-jshint". Once you find it, press Enter.
* You may need to quit and restart Sublime Text again. 
* Your javascript linter should now be working.

### Step 7: Test the JS Linter
* Open a javascript (.js) file in Sublime Text.
* Try typing some code and see if you get any "error feedback", i.e. dots along the left side when you type. For example, if you type the following line of code:
`
var name = "Mashups"
`
and press save, it should show a dot indicating that you are missing a semicolon at the end of this line. If this happens, it is working and all is well in the universe. If it doesn't happen, double check that you did all the steps above correctly. If it still doesn't work, email me and we try doing the install it together.

### Step 8: Bonus - Show Errors on Save
* Select "Tools" from the nav bar
* select SublimeLinter. Turn on "Show Errors on Save". This will bring up error messages each time you press save as opposed to while you are typing.