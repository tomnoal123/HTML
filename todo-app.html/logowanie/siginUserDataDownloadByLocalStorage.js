

const form = document.getElementById('user-data-form');
const signinButton = document.getElementById('sign-button');
const checkbox = document.getElementById('checkbox');




function userInfo (){
const userData = [];
const inputs = document.querySelectorAll('input');


inputs.forEach((input) =>{
    if (input.type !== "checkbox") {
    userData.push(input.value)
}});
    localStorage.setItem("userData", JSON.stringify(userData));
    return userData;
};




signinButton.addEventListener("click", function(){
    const data = userInfo();
    const saved = JSON.parse(localStorage.getItem("userData"));
    console.log(saved);
})


form.addEventListener("submit", function(f){
    if(!checkbox.checked){
        f.preventDefault();
        alert("Musisz zaakcpetować regulamin");
    }
})


