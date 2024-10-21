First initiated npm init for our NodeJs project
Initiated Git repo
Got gitignore to protect sensitive files like .env and node_modules from publishing in git repo
created .env file to store our snesitive data
created a src folder and touched app.js index.js and constants.js files in it
installed nodemon to stop manually stopping and starting server
created controllers db middleware routes and utils folders in our src folder
set up my database with MongoDB Atlas and got my connection string
got mongoose express and dotenv packages for our project
connected database to application with mongoose 
made utility classes for common Api Response, Errors and passed asyncHandler HOF as a wrapper
imported express to listen on server and manipulate req, res. Also imported cors and cookieParser for safe communication between frontend and backend and getting cookies. Also used app.use middleware for setup.
added user model with the help of mongoose. Installed bcrypt to hash password and installed jwt to generate tokens. Added a method before saving pasword to compare the paswords.