let items = ""; // Declare and initialize the variable 'items' with an empty string

const emiji = ["😀", "😃", "😄", "😁", "😆"]; // Declare and initialize the variable 'emiji' with an array of emojis

function emijirepit() {
    for (let i = 0; i < emiji.length; i++) {
        for (let j = 0; j < 2; j++) { // Repeat 10 times for each emoji
            items += `<li>${emiji[i]}</li>`; // Append each emoji to the 'items' string
        }
    }

    let h2title = document.createElement("h2"); // Create an 'h2' element
 // Set the text content of the 'h2' element

    const cardcontainer = document.querySelector("#emiji"); // Select the element with the id 'card' and assign it to 'cardcontainer'
    if (cardcontainer) { // Check if 'cardcontainer' is not null or undefined
        cardcontainer.appendChild(h2title); // Append the 'h2' element to the 'cardcontainer'
        cardcontainer.innerHTML += items; // Append the 'items' string to the 'cardcontainer'
    } else {
        console.error("Element with id 'card' not found"); // Log an error message if 'cardcontainer' is null or undefined
    }

    return items; // Return the 'items' string
}

function copyEmoji(emoji) {
    navigator.clipboard.writeText(emoji); // Copy the emoji to the clipboard
    alert("Copied: " + emoji); // Alert the copied emoji
}

function createEmojiButtons() {
    const cardcontainer = document.querySelector("#emiji");
    if (cardcontainer) {
        for (let i = 0; i < emiji.length; i++) {
            let button = document.createElement("button"); // Create a new button
            button.textContent = `Copy ${emiji[i]}`; // Set the button text
            button.onclick = function() { copyEmoji(emiji[i]); }; // Set the button's onclick event to copy the emoji
            cardcontainer.appendChild(button); // Append the button to the cardcontainer
        }
    } else {
        console.error("Element with id 'card' not found");
    }
}

window.onload = function() {
    emijirepit();
    createEmojiButtons();
}
