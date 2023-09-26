let baseUrl = `http://localhost:3000`

fetchData();

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Collect the form data
    const formData = new FormData(event.target);

    // Convert form data to a JavaScript object
    const appointmentData = {};
    formData.forEach((value, key) => {
        appointmentData[key] = value;
    });

    // You can now send this data to a server for processing or display it to the user
    // console.log(appointmentData);
    fetch(`${baseUrl}/appointments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        alert('Data has been stored');
        fetchData()
    });
});

function fetchData(){
    console.log("data fetched")
    // to show data in tabular format
    fetch(`${baseUrl}/appointments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        showData(data)
    });
}


function showData(data){
    // console.log(data)
    const appointmentList = document.getElementById('appointmentList');
    appointmentList.innerHTML = '';

    data.forEach(appointment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.specialization}</td>
            <td>${appointment.experience}</td>
            <td>${appointment.location}</td>
            <td>${new Date(appointment.date).toLocaleDateString()}</td>
            <td>${appointment.slots}</td>
            <td><button onclick="editAppointment(${appointment.id})">Edit</button></td>
            <td><button onclick="deleteAppointment(${appointment.id})">Delete</button></td>
            <td><button onclick="viewAppointments(${appointment.id})">Appointments</button></td>
        `;

        appointmentList.appendChild(row);
    });
}

// To delete appointment
function deleteAppointment(appointmentIdToDelete){
    // Send a DELETE request to the JSON Server endpoint for the resource
    fetch(`${baseUrl}/appointments/${appointmentIdToDelete}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Object successfully deleted
            console.log(`Appointment with ID ${appointmentIdToDelete} deleted.`);
            fetchData()
        } else {
            // Handle error if needed
            console.error(`Failed to delete appointment with ID ${appointmentIdToDelete}.`);
        }
    })
    .catch(error => {
        // Handle network or other errors
        console.error(`Error occurred: ${error}`);
    });
}

// To edit appointment
function editAppointment(appointmentIdToEdit){
    window.location.href = `edit-appointment.html?id=${appointmentIdToEdit}`;
}

// To view appointment
function viewAppointments(appointmentIdToView){
    window.location.href = `book-appointments.html?id=${appointmentIdToView}`;
}
