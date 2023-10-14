// Handle Toggle Switch
const toggleSwitch = document.getElementById("review-cal-toggle-switch");
const card1 = document.querySelector(".review-cal-toggle-card-1");
const card2 = document.querySelector(".review-cal-toggle-card-2");

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    card1.classList.remove("review-cal-toggle-active-card");
    card2.classList.add("review-cal-toggle-active-card");
    document.querySelector(".toggle-card").style.display = "block";
  } else {
    card1.classList.add("review-cal-toggle-active-card");
    card2.classList.remove("review-cal-toggle-active-card");
    document.querySelector(".toggle-card").style.display = "none";
  }
});





// Handle Current Review Input Range and Number Field
const currentReviewInputRange = document.getElementById("current-review");
const currentReviewNumberField = document.getElementById("input2");

// Update number field when input range changes
currentReviewInputRange.addEventListener("input", function () {
  const value = parseInt(currentReviewInputRange.value);
  currentReviewNumberField.value = value;
});

// Update input range when number field changes
currentReviewNumberField.addEventListener("input", function () {
  let value = parseInt(currentReviewNumberField.value);
  
  // Ensure the value is within the valid range (min and max)
  value = Math.min(1000, Math.max(1, value));
  currentReviewInputRange.value = value;
  currentReviewNumberField.value = value; 
});

// Add a condition to limit the input field value to 1000
currentReviewNumberField.addEventListener("change", function () {
  let value = parseInt(currentReviewNumberField.value);
  
  if (value > 1000) {
    value = 1000;
    currentReviewNumberField.value = value;
  }
  currentReviewInputRange.value = value; 
});

currentReviewInputRange.dispatchEvent(new Event("input"));






// Set The Limit of Current Rating
function limitInputCurrentRatingInputRange(inputElement) {
  var currentValue = inputElement.value;
  if (parseInt(currentValue) > 4.9) {
      inputElement.value = 4.9;
  }
}

// Set The Limit of Toggle Card Input Range
function limitInputToggleCardInputRange(inputElement) {
  var currentValue = inputElement.value;
  if (parseInt(currentValue) > 100) {
      inputElement.value = 100;
  }
}






// Handle Current and Desired Rating
// Get references to the elements
const currentRatingRange = document.getElementById("current-rating");
const desiredRatingRange = document.getElementById("desired-rating");
const currentRatingInput = document.getElementById("input1");
const desiredRatingInput = document.getElementById("input3");

// Set initial values
let initialCurrentRating = parseFloat(currentRatingRange.value);
let initialDesiredRating = parseFloat(desiredRatingRange.value);
currentRatingInput.value = initialCurrentRating;
desiredRatingInput.value = initialDesiredRating;

// Define the event handler for the "Current Rating" input range
const updateDesiredRating = function () {
  const currentRating = parseFloat(currentRatingRange.value);
  currentRatingInput.value = currentRating;

  // Update "Desired Rating" range constraints
  desiredRatingRange.min = (currentRating + 0.1).toFixed(1);
  desiredRatingRange.value = desiredRatingRange.min; // Set to the minimum value

  // Update "Desired Rating" input values
  desiredRatingInput.value = desiredRatingRange.value;
};

currentRatingRange.addEventListener("input", updateDesiredRating);
currentRatingInput.addEventListener("input", function () {
  let currentRating = parseFloat(this.value);
  currentRating = Math.max(parseFloat(currentRatingRange.min), Math.min(parseFloat(currentRatingRange.max), currentRating));
  currentRatingRange.value = currentRating;

  // Update "Desired Rating" range constraints
  desiredRatingRange.min = (currentRating + 0.1).toFixed(1);
  desiredRatingRange.value = desiredRatingRange.min; // Set to the minimum value

  // Update "Desired Rating" input values
  desiredRatingInput.value = desiredRatingRange.value;
});

// Define the event handler for the "Desired Rating" range input
desiredRatingRange.addEventListener("input", function () {
  const desiredRating = parseFloat(this.value);
  desiredRatingInput.value = desiredRating;
});

// Define the event handler for the "Desired Rating" input
desiredRatingInput.addEventListener("input", function () {
  let desiredRating = parseFloat(this.value);
  if (desiredRating < parseFloat(desiredRatingRange.min)) {
    desiredRating = parseFloat(desiredRatingRange.min);
  } else if (desiredRating > parseFloat(desiredRatingRange.max)) {
    desiredRating = parseFloat(desiredRatingRange.max);
  }
  desiredRatingRange.value = desiredRating;
  this.value = desiredRating;
});

// Set the initial "Desired Rating" range constraints
desiredRatingRange.min = (initialCurrentRating + 0.1).toFixed(1);

updateDesiredRating();


