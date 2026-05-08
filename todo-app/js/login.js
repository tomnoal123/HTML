import { getUserData } from "./storage.js";

const form = document.getElementById('main-login-form');

if (form) {
    const inputUsername = document.getElementById('input-username');
    const inputPassword = document.getElementById('input-password');
    const checkBox = document.getElementById('login-checkbox');

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const users = getUserData();

        const user = users.find(u =>
            u.username === inputUsername.value &&
            u.password === inputPassword.value
        );

        if (!user) {
            alert("Niepoprawne dane");
            return;
        }

        if (checkBox.checked) {
            localStorage.setItem("RememberUserData", JSON.stringify({
                username: inputUsername.value,
                password: inputPassword.value
            }));
        }

        window.location.href = "../aplikacja/todoapp.html";
    });
}