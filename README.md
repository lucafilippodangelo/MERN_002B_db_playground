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


NOTES "mongoose". Library that builds up on mongo drivers.
- installation -> "npm install --save mongoose"
- "mongoose" requires as first step to create a scheme. See models->product.js
- NOTE: not possible to work with ObjectID directly, need to convert first to string