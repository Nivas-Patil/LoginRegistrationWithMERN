# Most IMP => You must have nodejs downloaded on your computer globally
download this project an paste inside any folder

inside project folder

open command prompt / terminal and type following commands


Make sure to add PORT = 3000 or any in config.env file which is present in loginregistrationserver


now add this line after "private": true,

"proxy": "http://localhost:3000" in package.json file of loginregistration folder

change loginregistrationserver / package.json "start" "node app.js"  to "start" "nodemon app.js"  an do following steps

Step 1)  To download project dependencies

>npm init


Step 2)  And to run the project 

>npm start
