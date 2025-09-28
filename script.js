// Get the input field element by its id
let nameInput = document.getElementById("nameInput");

// Get the button element by its id
let greetBtn = document.getElementById("greetBtn");

// Get the paragraph element where we will show the welcome message
let welcomeMsg = document.getElementById("welcomeMsg");

// When the button is clicked, show a fun personalized message
greetBtn.onclick = function() {
  // Get the value entered by the user
  let userName = nameInput.value;

  // If the input is empty, ask for a name
  if (userName === "") {
    welcomeMsg.textContent = "Please enter your name!";
  } else {
    // Use string concatenation to make a fun message
    welcomeMsg.textContent = "Hey " + userName + "! 🎉 Welcome to Hello Hub!";
  }
};
