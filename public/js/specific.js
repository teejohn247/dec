const payAll = (id) => {
  const storage = JSON.parse(localStorage.getItem('Employee'));
   
    
        fetch(
         `http://localhost:3000/employees/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": 'application/json', 
            },
            body: JSON.stringify({ email:storage.email, firstName: storage.firstName, lastName: storage.lastName,
              address:storage.address, mobile: storage.mobile, status: 'PAID', salary:storage.salary,
             maritalStatus:storage.maritalStatus})
        })
  
            .then(res => res.json())
            .then(data => {
    console.log(data)
    window.location.href = "./viewAll.html"
                
         
            })
            .catch(error => console.log(error.message));
        event.preventDefault();
    };
    
  
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
          const {id, email, firstName, lastName,
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
  
      const populate = () => {  
    
        const storage = JSON.parse(localStorage.getItem('specific'));
        const id = storage.id;
        console.log(storage); 
        const jumbo = document.querySelector('.jumbotron');
        const h = document.createElement('h1');
        const p1 = document.createElement('h4');
        const p2 = document.createElement('h4');
        const p3 = document.createElement('h4');
        const p4 = document.createElement('h4');
        const p5 = document.createElement('h4');
        const p6 = document.createElement('h4');
  
        const btnn = document.createElement('a');
        const btnn2 = document.createElement('a');
  
  
  
        jumbo.append(h,p1,p2,p3,p4,p5,p6,btnn,btnn2);
        h.textContent =`Name: ${storage.firstName} ${storage.lastName}`;
        p1.textContent =`Marital Status: ${storage.maritalStatus}`;
        p2.textContent =`Mobile Number:  ${storage.mobile}`;
        p3.textContent =`Payment Status: ${storage.status}`;
        p4.textContent =`Salary: ${storage.salary}`;
        p5.textContent =`Address: ${storage.address}`;
        p6.textContent =`Email: ${storage.email}`;
  
  
        btnn.textContent =`Learn more`;
        btnn.innerHTML = `<a href="./editForm.html"><button class="btn btn-primary btn-lg">Edit</button></a>`
        btnn.setAttribute('class', 'btn btn-primary btn-lg');
        btnn2.innerHTML = `<button class="btn btn-primary btn-lg" onclick = "payAll(${id})">pay</button>`
        btnn2.setAttribute('class', 'btn btn-primary btn-lg');
      };
      populate();