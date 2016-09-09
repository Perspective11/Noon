# Noon

A complete open source library of educational videos and tutorials in Arabic.

#### Here is a detailed description of the project files, packages and structure in this repository.

>Note that some of these packages and plugins are optional, you don't have to implement all of them. Just do what you can according to your needs.

### index.html
This is the default project file, the home page where the web application starts.

### .gitignore
A text file that contains entries of directories and extensions that should not be uploaded from a pc to the repo. For example, you don't want Github to keep uplaoding windows system files in the project folder to the Github repository. For this, there is an entry for windows system files to be ignored:
```sh
### Windows ###
# Windows image file caches
Thumbs.db
ehthumbs.db
```

### ReadMe.md
This file usually contains the description of the repository and a basic tutorial on how to use it. As well as related information like copy right and credits.

### package.json
A file that is created as soon as you start working with **NPM**, which will be explained later.  
***package.json*** contains a list of the packages downloaded by NPM, their version numbers and some configuration, along with information about the project and the git repository.

### bower.json & bowerrc
***bower.json*** is the same as ***package.json*** but for **Bower**, which will also be explained later.

 ***.bowerrc*** is an additional bower file for more configuration like, for example, the directory. which means we can set where the bower packages are installed with specifying the directory in this file:
 ```sh
{
  "directory": "assets/packages/"
}
```

### pages Folder
This is where our different html pages will be stored. The ***admin*** folder inside contains the pages only accessible for the admin.

### admin Folder
The ***admin*** folder contains the pages that are only accessible for the admin.



### assets Folder
This is where we store everything we need to put our project together. It consists of the following:

* ***css*** : our Css files should be put here including the main css file ***styles.css***.
* ***img*** : we will put our images (.jpeg, .png, .gif) in an organized file structure here.
* ***js*** : our JavaScript files are put in this folder which includes our main script file ***scripts.js***.
* ***packages*** : this is where the bower packages are stored when installed through bower.



## NPM (Node Package Manager)
This is a very useful tool that can download any packages for you to use like **Gulp**, **Grunt**, **Bootstrap**, **JQuery**, **Angular** and so much more. This tool can install those packages directly only with simple **CMD** commands, it can also update them continuously and manage them for you.

#### How to start using **NPM**
The only prerequisite for working with **NPM** is **[Node.js]** program which can be simply downloaded and installed with a simple installation from [here](https://nodejs.org/en/download/).
You can skip this download if your Windows already has Node.js installed.

Now all you have to do is open **CMD** in your project directory and execute this command
##### if you are working with a new project

    > npm init
This command will initialize NPM into the project. The command line will ask you about the project name, description and other information, you can skip those and keep hitting enter if you want.
When you are done, you can see now that a ***package.json*** file is created in your project directory.

##### if you are working with this project (because ***package.json*** already exists)

    > npm install
This command will take your ***package.json*** file and scan through the package names and versions and downloads them directly into your project directory in a folder called ***node_modules***. The list of packages installed in this project through **NPM** are:

* [AngularJS] - HTML enhanced for web apps! : an MVC framework that is used by all major projects.
* [Gulp] - the streaming build system : a task-runner that can automatically do a ton of tasks that you would normally do manually.
* [Bower] - a package manager for the web.
* [BrowserSync] - Time-saving synchronised browser testing.

If you want to install more packages of your own just write the following command on **CMD** in the project directory:

    > npm install <package-name> --save
This command will download the package from the internet and put it in the ***node_modules*** folder and add an entry in the ***package.json*** file (package name and version number)

#### Other packages you can install with **NPM**:
* [Grunt] - The JavaScript Task Runner.
* [Express] - Fast, unopinionated, minimalist web framework for Node.js
* [Moment] - Parse, validate, manipulate, and display dates in JavaScript.


## Bower
Almost Exactly like **NPM**, but mostly preffered for managing packages that work on the front-end (client-side). **Bower** can wholly be replaced by **NPM** but **NPM** is for more configuration and stability and **Bower** for simplicity and efficiency.
This is a very useful tool that can download any packages for you to use like **Bootstrap**, **Font-Awesome**, **Animate.css**, **JQuery**, **Angular** and so much more. This tool can install those packages directly only with simple **CMD** commands, it can also update them continuously and manage them for you.

#### How to start using **Bower**
First you have to install **Bower** only with **NPM** with this command

    > npm install bower --save
Now all you have to do is open **CMD** in your project directory and execute this command
##### if you are working with a new project

    > bower init
This command will initialize the **Bower** project. The command line will ask you about the project name, description and other information, you can skip those and keep hitting enter if you want.
When you are done, you can see now that a ***bower.json*** file is created in your project directory.

##### if you are working with this project (because ***bower.json*** already exists)

    > bower install
This command will take your ***bower.json*** file and scan through the package names and versions and downloads them directly into your project in the directory specified in the ***.bowerrc*** file, or if this file doesn't exist, the bower packages will be installed in a folder called ***bower_components***. However, since we already have a ***.bowerrc*** file and we have specified the directory, the packages will be installed in ***assets/packages*** directory.The list of packages installed in this project through **Bower** are:

* [Twitter Bootstrap] - great UI boilerplate for modern web apps.
* [jQuery] - duh
* [AngularJS] - HTML enhanced for web apps! : an MVC framework that is used by all major projects.
* [Font Awesome] - The iconic font and CSS toolkit.
* [Animate.css] - Just-add-water CSS animations.
* [WOW.js] - Reveal Animations When Scrolling.

If you want to install more packages of your own just write the following command on **CMD** in the project directory:

    > bower install <package-name> --save
This command will download the package from the internet and put it in the ***assets/packages*** folder and add an entry in the ***bower.json*** file (package name and version number)

#### Other packages you can install with **Bower**:
* [FullCalendar] - A JavaScript event calendar. Customizable and open source.
* [CKEditor] - The best web text editor for everyone.
* [Isotope] - Filter & sort magical layouts.
* [DataTables] - Table plug-in for jQuery.

After installing any package, all you have to do is link it in your ***HTML*** file:

    <link href="assets/packages/bootstrap/dist/css/bootstrap.css.min"/>
    <script src="assets/packages/bootstrap/dist/js/bootstrap.min.js" charset="utf-8"></script>


   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [Grunt]: <http://gruntjs.com/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [Bower]: <https://bower.io/>
   [BrowserSync]: <https://www.browsersync.io/>
   [Moment]: <http://momentjs.com/>
   [Font Awesome]: <http://fontawesome.io/>
   [Animate.css]: <https://daneden.github.io/animate.css/>
   [FullCalendar]: <https://fullcalendar.io/>
   [CKEditor]: <http://ckeditor.com/>
   [Isotope]: <http://isotope.metafizzy.co/>
   [DataTables]: <https://datatables.net/>
   [WOW.js]: <http://mynameismatthieu.com/WOW/>
