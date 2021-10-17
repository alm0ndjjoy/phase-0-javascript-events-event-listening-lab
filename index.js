const input = document.getElementById('input');

function addingEventListener() {
    alert ('I was clicked!');
    input.addEventListener('click', addingEventListener);
};

// input.addEventListener("alert", () => input.textContent = "I was clicked!")
