function CalculateAge() {
    let year = new Date(document.getElementById("ano").value);
    let text = document.getElementById("texto");
    let data = new Date();

    let currentAge = new Date(data.getTime() - year.getTime());

    let age = currentAge.getFullYear() - 1970;
    let month = currentAge.getMonth();
    let day = currentAge.getDay();

    text.innerHTML = "Sua idade é " + age + " anos, " + month + " meses e " + day + " dias";
}