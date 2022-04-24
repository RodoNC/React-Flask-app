Rodolfo Calip
Languages: Python, Javascript, HTML and CSS
React App with flask backend and sqlite database


How to run:
Python and npm are required
1. While in the 447HW1 folder enter <flask run> into the command line to start the flask server
2. In another terminal, cd to the frontend folder and enter <npm start> to load the react app
If the react app does not open in the browser, go to http://localhost:3000/
You may also need to run <npm install> to install all the dependencies
or <npm i react-bootstrap@next bootstrap@5.1.0 react-router-dom axios formik yup>

Reinitialize the db to default values or if database file gets deleted:
run <python init_db.py>

How to use website:
On the top right are two options, one to create a student and one to view the list of students
Clicking on create student will load a form to create a student
Enter the data and press submit
Students will be listed in Student List
There are options to edit and delete.
Delete will remove the entry and refresh the page
Edit will load a form to change the name and score of that entry
ID cannot be changed since they are unique 
If existing ID needs to be used, first delete that entry

Bugs to fix: 
Entering a new student with an already existing ID causes unexpected behavior
Error message when editing student even when succesful
