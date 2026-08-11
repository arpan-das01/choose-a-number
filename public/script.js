const form = document.getElementById("input-area")
const input = document.getElementById("random-number"); 

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents refreshing page after value submission
    console.log("value submitted");
});