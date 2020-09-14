# Tap Room

#### React and JavaScript Functional Programming Exercise for Epicodus, 09.11.2020

## By Jeff Kim

## Description

It's been a long week learning functional programming and now it's time to go grab a cold one with your team. But wait! Turns out the local tap room system has crashed and now we need to design a new system that can help them keep track of their stock.

This project uses React to dynamically update a single-page app that will allow users to add a new keg to a master list, click a keg to see its details, click a button that will sell a pint of that keg and keep track of the pints remaining, and restock a keg so that it will be full again.

## Specifications

| Behavior | Input | Output |  Completed(Y/N?)  |
| -------- | ----- | ------ | -------- |
| Create a keg object | Click **Add Keg** button | A new keg object is instantiated | Y |
| Add the new keg object to a master list | N/A | Keg is added to the master list of kegs and displayed on the page | Y |
| Click a keg to see its details | Click a keg div on the master keg list | Load keg details component | Y |
| Sell a pint and decrement the pints left value | Click the **Sell a Pint** button | Pints left value decrements by 1 | Y |
| Display a message when a keg is out of stock | Click the **Sell a Pint** button until the pints left value is 0 | Display a message "This keg is empty" | Y |
| Refill a keg | Click the **Restock this keg** button | Pints left value is reset to 124 | Y |

![Tap Room Diagram](/Tap_Room_Diagram.jpg)

## Setup/Installation Requirements

**Requirements:**
* [Node JS - Latest Version](https://nodejs.org/en/)

**To use this program:**

1. Open your preferred browser.
2. Navigate to https://github.com/jkbutserious/tap-room.git.
3. Click the **Code** button and click **Download ZIP** to clone the repository to your computer.
4. Open the Windows PowerShell console, VS Code Bash terminal, or the MacOS Terminal and use the ``cd [YOUR DOWNLOAD FILEPATH]/tap-room`` command to navigate to the Factory subdirectory.
5. Use the ``npm run start`` command to run the program.
6. Use the web interface to add kegs to the list and keep track of the pints left.
7. If you have any issues running this program, please reach out to the developer or troubleshoot at your own risk.

**To contribute to this project:**

1. Open your preferred browser.
2. Navigate to https://github.com/jkbutserious/tap-room.
3. Log into or sign up for your GitHub account.
4. Click the **Fork** button to copy the repository and all source code.
5. From your forked repository, you can download or clone the repository, by clicking the **Code** button.
  * To clone the repository in Visual Studio Code's terminal, use the command

    ```git clone https://github.com/[YOUR-USER-NAME-HERE]/tap-room```
  * To clone the repository in GitHub Desktop, click the **Open in Desktop** option
  * To download the repository, click the **Download ZIP** option, save the archive to your computer, and extract it to the folder of your choice
6. Use your preferred code editor to edit the appropriate script files.
7. Save any changes you make in your code editor and use your preferred git solution to commit your changes.
8. Push your changes to your forked repository.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

#### Additional Setup/Installation Notes:

* No additional code  or installations are necessary to view this project.   

## Known Bugs

_No known issues. Please contact me if you have any problems._


## Support and contact details

To report any issues with this page or to contribute to this project, contact Jeff Kim at kim2jy@hotmail.com.

## Technologies Used

* JavaScript
* React
* Node JS
* Visual Studio Code 
* Git and Git BASH 


### License

Copyright © 2020 Jeffrey Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.