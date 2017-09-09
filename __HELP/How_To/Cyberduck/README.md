How To Upload Files Via Cyberduck
---------------------------------

This is a quick step-by-step guide on how to upload files to your server sapce via Cyberduck

### Step 1: Open A Connection 
* Double-click the Cyberduck icon. Towards the top left of the panel, you should see a button labeled `Open Connection`. You can also find `Open Connection` in the `File Menu`. Note, if you have connected to the server before, you can try clicking on the `History` button that is looks like a clock, locate your server, and click to connect.

### Step 2: Fill out the Form
* Dropdown Menu: Select `SFTP (SSH File Transfer Protocol)`
* Server: `ps586062.dreamhostps.com` (assuming you are in an NYUAD IM class)
* Port: `22`
* Username: `YOUR-NYU-NETID`
* Password: `YOUR-PASSWORD`
* SSH Private Key: None
* Add to Keychain should be selected
* Click `Connect` (Note, you may see a warning "Unknown host...". Click `Allow`.)

### Step 3: Navigate Into Your Directory
* You should see a few folders. One should be labeled `YOUR-NYU-NETID.nyuad.im`. Double-click into that folder.
* This is where you want to be. You will upload all of your work inside this folder.

### Step 4: Organize Your Files
* When creating a page for the first time, make sure all of the necessary files are in a single folder. 
* Assuming there is one `.html` file in the folder, name it `index.html`.

###Step 5: Upload Your Folder
* In the Cyberduck panel, click on the `Action` button.
* Select `Upload`.
* Navigate to the folder that has all of your files and upload the folder.

###Step 6: Check The Web
* In the browser, go to `your-nyu-netid.nyuad.im/your-folder-name` and you should see your webpage.
* If your .html is not named index.html, but something else like `mypage.html` you can find it at `your-nyu-netid.nyuad.im/your-folder-name/mypage.html`
* The folder and file structure that you see in the Cyberduck panel directly determines the url of your web page.

###Step 7: Update The Page
* To make changes to your page, you should edit your files locally on your own machine not on Cyberduck. 
* Then you can either re-upload the entire folder or just the file(s) that have been edited.
* You will be asked whether you want to overwrite. Click `Yes`.


