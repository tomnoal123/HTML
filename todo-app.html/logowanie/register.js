

import { setUserData } from "./storage.js";
const form = document.getElementById('user-data-form');
const checkbox = document.getElementById('checkbox');
const password = document.getElementById('password-input');
const confirmPassword = document.getElementById('repeat-password-input');
form.addEventListener("submit", function(f){
    f.preventDefault();
    if(!checkbox.checked){
        alert("Musisz zaakceptować regulamin");
        return;
    }
    if (password.value.length < 10){
        alert('Minimalna długość hasła to 10 znaków');
        return;
        
    }
    if (password.value !== confirmPassword.value ){
        alert("Hasła do siebie nie pasują");
        return;
    }
   
        const userData = {
            username: document.getElementById('username-input').value,
            password: password.value
        };
        setUserData(userData);
        
        alert("Rejestracja zakończona. Proszę się zalogować");
        return;
});








