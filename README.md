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

## `**Problem Statement**`

- The objective is to create a Full Stack application using **HTML, CSS, and JS** as frontend and **JSON server** as backend which facilitates seamless booking of medical appointments with doctors by the patients.
- Your app should have a navbar with the following pages
    - Home page
    - Doctor’s Dashboard
    - Book Appointments

## `**Home Page**`

- Your home page should have a **login and register form**, which the user should be able to toggle between login and register, and the corresponding form should be shown.

![                                                   Reference Image for Login and Register Toggle](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e7341f3-c012-46c8-934c-a4784559e8bf/Login_Signup.png)

                                                   Reference Image for Login and Register Toggle

- The Sign Up form should have the following fields
    - Username
    - Email
    - Password
    - Doctor Checkbox ( Indicating the user is a doctor or not).
- The user should be able to register through the form, and the data should be stored in your JSON server on route “**/users**”.
- The login form should have the following fields
    - Email
    - Password
- When a user logs in, match the entered data with the JSON server data you stored while registering. Display an alert - if login is a success, show a message in the alert box as `login successful`, else show a message as `login failed`
- The user should be redirected to the Doctor dashboard or Book Appointments (on the basis of the checkbox value) page after successfully logged-in.

---

## **`Doctor Dashboard`**

- This page should be protected only the user who is a doctor should able to access it.
- The user should be prompted by an appointment form with the following details
    - Name
    - Image URL
    - Specialization (Select tag with **Cardiologist, Dermatologist, Pediatrician, or Psychiatrist** as options)
    - Experience
    - Location
    - Date (Appointment creation date)
    - Slots (Number of slots available for the day)
    - Fee
- Sample JSON
    
    ```json
    [
    	{
    	  "name": "Jane Doe",
    	  "image": "https://example.com/doctor-image.jpg",
    	  "specialization": "Dermatologist",
    	  "experience": 10,
    	  "location": "Los Angeles",
    	  "date": "2023-04-05T12:00:00.000Z",
    		"slots": 2,
    	  "fee": 150
    	},
    	{
    	  "name": "Mark Johnson",
    	  "image": "https://example.com/doctor-image.jpg",
    	  "specialization": "Pediatrician",
    	  "experience": 5,
    	  "location": "Chicago",
    	  "date": "2023-04-06T09:30:00.000Z",
    		"slots": 1,
    	  "fee": 100
    	}
    ]
    ```
    

- On form submission, store data in JSON server on route “**/appointments**”.
- Display a list of Doctors that are fetched from the server using the JSON server in a tabular format.

| Name of the Doctor | Specialization | experience | location | slots | Edit  | Delete | Appointments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jane Doe | Dermatologist | 10 | Los Angeles | 2 | edit (Button) | Delete(Button) | Appointments(Button) |
| Mark Johnson | Pediatrician | 5 | Chicago | 1 | edit (Button) | Delete (Button) | Appointments(Button) |
- Each column should have 3 buttons “**Edit**”, “**Delete**”, and “**Appointments**” button that allows to user
    - **Edit** the doctor's details (All Fields should be editable)
    - **Delete** the doctor's details
    - **Appointments**: This should display the patients who had booked appointments for the particular doctor.(You can use a modal or a separate page for the same)
- Both Edit and Delete functionalities should be reflected in the UI and in the JSON server.

---

## **`Book Appointments page`**

- Fetch all the appointments posted from the JSON server and list them in the form of cards.
- The UI should look like

![                                                                             UI Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3dddd88-5054-43fc-a28b-d1d2105ca525/Masai_Hospital.png)

                                                                             UI Reference Image

- Your app should have the following functionalities.
    - **Filter by Specialization** (**Cardiologist, Dermatologist, Pediatrician, Psychiatrist**).
    - **Sort by Date** (based on the posted date)
    - **Search by Doctor's name**
    - **Pagination** (4 Cards per page)
- Each card should have a “**Book Now**” button, which when clicked, the number of slots for that particular doctor should decrement by 1.
- If the number of slots becomes 0, the Book Now button should be disabled.
