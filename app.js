const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fnameValue === ""){
        setErrorFor(fname, "Firstname cannot be blank");
    }
    else{
        setSuccessFor(fname);
    }

    if (lnameValue === ""){
        setErrorFor(lname, "Lastname cannot be blank");
    }
    else {
        setSuccessFor(lname);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    }
    else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    }
    else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


