let isCharacter = (letter) => {
    return (letter >= 65 && letter <= 90) || (letter >= 97 && letter <= 122);
}

let isNumber = (letter) => {
    return (letter >= 48 && letter <= 57);
}

let isSymbol = (letter) => {
    return (letter >= 33 && letter <= 47) || (letter >= 58 && letter <= 64) || (letter >= 91 && letter <= 96) || (letter >= 123 && letter <= 126);
}

let isSymbolEmail = (letter) => { //only @ and .
    return (letter >= 33 && letter <= 45) || letter == 47 || (letter >= 58 && letter <= 63) || (letter >= 91 && letter <= 96) || (letter >= 123 && letter <= 126);
}

let isSymbolPhone = (letter) => { //only + and -
    return (letter >= 33 && letter <= 42) || letter == 44 || (letter >= 46 && letter <= 47) || (letter >= 58 && letter <= 64) || (letter >= 91 && letter <= 96) || (letter >= 123 && letter <= 126);
}

let validateName = (name) => {

    if(name.length == 0) return false;

    let emptySpaces = 0;

    for(let i = 0; i < name.length; i++) {
        if(name[i] == ' ') emptySpaces++; 
    }

    if (emptySpaces == name.length) return false;

    return true; 
}

let validateEmail = (email) => {

    if(email.length == 0){
        return false;
    } 

    for(let i = 0; i < email.length; i++) {
        if (isSymbolEmail(email.charCodeAt(i))) return false;
    }


    if (!email.includes("@")){
        return false;
    } else if (!email.endsWith(".com") && !email.endsWith(".co.id")){
        return false;
    }

    console.log("Email is valid");
    return true;
}

let validatePhone = (phone) => {

    if(phone.length < 10) return false; 

    for(let i = 0; i < phone.length; i++){
        if(isCharacter(phone.charCodeAt(i)) || isSymbolPhone(phone.charCodeAt(i))) return false; 
    }

    return true;
}

let validateCountry = (country) => {
    if(country == "Select a country") return false;

    return true;
}

const countriesArr = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
                        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
                        "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", 
                        "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cte dIvoire", "Cabo Verde", 
                        "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
                        "Comoros", "Congo CongoBrazzaville", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia Czech Republic", 
                        "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", 
                        "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini fmr Swaziland", "Ethiopia", 
                        "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
                        "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", 
                        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", 
                        "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", 
                        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
                        "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar formerly Burma", 
                        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", 
                        "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
                        "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
                        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
                        "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", 
                        "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "TimorLeste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
                        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
                        "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

const countryContainer = document.getElementById("country");

for (let country of countriesArr){
    const newCountry = document.createElement("option");
    newCountry.innerText = country;
    newCountry.value = country;

    countryContainer.appendChild(newCountry);
}

const subscribeForm = document.getElementById("subscribe-form");

subscribeForm.addEventListener("submit", (e) => {

    let nameValid = true;
    let emailValid = true;
    let phoneValid = true;
    let countryValid = true;
    let checkboxValid = true;

    e.preventDefault();

    const name = document.getElementById("nameinput");

    if(!validateName(name.value)){
        name.parentElement.classList.add("warning");
        name.nextElementSibling.classList.add("show-message");
        nameValid = false;
    } else {
        name.parentElement.classList.remove("warning");
        name.nextElementSibling.classList.remove("show-message");
    }

    const email = document.getElementById("emailinput");

    if(!validateEmail(email.value)){
        email.parentElement.classList.add("warning");
        email.nextElementSibling.classList.add("show-message");
        emailValid = false;
    } else {
        email.parentElement.classList.remove("warning");
        email.nextElementSibling.classList.remove("show-message");
    }

    const phone = document.getElementById("phone-number");

    if(!validatePhone(phone.value)){
        phone.parentElement.classList.add("warning");
        phone.nextElementSibling.classList.add("show-message");
        phoneValid = false;
    } else {
        phone.parentElement.classList.remove("warning");
        phone.nextElementSibling.classList.remove("show-message");
    }

    const country = document.getElementById("country");

    if(!validateCountry(country.value)){
        country.parentElement.classList.add("warning");
        country.nextElementSibling.classList.add("show-message");
        countryValid = false;
    } else {
        country.parentElement.classList.remove("warning");
        country.nextElementSibling.classList.remove("show-message");
    }

    const checkbox = document.getElementById("agreement");

    const spanCheckBox = document.getElementById("agreement-warning");

    if(!checkbox.checked){
        spanCheckBox.id = "agreement-warning-show";
        countryValid = false;
    }


    if(!nameValid || !emailValid || !phoneValid || !countryValid || !checkboxValid){
        return;
    }


    const button = document.getElementById("button-subscribe-id");
    button.innerText = "Subscribed";
    button.style.backgroundColor = "#402218";

})

