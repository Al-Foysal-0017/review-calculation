// // Handle 3 input range fields
// const currentRatingInput = document.getElementById("current-rating");
// const currentRatingValue = document.getElementById("current-rating-value");
// const currentReviewInput = document.getElementById("current-review");
// const currentReviewValue = document.getElementById("current-review-value");
// const desiredRatingInput = document.getElementById("desired-rating");
// const desiredRatingValue = document.getElementById("desired-rating-value");

// // Update the Current Rating value and calculate Desired Rating
// currentRatingInput.addEventListener("input", updateCurrentRating);
// function updateCurrentRating() {
//   const currentRating = parseFloat(currentRatingInput.value);
//   currentRatingValue.textContent = currentRating.toFixed(1);
//   updateDesiredRating(currentRating);
// }

// // Update the Current Review value
// currentReviewInput.addEventListener("input", updateCurrentReview);
// function updateCurrentReview() {
//   const currentReview = parseInt(currentReviewInput.value);
//   currentReviewValue.textContent = currentReview;
// }

// function updateDesiredRating(currentRating) {
//   const desiredRating = currentRating + 0.1;
//   if (desiredRating <= 5.0) {
//     desiredRatingInput.value = desiredRating;
//     desiredRatingValue.textContent = desiredRating.toFixed(1);
//   }
//   else {
//     desiredRatingInput.value = 5.0;
//     desiredRatingValue.textContent = "5.0";
//   }
// }

// updateCurrentRating();



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






