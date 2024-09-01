let isSpanish = false; // Flag to track the current language

function toggleLanguage() {
    if (isSpanish) {
        // Switch to English
        document.getElementById('headerTitle').innerText = "My Notebook";
        document.getElementById('navTranslation').innerText = "Translation";
        document.getElementById('navNotebook').innerText = "Notebook";
        document.getElementById('navComments').innerText = "Comments";
        document.getElementById('navAffirmations').innerText = "Affirmations";

        document.getElementById('translationTitle').innerText = "Translation Tool";
        document.getElementById('personalButton').innerText = "Personal Experiences";
        document.getElementById('essaysButton').innerText = "Critical Essays";
        document.getElementById('poemsButton').innerText = "Poems";
        document.getElementById('saveButton').innerText = "Save Entry";
        document.getElementById('commentsTitle').innerText = "Comments";
        document.getElementById('submitButton').innerText = "Submit";
        document.getElementById('affirmationsTitle').innerText = "Daily Affirmations";
        document.getElementById('getAffirmationButton').innerText = "Get New Affirmation";
        document.getElementById('contactInfo').innerHTML = 'Contact us at: <a href="mailto:info@example.com">info@example.com</a>';
    } else {
        // Switch to Spanish
        document.getElementById('headerTitle').innerText = "Mi Cuaderno";
        document.getElementById('navTranslation').innerText = "Traducción";
        document.getElementById('navNotebook').innerText = "Cuaderno";
        document.getElementById('navComments').innerText = "Comentarios";
        document.getElementById('navAffirmations').innerText = "Afirmaciones";

        document.getElementById('translationTitle').innerText = "Herramienta de Traducción";
        document.getElementById('personalButton').innerText = "Experiencias Personales";
        document.getElementById('essaysButton').innerText = "Ensayos Críticos";
        document.getElementById('poemsButton').innerText = "Poemas";
        document.getElementById('saveButton').innerText = "Guardar Entrada";
        document.getElementById('commentsTitle').innerText = "Comentarios";
        document.getElementById('submitButton').innerText = "Enviar";
        document.getElementById('affirmationsTitle').innerText = "Afirmaciones Diarias";
        document.getElementById('getAffirmationButton').innerText = "Obtener Nueva Afirmación";
        document.getElementById('contactInfo').innerHTML = 'Contáctanos en: <a href="mailto:info@example.com">info@example.com</a>';
    }

    // Toggle the language flag
    isSpanish = !isSpanish;
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
// Initialize the page with English content
toggleLanguage(); // This is to set the initial state
