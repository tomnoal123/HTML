

const form = document.getElementById('user-data-form');
const signinButton = document.getElementById('sign-button');
const checkbox = document.getElementById('checkbox');
function userInfo (){
const userData = {};
const inputs = form.querySelectorAll('input');

    inputs.forEach((input) =>{
        if (input.type !== "checkbox") {        
    
        userData[input.name] = input.value;
    /* WEAKER OPTION userData.push(input.value)*/
}});
    localStorage.setItem("userData", JSON.stringify(userData));
    return userData;
};

form.addEventListener("submit", function(f){
    if(!checkbox.checked){
        f.preventDefault();
        alert("Musisz zaakceptować regulamin");
    }
    const data = userInfo();
    const saved = JSON.parse(localStorage.getItem("userData"));
})




