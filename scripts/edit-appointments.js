let baseUrl = `http://localhost:3000`

 // Function to parse query parameters from the URL
 function getQueryParameter(parameterName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
}

// Retrieve the 'id' parameter from the URL
const id = getQueryParameter('id');

if (id !== null) {
    // You can use the 'id' value for further processing
    console.log(`ID from URL: ${id}`);
} else {
    console.error('ID parameter not found in the URL');
}


// to get appointment data
fetch(`${baseUrl}/appointments/${id}`, {
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

function showData(doctorData)  {
    // Select form elements by their IDs
    const nameInput = document.getElementById('name');
    const imageInput = document.getElementById('image');
    const specializationSelect = document.getElementById('specialization');
    const experienceInput = document.getElementById('experience');
    const locationInput = document.getElementById('location');
    const dateInput = document.getElementById('date');
    const slotsInput = document.getElementById('slots');
    const feeInput = document.getElementById('fee');

    // Populate form fields with data from the doctorData object
    nameInput.value = doctorData.name;
    imageInput.value = doctorData.image;
    specializationSelect.value = doctorData.specialization;
    experienceInput.value = doctorData.experience;
    locationInput.value = doctorData.location;
    dateInput.value = doctorData.date;
    slotsInput.value = doctorData.slots;
    feeInput.value = doctorData.fee;
}


// to update appointment
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
    fetch(`${baseUrl}/appointments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        alert('Data has been updated');
        window.location.href='doctors-dashboard.html'
    });
});