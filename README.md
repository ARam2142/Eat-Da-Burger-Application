# burger

# Config Setup
​

Inside your burger directory, create a folder named config.
​
Create a connection.js file inside config directory.
​

Inside the connection.js file, setup the code to connect Node to MySQL.
​
Export the connection.
​


Create an orm.js file inside config directory.
​

Import (require) connection.js into orm.js
​
In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
​

selectAll()
insertOne()
updateOne()

deleteOne()
​


Export the ORM object in module.exports.
​




# Model setup
​

Inside your burger directory, create a folder named models.
​

In models, make a burger.js file.
​

Inside burger.js, import orm.js into burger.js
​
Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
​
Export at the end of the burger.js file.
​






# Controller setup
​

Inside your burger directory, create a folder named controllers.
​
In controllers, create the burgers_controller.js file.
​
Inside the burgers_controller.js file, import the following:
​

Express

burger.js
​


Create the router for the app, and export the router at the end of your file.
​


# View setup
​

Inside your burger directory, create a folder named views.
​

Create the index.handlebars file inside views directory.
​
Create the layouts directory inside views directory.
​

Create the main.handlebars file inside layouts directory.
​
Setup the main.handlebars file so it's able to be used by Handlebars.
​
Setup the index.handlebars to have the template that Handlebars can render onto.
​
Create a button in index.hand