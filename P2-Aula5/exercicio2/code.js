let button = document.getElementById('addItem');

button.addEventListener('click', () => {
    let input = document.getElementById('input');
    let lista = document.getElementById('lista');
    
    if (input.value != "")
    {
        let newElement = document.createElement('li');
        newElement.textContent = input.value;
    
        lista.appendChild(newElement);
        input.value = "";
    }
}, false);

let lampada = document.getElementById('lamp');

lampada.addEventListener('click', ToggleLamp, false);

function ToggleLamp () {
    this.src = (this.src.includes('off')) ? './img/lampada_on.gif' : './img/lampada_off.gif';
}