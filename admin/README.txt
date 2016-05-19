Pre-Setup:
	Install NodeJS with the Node Package Manager (npm).

Setup:
	Run "npm.install;" at command line
		in the primary folder where server.js is stored to install npm packages from package.js.
	Put a mongoDB database url in the config folder's serverConfig.js file.
	
Starting the server:
	Run "npm start;" at command line 
		in the primary folder where server.js is stored to start the server.
	Server defaults to local server, it can be hosted on a site host such as Heroku as is.

Important:
	Do Not Refresh on any page other than the login page.
		This will break the AngularJS client side routing.
		To return to the login page, hit the logout button.
		Most changes should refresh by themselves.

	After uploading images with the admin site, 
		since the admin site and mobile application folders are seperate,
		it is necessary to copy the image files from public/img to the img 
		folder in the mobile application folder
			
Note:
	Since the app and admin packages will be seperate, it might be better
		to simply upload images as urls instead of local uploads.