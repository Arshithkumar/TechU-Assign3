var btn = document.querySelector("button.button2");
var inp_mail = document.getElementById("mail");
var pass = document.getElementById('pass');
var m = ''
var pdd = ''
var crd = document.querySelector('.alert');

var p = document.createElement("p");
btn.addEventListener("click", handleclick);

function mail() {
    m = inp_mail.value
    pdd = pass.value
    if (!m || !pdd) {
        p.innerHTML = "Fill all fields";
        crd.appendChild(p);
        // alert("mail can't be empty!");
    }

    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    var matchedUser = existingUsers.find(user => ( user.email === m) && user.password === pdd);

    if (matchedUser) {
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username, email, or password. Please try again.");
    }
}

function handleclick() {
    mail();
}

// sub();
