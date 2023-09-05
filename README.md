# Doctor-s-Management-System
Masai Hospital Appointment Booking Mini Project

Project Overview
The Masai Hospital Appointment Booking is a full-stack web application that facilitates seamless booking of medical appointments with doctors by patients. This project uses HTML, CSS, and JavaScript for the frontend and JSON Server as the backend. It provides features such as user registration and login, doctor's dashboard, appointment booking, and more.

Table of Contents
Installation
Usage
JSON Server Setup
Problem Statement
Installation
To get started with this project, follow these steps:

Clone this repository to your local machine:

git clone <repository-url>
Navigate to the project directory:

cd masai-hospital-appointment-booking

Usage
After cloning the repository, follow these instructions to run the project:

Open the project directory in your code editor of choice.

Set up the JSON Server:

Install JSON Server globally if you haven't already:

npm install -g json-server

Create a JSON file for your database (e.g., db.json) with initial data structures for users, appointments, and doctors.

Start JSON Server using your JSON file:

json-server --watch db.json

JSON Server will now provide a RESTful API based on your data.

Open the index.html file in your web browser to access the Masai Hospital web application.

JSON Server Setup
JSON Server is used as the backend for this project. It simulates a RESTful API server using a JSON file as a database. Follow these steps to set up JSON Server:

Installation
If you haven't already installed JSON Server globally, you can do so with the following command:

npm install -g json-server

Running JSON Server
To start JSON Server, use the json-server command and specify your JSON data file as follows:

json-server --watch db.json

Replace db.json with the path to your JSON data file.

JSON Data Structure
Ensure that your JSON data file (db.json) follows the appropriate structure required for your project. Define the data structures for users, appointments, doctors, etc., as needed.

Problem Statement
The problem statement for this project is as follows:

Create a Full Stack application using HTML, CSS, and JavaScript for the frontend and JSON Server for the backend.
The application should facilitate the booking of medical appointments with doctors.
Implement a navigation bar with pages for the Home page, Doctor’s Dashboard, and Book Appointments.
On the Home page, create login and register forms that users can toggle between.
Implement registration and login forms with fields like Username, Email, Password, and a Doctor checkbox.
Handle form submissions by sending POST and GET requests to the /users endpoint to store and retrieve user data.
Redirect users to the Doctor's Dashboard or Book Appointments page based on the Doctor checkbox value.
