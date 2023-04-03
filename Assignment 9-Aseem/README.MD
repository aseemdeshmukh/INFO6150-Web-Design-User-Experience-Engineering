# ASSIGNMENT 9

- Name: Aseem Deshmukh
- NUID: 002743798

Created a backend folder for connecting to the mongodb and running the localhost on 5000 port and frontend folder to run the react app on localhost 3000 port

- Routers -> userRouters are created for each operation which will go to the Controllers for respective opertions
- Controllers -> In userControllers, for each operation a different method is created with await and async handling to perform their respective operations on the mongodb
- Models -> In userModel, The schema for the user table is defined and bcrypt of password also done before saving into the database
- Middlewares -> In errorMiddlewares all the generic errors are defined ex. 400 "Not Found" or 201 "Success"

- 4 Pages are created with relevant data in it using single component card for heading and printing the horizontal lines

- map() is used to fetch the data from file in about section

- Navbar, Footer and MainScreen are the single component cards which are used in all the pages

### Setup:

- Download the Assignment 9 folder and type command first command "npm install" which will install all the dependencies and then run "npm run dev" in terminal which will run both (frontend as well as backend) server simultaneously.
