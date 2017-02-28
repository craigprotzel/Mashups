Setting Up A Local Server
-------------------------

1. Open up a Terminal Window (Mac) or a Command Prompt (Windows). For Macs, If you've never used the Terminal before, hit command-space and start typing "Terminal". Click on Terminal and a Terminal window should open. For Windows users, in the "Search" or "Run" line type "cmd" and press enter.

2. Navigate to the directory (i.e. folder) where your files are saved. An easy way to do this is to type `cd` and then a space and then drag and drop the folder (where your files live) on top of the terminal window. The path to this folder (directory) should appear. Then click enter.

3. After clicking enter, you can type the command pwd to see exactly where you are in terms of your directory structure.

4. Next, check your version number of python (python comes preloaded on Macs) by typing the following command into the Terminal window and then hitting enter. 

  Note, Windows users may need to type `py` instead of `python` depending on your OS version:   
  ```
  python --version
  ```
If you are running version 2 (i.e Python 2.x.x) type the following command and then hit enter: 
  ```
  python -m SimpleHTTPServer
  ```
If you are running version 3 (i.e. Python 3.x.x) type the following command and then hit enter: 
  ```
  python -m http.server
  ```
For Windows users, if you do not have Python installed, you will need to download and install it from [HERE](https://www.python.org/downloads/). After installing, close your current Command Prompt Window and open a new one. Then follow the above.

5. You may (or may not) see this in the Terminal
  ```
  Serving HTTP on 0.0.0.0 port 8000 ...
  ```
Either way, open up your web browser and navigate to the following url:  
  ```
  http://localhost:8000
  ```
For some machines, you may need to navigate to the following url:  
  ```
  127.0.0.1:8000
  ```
6. You should see links to all the files in your folder. Click on the html file and your application should load. (Note, if you name your html file `index.html`, the application will load when you navigate to `http://localhost:8000`

Reference: [Setting Up A Web Server](http://chimera.labs.oreilly.com/books/1230000000345/ch04.html#_setting_up_a_web_server) in Ch.4 of Interactive Data Visualization for the Web by Scott Murray
