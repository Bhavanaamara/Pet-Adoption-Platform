// Client-side validation for registration form
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Validate form fields
    // If valid, submit form
    // If invalid, display error messages
  });
  
  // Fetch and display pet listings from database or API
  // Implement search functionality to filter pet listings based on user preferences
// Sample pet data
const pets = [
    { name: "Buddy", breed: "Golden Retriever", age: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEIgD7fsetn3kNNzcNFW4uvjJDfGLaycNCaq0kf8L9g&s" },
    { name: "Socks", breed: "Tabby Cat", age: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFXpqkIe7eo1l2S766rwzjtIKoOH61M_pNttdCHNhFA&s" },
    { name: "Max", breed: "German Shepherd", age: 4, image: "https://media.istockphoto.com/id/806942944/photo/german-shepherd-dog.jpg?s=612x612&w=0&k=20&c=rm9Gt3YgnBxtPGbG2U1HdCj7vlfhE0T3fBJN4hZ2KOk=" }
  ];
  
  // Function to display pet listings
  function displayPetListings() {
    const petListingsContainer = document.getElementById("petListings");
    petListingsContainer.innerHTML = ""; // Clear existing listings
  
    pets.forEach(pet => {
      const petDiv = document.createElement("div");
      petDiv.classList.add("pet");
  
      const image = document.createElement("img");
      image.src = pet.image;
      petDiv.appendChild(image);
  
      const name = document.createElement("h2");
      name.textContent = pet.name;
      petDiv.appendChild(name);
  
      const breed = document.createElement("p");
      breed.textContent = `Breed: ${pet.breed}`;
      petDiv.appendChild(breed);
  
      const age = document.createElement("p");
      age.textContent = `Age: ${pet.age}`;
      petDiv.appendChild(age);
  
      petListingsContainer.appendChild(petDiv);
    });
  }
  
  // Call the function to display pet listings when the page loads
  window.addEventListener("load", displayPetListings);
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulate login functionality (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
      // Successful login
      window.location.href = 'dashboard.html'; // Redirect to dashboard page
    } else {
      // Failed login
      document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
  });
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate password match
    if (password !== confirmPassword) {
      document.getElementById('errorMessage').textContent = 'Passwords do not match';
      return;
    }
  
    // Simulate registration functionality (replace with actual registration logic)
    // Here, we just display the registered user's details
    alert(`Registration Successful!\nUsername: ${username}\nEmail: ${email}`);
  });
    