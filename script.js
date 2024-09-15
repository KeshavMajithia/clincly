document.addEventListener('DOMContentLoaded', function() {
    const budgetSlider = document.getElementById('budget-slider');
    const budgetDisplay = document.getElementById('budget-display');
    const proceedBudgetBtn = document.getElementById('proceed-budget');
    const hospitalSection = document.getElementById('hospital-section');
    const doctorSection = document.getElementById('doctor-section');
    const roomSection = document.getElementById('room-section');
    const hospitalCards = document.getElementById('hospital-cards');
    const doctorCards = document.getElementById('doctor-cards');
    const roomCards = document.getElementById('room-cards');

    let selectedHospital = null;
    let selectedDoctor = null;
    let selectedRoom = null;

    const hospitals = [
        { name: 'City Hospital', price: 2000, image: 'images/hospital1.avif', rating: 4.3 },
        { name: 'Green Valley Hospital', price: 2500, image: 'images/hospital2.avif', rating: 4.0 },
        { name: 'Sunrise Medical', price: 3000, image: 'images/hospital3.png', rating: 4.5 },
        { name: 'Hope Health Center', price: 4000, image: 'images/hospital4.jpeg', rating: 4.5 },
        { name: 'Healing Hands', price: 4500, image: 'images/hospital5.webp', rating: 4.5 }
    ];

    const doctors = [
        { name: 'Dr. John Doe', rating: 4.5, qualification: 'MD, Cardiologist', image: 'images/doctor1.jpeg' },
        { name: 'Dr. Sarah Lee', rating: 4.8, qualification: 'MBBS, Neurologist', image: 'images/doctor2.jpeg' },
        { name: 'Dr. Michael Smith', rating: 4.0, qualification: 'Surgeon', image: 'images/doctor3.webp' },
        { name: 'Dr. Anna Brown', rating: 4.9, qualification: 'MD, Dermatologist', image: 'images/doctor4.avif' },
        { name: 'Dr. Paul Green', rating: 4.3, qualification: 'MBBS, Pediatrician', image: 'images/doctor5.avif' }
    ];

    const rooms = [
        { type: 'Private Room', price: 2500, image: 'images/room1.jpg', rating: 4.2 },
        { type: 'Semi-Private Room', price: 1500, image: 'images/room2.jpg', rating: 4.2 },
        { type: 'General Ward', price: 1000, image: 'images/room3.avif', rating: 4.2 },
        { type: 'Luxury Suite', price: 5000, image: 'images/room4.jpg', rating: 4.2 },
        { type: 'Basic Ward', price: 800, image: 'images/room5.jpeg', rating: 4.2 }
    ];

    // Update budget display
    budgetSlider.addEventListener('input', function() {
        budgetDisplay.innerText = budgetSlider.value;
    });

    // Proceed to swipe hospitals based on budget
    proceedBudgetBtn.addEventListener('click', function() {
        document.getElementById('budget-section').classList.add('hidden');
        hospitalSection.classList.remove('hidden');
        loadSwipeCards(hospitals, hospitalCards, 'hospital');
    });

    // Function to load swipe cards
    function loadSwipeCards(dataArray, cardContainer, type) {
        cardContainer.innerHTML = '';
        let currentIndex = 0;
        displayCard(dataArray[currentIndex]);

        function displayCard(data) {
            const card = document.createElement('div');
            card.classList.add('swipe-card');

            // Ensure the image is loaded from the correct path and styled correctly
            card.innerHTML = `
                <div style="height: 60%; 
                            background-size: cover; 
                            background-position: center; 
                            border-radius: 10px;
                            display: block;">
                            <img src="${data.image}" alt="${data.name || data.type}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
                </div>
                <div style="padding: 10px;">
                    <h3 style="font-size: 1.5em; font-weight: bold;">${data.name || data.type}</h3>
                    <p style="font-size: 1.2em;">Rating: ${data.rating ? data.rating + ' ★' : 'N/A'}</p>
                </div>
            `;

            cardContainer.appendChild(card);
            enableSwiping(card);
        }

        function enableSwiping(card) {
            let isDragging = false;
            let startX = 0;

            card.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX;
            });

            card.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                let deltaX = e.clientX - startX;
                if (deltaX > 100) swipeRight();
                else if (deltaX < -100) swipeLeft();
            });

            card.addEventListener('mouseup', () => {
                isDragging = false;
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') swipeLeft();
                else if (e.key === 'ArrowRight') swipeRight();
            });

            function swipeLeft() {
                currentIndex = (currentIndex + 1) % dataArray.length;
                card.classList.add('swipe-left');
                setTimeout(() => {
                    card.remove();
                    displayCard(dataArray[currentIndex]);
                }, 300);
            }

            function swipeRight() {
                card.classList.add('swipe-right');
                setTimeout(() => {
                    card.remove();
                    if (type === 'hospital') {
                        selectedHospital = dataArray[currentIndex];
                        hospitalSection.classList.add('hidden');
                        doctorSection.classList.remove('hidden');
                        loadSwipeCards(doctors, doctorCards, 'doctor');
                    } else if (type === 'doctor') {
                        selectedDoctor = dataArray[currentIndex];
                        doctorSection.classList.add('hidden');
                        roomSection.classList.remove('hidden');
                        loadSwipeCards(rooms, roomCards, 'room');
                    } else if (type === 'room') {
                        selectedRoom = dataArray[currentIndex];
                        roomSection.classList.add('hidden');
                        saveAndRedirect();
                    }
                }, 300);
            }
        }
    }

    // Save selection and redirect to selection.html
    function saveAndRedirect() {
        localStorage.setItem('selectedHospital', JSON.stringify(selectedHospital));
        localStorage.setItem('selectedDoctor', JSON.stringify(selectedDoctor));
        localStorage.setItem('selectedRoom', JSON.stringify(selectedRoom));
        window.location.href = 'selection.html';
    }
});
