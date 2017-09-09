How To Upload Files (SFTP) Via Cyberduck
----------------------------------------

A step-by-step guide for NYUAD IM students on how to upload files to your Dreamhost server space via Cyberduck.

### Step 0: Organize Your Files
* When creating a page for the first time, make sure all of the necessary files are in a single folder.
* Move any unncessary files out of the folder.
* Assuming there is one `.html` file in the folder, name it `index.html`. If there are multiple .html files, only name the main home page 'index.html' and leave the others as is. 
* Double-check your page by loading it locally and making sure there are no errors and/or missing files.

### Step 1: Open A Connection 
* Double-click the Cyberduck icon to open a Cyberduck panel. Towards the top left of the panel, you should see a button labeled `Open Connection`. You can also find `Open Connection` in the Cyberduck `File Menu`.
* Note, if you have connected to the server before, you can click on the `History` button, which looks like a clock. Locate your server and double-click to connect. If this is successful, you should be able to skip to **Step 4**.

### Step 2: Fill Out The Form
* Dropdown Menu: `SFTP (SSH File Transfer Protocol)`
* Server: `the-dreamhost-url.com`
* Port: `22`
* Username: `your-nyu-netid`
* Password: `your-password`
* SSH Private Key: None
* Add to Keychain should be selected
* Click `Connect` (Note, you may see a warning "Unknown host...". Click `Allow`.)

### Step 3: Navigate Into Your Directory
* You should see a few folders. One should be labeled `YOUR-NYU-NETID.nyuad.im`. Double-click into that folder.
* **You want to be INSIDE this folder. You will upload all of your work here.**

### Step 4: Upload Your Folder
* Click on the `Action` dropdown button.
* Select `Upload`.
* Navigate to the folder that has all of your files and upload the entire folder.

### Step 5: Check The Web
* In the browser, go to `your-nyu-netid.nyuad.im/your-folder-name` and you should see your webpage.
* If your `.html` file is not named `index.html`, but something else like `mypage.html` you should be able to find it at `your-nyu-netid.nyuad.im/your-folder-name/mypage.html`
* The folders and file structure that you see in the Cyberduck panel will determine the url of your web page.

### Step 6: Update Your Page
* To make changes to your page, you should always edit the local files that are on your own machine. Avoid editing the files uploaded on Cyberduck. 
* Then, when your changes are complete, either re-upload the entire folder or just the file(s) that have been edited.
* Assuming you are updating files, you will be asked whether you want to overwrite the existing files. Click `Yes`.


