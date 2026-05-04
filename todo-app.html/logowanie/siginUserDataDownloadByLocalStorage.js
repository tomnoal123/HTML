

const form = document.getElementById('user-data-form');
const checkbox = document.getElementById('checkbox');
const password = document.getElementById('password-input');
const confirmPassword = document.getElementById('repeat-password-input');
function userInfo (){
const userData = {};
const inputs = form.querySelectorAll('input');

    inputs.forEach((input) =>{
        if (input.type !== "checkbox") {        
    
        userData[input.name] = input.value;
    /* WEAKER OPTION userData.push(input.value)*/
}else{
    
}
});
    localStorage.setItem("userData", JSON.stringify(userData));
    return userData;
};
if (form){


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
   
        const data = userInfo();
        alert("Rejestracja zakończona. Proszę się zalogować");

})};
export function getUserData() {
    return JSON.parse(localStorage.getItem("userData")) || {
        username: '',
        password: ''
    };
}
