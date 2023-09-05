let baseUrl = `http://localhost:3000`

let doctorList=[];
let currentPage = 1;
const cardsPerPage = 4;

fetchData();

function fetchData(){
    console.log("data fetched")

    fetch(`${baseUrl}/appointments`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        if (Array.isArray(data)) {
            doctorList = data;
            initialRender(data);
            
        } else {
            console.error('Data is not an array:', data);
        }
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });
}


// Function to create a card for a doctor
function createDoctorCard(doctor) {
    if(doctor.slots>0){
        // Create a card element
    const card = document.createElement('div');
    card.className = 'card';
    
    // Populate card with doctor's information
    card.innerHTML = `
        <img src="${doctor.image}" alt="Doctor's Image">
        <h2>${doctor.name}</h2>
        <p>Specialization: ${doctor.specialization}</p>
        <p>Experience: ${doctor.experience} years</p>
        <p>Location: ${doctor.location}</p>
        <p>Date: ${doctor.date}</p>
        <p>Slots: ${doctor.slots}</p>
        <p>Fee: $${doctor.fee}</p>
        <button onclick="bookAppointment(${doctor.id})">Book Now</button>
    `;

    return card;
    }
    else return null;
}

// Function to render the cards
function renderDoctorCards(doctorList) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    doctorList.forEach(doctor => {
       const card = createDoctorCard(doctor);
       if(card!=null){
        container.appendChild(card);
       }
    });
}

// book appointment
function bookAppointment(id){
    console.log(id)

    fetch(`${baseUrl}/appointments/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(appointmentData => {
        // console.log(data)
        // Decrement the number of available slots by 1
        const updatedSlots = appointmentData.slots - 1;

        // Create an object with the updated data
        const updatedData = {
            ...appointmentData, // Keep other properties the same
            slots: updatedSlots
        };
        fetch(`${baseUrl}/appointments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            fetchData();
        });
    });
}


// pagination

// Function to render the cards for the current page
function renderCurrentPage(doctorList) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    for (let i = startIndex; i < endIndex; i++) {
        if (i < doctorList.length) {
            const doctor = doctorList[i];
            const card = createDoctorCard(doctor);
            if (card !== null) {
                container.appendChild(card);
            }
        }
    }
}

// Function to update the pagination buttons
function updatePaginationButtons(doctorList) {
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === Math.ceil(doctorList.length / cardsPerPage);
}

// Event listener for previous page button
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCurrentPage(doctorList);
        updatePaginationButtons(doctorList);
    }
});

// Event listener for next page button
document.getElementById('nextPage').addEventListener('click', () => {
    const maxPage = Math.ceil(doctorList.length / cardsPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        renderCurrentPage(doctorList);
        updatePaginationButtons(doctorList);
    }
});

// Initial rendering of the first page
function initialRender(doctorList) {
    renderCurrentPage(doctorList);
    updatePaginationButtons(doctorList);
}
