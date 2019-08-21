#Simple express routing


# Features

* Helps you structure your code very well and keeps things simple.
* Add routing to your application with ease

# Commands

- First initialize the package in your main file once by importing and calling the setup function

**Example**
- const routing  = require('express-routing)
- routing.Setup(array);


-  You just have to pass an array of objects with the following properties

/**

{   
    "method": "get",
    "route": "/dd",
    "middleware": [function1, function2],
    "controller": kofi,
}

- Each object represents one endpoint

- Method is of the type string either "get" or "post"
- route is also of the type string, that is the endpoint for the url
- middleware is of the type array, that contains all the functions you want to call before getting to the controller that will send data back to the user and perform other functions or even send back a page;
- controller is the final function that will take care of sending feedback to the user

- Pls note that you can leave out middleware if you don't need it and just have three properties. If you however use it, remember to attach the function next() so the req is passed unto the next function till it gets to the controller.

- After passing the newly formed array to the setup, just call

- app.use('/', routing.getRouter());

or

- var route = routing.getRouter();
- app.use('/', route);
...
...
- app.listen(port)

**You are good to go**

**/

# Installation

- npm i express-routing-simple

