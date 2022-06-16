const first_name = document.getElementById("name");
const last_name = document.getElementById("lname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const form = document.querySelector("form");
const first_name_error = document.querySelector(".first_name_error");
const last_name_error = document.querySelector(".last_name_error");
const email_error = document.querySelector(".email_error");
const pwd_error = document.querySelector(".pwd_error");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    first_name.value === "" ||
    last_name === "" ||
    email.value === "" ||
    pwd.value === ""
  ) {
      console.log('empty');
    first_name_error.textContent = "First Name cannot be empty";
    last_name_error.textContent = "Last Name cannot be empty";
    email_error.textContent = "Looks like this is not an email";
    pwd_error.textContent = "Password cannot be empty";
    first_name.style.borderColor = "hsl(0, 100%, 74%)";
    last_name.style.borderColor = "hsl(0, 100%, 74%)";
    email.style.borderColor = "hsl(0, 100%, 74%)";
    pwd.style.borderColor = "hsl(0, 100%, 74%)";
  }

  else {
    console.log("not");
    first_name.style.borderColor = "hsl(246, 25%, 77%)";
    last_name.style.borderColor = "hsl(246, 25%, 77%)";
    email.style.borderColor = "hsl(246, 25%, 77%)";
    pwd.style.borderColor = "hsl(246, 25%, 77%)";
    first_name_error.style.display = "none";
    last_name_error.style.display = "none";
    email_error.style.display = "none";
    pwd_error.style.display = "none";
  }
  
});

// if (
//     first_name.value === "" ||
//     last_name === "" ||
//     email.value === "" ||
//     pwd.value === ""
//   ) {
//     console.log("empty");
    
//   } 