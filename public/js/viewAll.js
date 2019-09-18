const specific = (id) => {
    fetch(
     `http://localhost:3000/employees/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json', 
        }
        
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        const { email, firstName, lastName,
            address, mobile, status,
           maritalStatus } = data
           localStorage.setItem("specific", JSON.stringify(data));
           const jumbo = document.querySelector('.jumbotron');
           const h = document.createElement('h1');
           const btnn = document.createElement('a');


           jumbo.append(h, btnn);
           h.textContent =`${firstName} ${lastName}`;
           btnn.textContent =`Learn more`;
           btnn.innerHTML = `<a href="./editForm.html"><button class="btn btn-primary btn-lg">Edit</button></a>`
           btnn.setAttribute('class', 'btn btn-primary btn-lg');

        })
    .catch ((error) => {
        console.log(error.message);
    });
    event.preventDefault();
    };

    
    const del = (id) => {
      fetch(
       ` http://localhost:3000/employees/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json', 
          }
      })
              .then(res => res.json())
              .then(data => {
        console.log(id);
               
                    window.location.reload(true);
           
                  })
          .catch(error => console.log(error.message));
      };


const getAll = () => {  

fetch(
 "http://localhost:3000/employees", {
  method: 'GET',
  headers: {
        "Content-Type": 'application/json', 
    },
})
.then(res => res.json())
.then(data => {
    console.log(data)
    const res = data;
    if (res.length > 0) {
      res.map((employees) => {
        const { id, email, firstName, lastName,
            address, mobile, status, salary,
           maritalStatus } = employees

const tab = document.querySelector('.tabb');
const theadd = document.createElement('thead');
const trr = document.createElement('tr');
const thh = document.createElement('th');
const thh1 = document.createElement('th');
const thh2 = document.createElement('th');
const thh3 = document.createElement('th');
const thh4 = document.createElement('th');
const thh5 = document.createElement('th');
const thh6 = document.createElement('th');
const thh7 = document.createElement('th');
const thh8 = document.createElement('th');
const thh9 = document.createElement('th');



trr.append(thh1,thh2,thh3,thh4,thh5,thh6,thh7,thh8,thh9);
theadd.appendChild(trr);
tab.appendChild(theadd);

thh1.textContent= `${firstName}`;
thh2.textContent= `${lastName}`;
thh3.textContent= `${email}`;
thh4.textContent= `${address}`;
thh5.textContent= `${status}`;
thh6.textContent= `${salary}`;
thh7.textContent= `${mobile}`;
thh8.innerHTML= `<a><button class="mybtn" onclick = "specific(${id})" >View</button></a>`
thh9.innerHTML= `<a><button class="mybtn" onclick = "del(${id})" >Delete</button></a>`
})
}
})
.catch ((error) => {
    console.log(error.message);
});
};
getAll()
