# MERN_002B_db_playground

NOTES warm up:
- get into atlas -> https://cloud.mongodb.com/v2#/org/64c6a77b0f540265d200e150/projects
- then on the project may need to run "npm install" to re-generate "node_modules". Sometimes random script and modules errors gets fired
- need to run command "npm install --save mongodb". Then will be able to use the mongo driver

NOTES basic POST:
- work on "app.js" and "mongo.js"
- run -> "npm start"
- use postman(as an example for a post)
- - rest request -> "http://localhost:3000/products"
- - - body -> { "name":"ld", "price":"100"}
- - - expected response -> "{"name":"ld","price":"100","_id":"64e62d0fd9db3e09c195fc36"}"




(node:24620) [MONGODB DRIVER] Warning: Warning: no saslprep library specified. Passwords will not be sanitized
(Use `node --trace-warnings ...` to show where the warning was created)