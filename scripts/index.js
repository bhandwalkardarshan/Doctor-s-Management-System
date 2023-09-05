        let baseUrl = `http://localhost:3000`

        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const toggleRegisterForm = document.getElementById('toggleRegisterForm');
        const toggleLoginForm = document.getElementById('toggleLoginForm');

        toggleRegisterForm.addEventListener('click', () => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });
        toggleLoginForm.addEventListener('click', () => {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';    
        });

        const loginFormElement = document.getElementById('loginForm');
        const registerFormElement = document.getElementById('registerForm');

        loginFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Send a GET request to /users and compare entered data with stored data
            fetch(`${baseUrl}/users`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const user = data.find(user => user.email === email && user.password === password);
                    if (user) {
                        alert('Login successful');
                        // Redirect to Doctor's Dashboard or Book Appointments page based on the Doctor checkbox value
                        if (user.isDoctor) {
                            // Redirect to Doctor's Dashboard
                            window.location.href = 'doctors-dashboard.html';
                        } else {
                            // Redirect to Book Appointments page
                            window.location.href = 'book-appointments.html';
                        }
                    } else {
                        alert('Login failed');
                    }
                });
        });

        registerFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email_reg').value;
            const password = document.getElementById('password_reg').value;
            const isDoctor = document.getElementById('isDoctor').checked;
            // console.log(username,email,password,isDoctor)
            // Send a POST request to /users endpoint
            fetch(`${baseUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    isDoctor
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('Registration successful');
            });
        });