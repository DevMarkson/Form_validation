const first_name = document.getElementById("name");
const last_name = document.getElementById("lname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const form = document.querySelector("form");
const first_name_error = document.querySelector(".first_name_error");
const last_name_error = document.querySelector(".last_name_error");
const email_error = document.querySelector(".email_error");
const pwd_error = document.querySelector(".pwd_error");
const img = document.querySelectorAll('img')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(first_name.value === '') {
    first_name_error.textContent = 'First Name cannot be blank'
    last_name_error.textContent = 'Last Name cannot be blank'
    email_error.textContent = 'Not a valid email'
    pwd_error.textContent = 'Password cannot be blank'
    img.forEach((item) => {
      item.classList.add('show')
    })
  } else {
    first_name_error.remove()
    last_name_error.remove()
    email_error.remove()
    pwd_error.remove()
  }
});

first_name.onchange = function() {
  if(first_name.value !== '') {
    first_name_error.remove()
  } else {
    console.log('zuri');
  }
}
last_name.onchange = function() {
  if(first_name.value !== '') {
    last_name_error.remove()
  } else {
    console.log('zuri');
  }
}
email.onchange = function() {
  if(first_name.value !== '') {
    email_error.remove()
  } else {
    console.log('zuri');
  }
}
pwd.onchange = function() {
  if(pwd.value !== '') {
    pwd_error.remove()
  } else {
    console.log('zuri');
  }
}


// if (
//     first_name.value === "" ||
//     last_name === "" ||
//     email.value === "" ||
//     pwd.value === ""
//   ) {
//     console.log("empty");
    
//   } 