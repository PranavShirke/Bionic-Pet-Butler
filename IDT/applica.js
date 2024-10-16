// Function to handle feeding the pet
document.getElementById('feedPet').addEventListener('click', function() {
    alert("The pet has been fed!");
    // Functionality to send the feeding command to the robot
});

// Water drinking alert
document.getElementById('waterAlert').addEventListener('click', function() {
    alert("Water drinking alert activated!");
    // Functionality to activate water drinking alert 
});

// Poop clean-up action
document.getElementById('cleanPoop').addEventListener('click', function() {
    alert("Poop cleaned up!");
    // Functionality to clean up poop by robot
});

// Timer setting for pet activities
document.getElementById('setTimer').addEventListener('click', function() {
    const timer = document.getElementById('timerInput').value;
    alert(`Timer set for ${timer}`);
    // Functionality to set a timer
});

// Emergency doctor assistance
document.getElementById('emergencyButton').addEventListener('click', function() {
    alert("Contacting the doctor...");
    // Functionality to connect with a doctor in case of emergency
});

// Simulated health data updates
function updateHealthData() {
    document.getElementById('weight').innerText = (Math.random() * 5 + 10).toFixed(1); // Random weight between 10-15 kg
    document.getElementById('petTemperature').innerText = (Math.random() * 2 + 37).toFixed(1); // Temperature 37-39°C
    document.getElementById('heartRate').innerText = Math.floor(Math.random() * 30 + 70); // Heart rate 70-100 bpm
}

// Update health data every 5 seconds
setInterval(updateHealthData, 5000);

// GPS Tracking functionality
document.getElementById('trackPet').addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById('gpsLocation').innerText = `Lat: ${lat}, Lon: ${lon}`;
        alert(`Tracking pet location: Lat: ${lat}, Lon: ${lon}`);
        // Functionality to track the pet's GPS location
    }, function(error) {
        alert("Unable to fetch GPS location");
    });
});
