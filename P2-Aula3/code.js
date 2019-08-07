function CalculateAge() {
    let year = new Date(document.getElementById("ano").value);
    let text = document.getElementById("texto");
    let data = new Date();

    let currentAge = new Date(data.getTime() - year.getTime());

    let age = currentAge.getFullYear() - 1970;
    let month = currentAge.getMonth();
    let day = currentAge.getDay();

    text.innerHTML = `Sua idade é ${age} anos ${month} meses e ${day} dias`;
}

function VerifyEmail(){
    let email = document.getElementById("email").value;
    let text = document.getElementById('result');

    if (email.indexOf('@') != -1){
        let divArroba = email.split('@');
        let divPonto = divArroba[1].split('.');
            
        text.innerHTML = (divArroba[0] != '' && divArroba[1].indexOf('.') != -1 && divPonto[1] != '')
            ? 'Email Válido' 
            : 'Email Não Válido';
    }
    else{
        text.innerHTML = 'Email Não Válido'
    }
}