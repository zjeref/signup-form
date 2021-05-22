const form = document.querySelector("form");
const inputs = form.querySelectorAll("input")
const Fname = inputs[0];
const Lname = inputs[1];
const Email = inputs[2];
const Pass = inputs[3];

let first = false;
let last = false;
let eid = false;
let pwd = false;

form.addEventListener('submit', checkInputs)

function checkInputs(e) {
    e.preventDefault();

    if(Fname.value ==="") {
        setError(Fname,"First name cannot be blank");
        first = false;
    }
    else if (Fname.value <=2) {
        setError(Fname, "Name is too short");
        first = false;
    } else {
        setSucces(Fname);
        first = true;
    }

    if(Lname.value ==="") {
        setError(Lname,"Last name cannot be blank");
        last = false;
    }
    else if (Lname.value <=2) {
        setError(Lname, "Name is too short");
        last= false;
    } else {
        setSucces(Lname);
        last= true;
    }

    if (Email.value === "") {
        setError(Email, "Email cannot be blank");
        eid = false;
    }
    else if (!isEmail(Email.value)) {
        setError(Email, "Not a valid Email");
        eid = false;
    }
    else {
        setSucces(Email);
        eid = true;
    }

    if (Pass.value === ""){
        setError(Pass, "Pass cannot be empty");
        pwd = false;
    }
    else if (Pass.value <=6) {
        setError(Pass, "Pass is too short");
        pwd = false;
    }
    else {
        setSucces(Pass);
        pwd = true;
    }

    validate();
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setError(input, message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('small')
    const icon = formControl.querySelector('img');
    error.innerText = message;
    icon.style.opacity = 1;
    input.classList = "input-error";
}

function setSucces(input) {
    const formControl = input.parentElement;
    const error = formControl.querySelector('small')
    const icon = formControl.querySelector('img');
    error.innerText = "";
    icon.style.opacity = 0;
    input.classList = "";
}

function validate() {
    if(first && last && eid && pwd === true) {
        form.submit();
    }
}