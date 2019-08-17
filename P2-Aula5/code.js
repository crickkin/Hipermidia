function ToggleElement(action, elementId) {
    elemento = document.getElementById(elementId);

    if (elemento.style.display == 'none') {
        elemento.style.display = 'block';
        action.innerText = 'Ocultar Conteúdo';
    }
    else {
        elemento.style.display = 'none';
        action.innerText = 'Mostrar Conteúdo';
    }
}

let action1 = document.getElementById('enlace_1');
action1.addEventListener('click', () => { ToggleElement(action1, 'conteudo_1') } , false);

let action2 = document.getElementById('enlace_2');
action2.addEventListener('click', () => { ToggleElement(action2, 'conteudo_2') } , false);

let action3 = document.getElementById('enlace_3');
action3.addEventListener('click', () => { ToggleElement(action3, 'conteudo_3') }, false)