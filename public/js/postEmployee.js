const add = document.querySelector(".employee");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const address = document.querySelector(".address");
const mobile = document.querySelector(".mobile");
const status = document.querySelector(".status");
const salary = document.querySelector(".salary");

const maritalStatus = document.querySelector(".maritalStatus");


add.addEventListener("submit", event => {
    fetch(
    "http://localhost:3000/employees", {
        method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
        body: JSON.stringify({ email:email.value, firstName: firstName.value, lastName: lastName.value,
         address:address.value, mobile: mobile.value, status: 'UNPAID', salary: salary.value,
        maritalStatus:maritalStatus.value})
	})
		.then(res => res.json())
		.then(data => {
            localStorage.setItem("Employee", JSON.stringify(data));
				window.location = "../viewAll.html";
			}
			)
		.catch(error => console.log(error.message));
	event.preventDefault();
});