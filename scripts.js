function translateText() {
    const text = document.getElementById('englishText').value;
    // Call translation API here
    // Update the Spanish translation area
    document.getElementById('spanishText').innerText = "Translated text goes here";
}

function saveEntry() {
    const text = document.getElementById('entryText').value;
    // Save entry to database
    alert('Entry saved!');
}

function submitComment(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('commentText').value;
    // Save comment to database
    alert('Comment submitted!');
}

function getAffirmation() {
    // Define a list of affirmations
    const affirmations = [
        "You are capable of amazing things.",
        "Believe in yourself and all that you are.",
        "Your potential is limitless.",
        "You are stronger than you think.",
        "Every day is a new beginning.",
        "You have the power to create change.",
        "Believe in the magic within you.",
        "You are enough just as you are."
    ];

    // Generate a random index to select an affirmation
    const randomIndex = Math.floor(Math.random() * affirmations.length);

    // Fetch the affirmation from the array
    const selectedAffirmation = affirmations[randomIndex];

    // Update the HTML element with the selected affirmation
    document.getElementById('affirmationText').innerText = selectedAffirmation;
}