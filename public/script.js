const form = document.getElementById("input-area")
const input = document.getElementById("random-number");
const url = new URL("http://127.0.0.1:3000/");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevents refreshing page after value submission
    console.log("value submitted 1");
    let numberValue = input.value;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain",
        },
        body: numberValue,
    })
    
    console.log("value submitted 2");
});