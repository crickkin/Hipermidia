let input = document.getElementById('txt');
let span = document.getElementById('mod');

input.addEventListener('input', ChangeText, false);

function ChangeText() {
    span.innerHTML = this.value;
}