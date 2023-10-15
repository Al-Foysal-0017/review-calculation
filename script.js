/*
Handle Toggle Switch
Handle Toggle Switch
Handle Toggle Switch
*/
const toggleSwitch = document.getElementById("rvwCaltn-toggle-switch");
const card1 = document.querySelector(".rvwCaltn-toggle-card-1");
const card2 = document.querySelector(".rvwCaltn-toggle-card-2");

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    card1.classList.remove("rvwCaltn-toggle-active-card");
    card2.classList.add("rvwCaltn-toggle-active-card");
    document.querySelector(".toggle-card").style.display = "block";
  } else {
    card1.classList.add("rvwCaltn-toggle-active-card");
    card2.classList.remove("rvwCaltn-toggle-active-card");
    document.querySelector(".toggle-card").style.display = "none";
  }
});

// Set The Limit of Toggle Card Input Range
function limitInputToggleCardInputRange(inputElement) {
  var currentValue = inputElement.value;
  if (parseInt(currentValue) > 100) {
      inputElement.value = 100;
  }
}





/*
Handle Current Review
Handle Current Review
Handle Current Review
*/
// Set The Limit of Current Rating
function limitInputCurrentRatingInputRange(inputElement) {
  var currentValue = inputElement.value;
  if (parseInt(currentValue) > 4.9) {
      inputElement.value = 4.9;
  }
}

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






/*
Handle Current-Rating and Desired-Rating
Handle Current-Rating and Desired-Rating
Handle Current-Rating and Desired-Rating
*/
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






/*
Handle Color and Style of "Current-Ratings" and "Desired-Ratings" input range track-bar
Handle Color and Style of "Current-Ratings" and "Desired-Ratings" input range track-bar
Handle Color and Style of "Current-Ratings" and "Desired-Ratings" input range track-bar
*/
function updateRangeStyles(inputElement) {
  const minValue = parseFloat(inputElement.getAttribute("min"));
  const maxValue = parseFloat(inputElement.getAttribute("max"));
  const value = parseFloat(inputElement.value);

  // Calculate the filled width as a percentage
  const filledWidth = ((value - minValue) / (maxValue - minValue)) * 100;

  // Set the filled color and unfilled color based on your desired logic
  let filledColor, unfilledColor;

  if (inputElement === currentRatingRange) {
    filledColor = "#4051B5";
    unfilledColor = "#C8CEE7";
  } else if (inputElement === desiredRatingRange) {
    filledColor = "#4051B5";
    unfilledColor = "#C8CEE7";
  }

  // Set the background style based on filled and unfilled colors
  inputElement.style.background = `linear-gradient(to right, ${filledColor} 0%, ${filledColor} ${filledWidth}%, ${unfilledColor} ${filledWidth}%, ${unfilledColor} 100%)`;
}

updateRangeStyles(currentRatingRange);
updateRangeStyles(desiredRatingRange);

// Function to update the "Desired Rating" range based on the "Current Rating"
function updateDesiredRatingRange(currentValue) {
  const newMinValue = (currentValue + 0.1).toFixed(1);
  desiredRatingRange.min = newMinValue;
  desiredRatingRange.value = newMinValue; 
  updateRangeStyles(desiredRatingRange);
}

currentRatingRange.addEventListener("input", function() {
  updateRangeStyles(currentRatingRange);
  updateDesiredRatingRange(parseFloat(this.value));
});

currentRatingInput.addEventListener("input", function() {
  updateRangeStyles(currentRatingRange);
  updateDesiredRatingRange(parseFloat(this.value));
});

desiredRatingRange.addEventListener("input", function() {
  updateRangeStyles(desiredRatingRange);
});

desiredRatingInput.addEventListener("input", function() {
  updateRangeStyles(desiredRatingRange);
});

desiredRatingInput.addEventListener("input", function () {
  let desiredRating = parseFloat(this.value);
  if (desiredRating < parseFloat(desiredRatingRange.min)) {
    desiredRating = parseFloat(desiredRatingRange.min);
  } else if (desiredRating > parseFloat(desiredRatingRange.max)) {
    desiredRating = parseFloat(desiredRatingRange.max);
  }
  desiredRatingRange.value = desiredRating;
  this.value = desiredRating;

  // Update the filled and unfilled color for the "Desired Rating" range
  updateRangeStyles(desiredRatingRange);
});






/*
Handle Color and Style of "Current Reviews" input range track-bar
Handle Color and Style of "Current Reviews" input range track-bar
Handle Color and Style of "Current Reviews" input range track-bar
*/ 
function updateRangeStyles(inputElement) {
  const minValue = parseFloat(inputElement.getAttribute("min"));
  const maxValue = parseFloat(inputElement.getAttribute("max"));
  const value = parseFloat(inputElement.value);
  const filledWidth = ((value - minValue) / (maxValue - minValue)) * 100;
  let filledColor, unfilledColor;
  filledColor = "#4051B5";
  unfilledColor = "#C8CEE7";
  inputElement.style.background = `linear-gradient(to right, ${filledColor} 0%, ${filledColor} ${filledWidth}%, ${unfilledColor} ${filledWidth}%, ${unfilledColor} 100%)`;
}

const rangeInput = document.getElementById("current-review");
const inputNumber = document.getElementById("input2");

updateRangeStyles(rangeInput);

rangeInput.addEventListener("input", function() {
  updateRangeStyles(rangeInput);
  inputNumber.value = this.value;
});

inputNumber.addEventListener("input", function() {
  const newValue = parseFloat(this.value);
  if (newValue >= parseFloat(rangeInput.getAttribute("min")) && newValue <= parseFloat(rangeInput.getAttribute("max"))) {
    rangeInput.value = newValue;
    updateRangeStyles(rangeInput);
  }
});
