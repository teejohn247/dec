const login = document.querySelector(".login");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const loginError = document.querySelector(".login-error");


login.addEventListener("submit", event => {
    fetch("http://localhost:3000/admin", {
        method: "POST",
        headers: {
            "Contect-Type": "application/json"
        },
        body: JSON.stringify({email:email.value, password:password.value})
    })
    .then(res => res.json())
    .then(data => {
        console.log(email.value)
        if (email !== email.value && password !== password.value){
            loginError.style.display = "block";
            setTimeout(() => {
                loginError.style.display = "none";
            }, 3000);
        }else{
            window.location.href = '../dashboard.html'
        }
    })
    .catch(error => console.log(error));
    event.preventDefault();
});


