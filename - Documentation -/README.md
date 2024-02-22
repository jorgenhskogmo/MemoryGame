# Memory Game
### Project Structure
Once our project files have been created and our dependencies have been installed, our project structure should look like this:

- **dist** ready files for uploading to production use.
- **node_modules** is a folder that includes all of the dependency-related code that React App has installed. You will never need to go into this folder.
- **public** is a folder that we can use to store our static assets, such as images, svgs, and fonts for our React app.
- **src** is a folder that contains our source code. It is where all of our React-related code will live and is what we will primarily work in to build our app. If you want to change the application, use this folder.
- **.env** settings file for the user.
- **.gitignore** is a file that is used to exclude files and folders from being tracked by Git. We don't want to include large folders such as the node_modules folder
- **package.json** that manages our app dependencies and what is included in our node_modules folder for our project, plus the scripts we need to run our app.

# How to Upload HTML5 Files to a Hosting through FTP
> HTML5 files for uploading to hosting are in the **dist** folder

If you want to upload your HTML5 files to your hosting, you can do it using FTP. In this guide, we will show you how to upload HTML5 files to a hosting through FTP using FileZilla.

### Step 1: Install an FTP client
To upload files to a hosting through FTP, you need an FTP client. In this example, we will use FileZilla. You can download it from the official website filezilla-project.org.

### Step 2: Get the FTP connection details
To connect to your hosting through FTP, you need to have the following details:

- **Host**: This is the IP address or domain name of your hosting.
- **Username**: The username to access your hosting.
- **Password**: The password to access your hosting.

You can obtain these details from your hosting provider. If you use a hosting provider that provides a control panel, you can find these details in the FTP section or account settings.

### Step 3: Connect to your hosting using the FTP client
After you have installed the FTP client and obtained the connection details, you can connect to your hosting through FTP. To do this, follow these steps:

1. Launch FileZilla and select __File > Site Manager__.
2. In the Site Manager window, select the New Site button and enter the details of your hosting (IP address or domain name, username, and password).
3. Click the Connect button to connect to your hosting.

### Step 4: Upload the HTML5 files to your hosting
After you have connected to your hosting through FTP, you can upload your files to your hosting using the following steps:

1. In FileZilla, select Local Site and choose the folder on your computer where your HTML5 files are stored.
2. In FileZilla, select Remote Site to view the files on your hosting.
3. Select the folder on your hosting where you want to upload your HTML5 files.
4. Drag the files from your local folder to the folder on your hosting. You can also right-click on the file in your local folder and select Upload.
5. Wait for the files to be uploaded to your hosting.

After uploading the files to your hosting, you can view your site by going to your domain name or IP address. If everything is set up correctly, you should see your page.

That's it! You have successfully uploaded your HTML5 files to your hosting using FTP.

# How to run a React app using VSCode

 Running a React app using VSCode can be done using the following steps:

### Step 1: Before starting, make sure you have the following tools installed:
   - [Node.js][node.download]
   - [VSCode][vscode.download]

### Step 2: Open VSCode:
Now click __File > Open Folder..__ and choose folder with project. This will open the project folder in VSCode.

### Step 3: Install dependencies
Open up your terminal (in VSCode, go to __View > Terminal__). Run this command to  install dependencies:
```sh
npm i
```

>  What does **npm i** do?
npm (node package manager) will download the packages to the **node_modules** project folder according to the configuration in the package. json, updated the package    version wherever possible (and, in turn, updated package-lock. json)


### Step 4: Run the project by executing the command:
```sh
npm run dev
```
This will start the app and open it in your browser. (or open it http://localhost5173):

### Step 5: You can now edit the code and see how changes affect your app.
If you want to build your app for production, run the following command:
```sh
npm run build
```
This command will create a production build of your app in the **dist** folder.

These are the basic steps to run a React app using VSCode and npm. If you encounter any issues, please refer to the Vite and React documentation or reach out to the developer for help.

## Support
Its our pleasure to serve our service and support. please contact our support team.
Head of Customer Support: duckmetr@gmail.com
Typically we reply our customers for all the questions and queries within 24 hours of time via comments, support forum or emails.

[node.download]: <https://nodejs.org/en/download>
[vscode.download]: <https://code.visualstudio.com/download>