const updateEmployee = (id) => {
   
    
    const maritalStatus = document.querySelector(".maritalStatus");
        fetch(
         `http://localhost:3000/employees`, {
          method: 'PUT',
          headers: {
            "Content-Type": 'application/json', 
            },
            body: JSON.stringify({ status: 'PAID'})
        })
            .then(res => res.json())
            .then(data => {
    alert('updated')
    
              localStorage.setItem("payAll", JSON.stringify(data));
          //window.location = "../index.html";
        }
        )
            .catch(error => console.log(error.message));
        event.preventDefault();
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
        const jumbo = document.querySelector('.jumbotron');
        const btnn = document.createElement('a');
    
    
        jumbo.append( btnn);
        btnn.textContent =`Learn more`;
        btnn.innerHTML = `<a  onclick = "updateEmployee()"><button class="btn btn-primary"
        style = "margin-left:10%">Confirm Payment</button></a>`
        btnn.setAttribute('class', 'btn btn-primary btn-lg');
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

   
    
    
    
    trr.append(thh1,thh2,thh3,thh4,thh5,thh7,thh8,thh9);
    theadd.appendChild(trr);
    tab.appendChild(theadd);
    
    thh1.textContent= `${id}`;
    thh2.textContent= `${firstName}`;
    thh3.textContent= `${lastName}`;
    thh4.textContent= `${salary}`;
    thh5.textContent= `${status}`;
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
    