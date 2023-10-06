// Get DOM elements
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

// Initial count value
let count = 0;

// Function to update the count and display it
function updateCount() {
  countElement.textContent = `Count: ${count}`;
}

// Event listeners for the buttons
incrementButton.addEventListener("click", () => {
  count++;
  updateCount();
});

decrementButton.addEventListener("click", () => {
  count--;
  updateCount();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCount();
});

// Initial update
updateCount();