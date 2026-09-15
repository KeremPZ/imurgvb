const signInForm = document.getElementById("signInForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

signInForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    
    if(!emailValue || !passwordValue) {
        alert("lütfen tüm alanı doldurun!");
        return;
    }   
    
    const loginData = {
        email: emailValue,
        password: passwordValue
    };
    console.log("Back-end e gidecek veri:", loginData);
});

