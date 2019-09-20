const getPaid = () => {  

    fetch(
     "http://localhost:3000/employees?status=UNPAID", {
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
    
    
    
    trr.append(thh1,thh2,thh3,thh4,thh5,thh6,thh7);
    theadd.appendChild(trr);
    tab.appendChild(theadd);
    
    thh1.textContent= `${firstName}`;
    thh2.textContent= `${lastName}`;
    thh3.textContent= `${email}`;
    thh4.textContent= `${address}`;
    thh5.textContent= `${status}`;
    thh6.textContent= `${salary}`;
    thh7.textContent= `${mobile}`;
    })
    }
    })
    .catch ((error) => {
        console.log(error.message);
    });
    };
    getPaid()
    