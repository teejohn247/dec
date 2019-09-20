const storage = JSON.parse(localStorage.getItem('specific'));
const id = storage.id;
const emp = document.querySelector('.in');
const form = document.createElement('form');

form.setAttribute('role','form');

emp.appendChild(form);
form.innerHTML =
`
<div class="form-group">
    <label>First Name</label>
    <input type="text" value="${storage.firstName}" class="firstName form-control" placeholder="Enter text">
</div>
<div class="form-group">
    <label>Last Name</label>
    <input type="text" value="${storage.lastName}" class="lastName form-control" placeholder="Enter text">
</div>
<div class="form-group">
        <label>Email</label>
        <input type="email" value="${storage.email}" class="email form-control" placeholder="Enter text">
</div>
<div class="form-group">
        <label>Mobile</label>
        <input type="tel" value="${storage.mobile}" class="mobile form-control" placeholder="Enter text">
    </div>
    <div class="form-group">
            <label>Salary</label>
             <input type="number" value="${storage.salary}" class="salary form-control" placeholder="Enter text">
     </div>
    <div class="form-group">
            <label>Address</label>
     <input type="text" value="${storage.address}" class="address form-control" placeholder="Enter text">
        </div>
        
                    <label>Marital Status</label>
             <input type="text" value="${storage.maritalStatus}" class="maritalStatus form-control" placeholder="Enter text">
                </div>
<button type="button" class="btn btn-default" onclick = "updateEmployee(${id})">Update Employee</a>
`

const updateEmployee = (id) => {
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const address = document.querySelector(".address");
const mobile = document.querySelector(".mobile");
const status = document.querySelector(".status");
const salary = document.querySelector(".salary");

const maritalStatus = document.querySelector(".maritalStatus");
    fetch(
     `http://localhost:3000/employees/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": 'application/json', 
        },
        body: JSON.stringify({ email:email.value, firstName: firstName.value, lastName: lastName.value,
          address:address.value, mobile: mobile.value, status: 'UNPAID', salary:salary.value,
         maritalStatus:maritalStatus.value})
    })
        .then(res => res.json())
        .then(data => {
console.log(storage)
window.location.href ="./viewAll.html"

          localStorage.setItem("Employee", JSON.stringify(data));
      //window.location = "../index.html";
    }
    )
		.catch(error => console.log(error.message));
	event.preventDefault();
};
