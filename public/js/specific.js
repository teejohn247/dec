const specific = (id) => {
    fetch(
     `http://localhost:3000/employees/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json', 
          "Authorization": token
        }
        
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           if (data.length > 0) {
      res.map((employees) => {
        const { email, firstName, lastName,
            address, mobile, status,
           maritalStatus } = employees
           const example = document.querySelector('.examp');
           const h2 = document.createElement('h2')
           example.appendChild('h2');
           h2.textContent =`${maritalStatus}`
        })
    }
    })
    .catch ((error) => {
        console.log(error.message);
    });
    event.preventDefault();
    };