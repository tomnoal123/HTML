export function getUserData() {
    return JSON.parse(localStorage.getItem("userData")) || {
        username: '',
        password: ''
    };
}
export function setUserData(data){
    localStorage.setItem("userData", JSON.stringify(data));
}
