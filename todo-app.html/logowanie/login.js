import { getUserData } from "./storage.js";

const form = document.getElementById('main-login-form');
if (form){
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const checkBox = document.getElementById('login-checkbox');

form.addEventListener("submit", function(e){
    e.preventDefault();
    const userData = getUserData();

    if (
        inputUsername.value !== userData.username ||inputPassword.value !== userData.password) {

        alert('Niepoprawne dane');
        return;
    }
    if(checkBox.checked){
    
    localStorage.setItem("RememberUserData", JSON.stringify({
        username: inputUsername.value,
        password: inputPassword.value
    }));
    };
   window.location.href = "todoapp.html";
})
}
    


    

