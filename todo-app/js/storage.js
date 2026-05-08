export function getUserData() {
    const data = JSON.parse(localStorage.getItem("userData"));
    return Array.isArray(data) ? data : [];
}
export function setUserData(data){

    const users = getUserData();

    users.push(data);

    localStorage.setItem("userData", JSON.stringify(users));
}
