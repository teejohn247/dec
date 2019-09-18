$(function() {

  $('#login').submit((e) => {
    e.preventDefault();
const email = document.querySelector(".email").value;
const password = document.querySelector(".password").value;

$.ajax(
  {
     type:'GET',
     url: 'http://localhost:3000/admin',
     success:function(data){
       console.log(data);
       $.each(data, function(index,admin){
         if(admin.email === email && admin.password === password){
           window.location.href = "../viewAll.html"
         }else{
           console.log('error')
         }
       })
     },
     error:function(){
        console.log("no db");
     }
  }
);
})
})
