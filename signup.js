var btn = document.querySelector("button.button2");
var inp = document.querySelector('input');
var pass = document.getElementById('pass');

var conf = document.getElementById('con-pass');
var m = ''
var pdd = ''
var cdd = ''
var crd = document.querySelector('.alert');

var p = document.createElement("p");
btn.addEventListener("click", handleclick);


const validateuser = (user) => {
    return user.match(
        /^[0-9a-zA-Z]+$/
    );
};
////////////
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

var regPass = "^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}$";
// const regPass = (pa)=>{
//     return pa.match(
//         /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}$/;
//     );
// };
// const validate = () => {
//     const $result = $('.alert');
//     const user = $('#user').val();
//     const email = $('#mail').val();

//     // console.log(user);
//     // console.log(email);
//     $result.text('');

//     if (validateuser(user)) {
//         return true;
//     } else {
//         $result.text(user + ' must be alphanumerical');
//         $result.css('color', 'red');
//     }

//     if (validateEmail(email)) {
//         return true;
//     } else {
//         $result.text(email + ' is invalid.');
//         $result.css('color', 'red');
//     }
//     return false;
// }
// $('#user').on('input', validate);
// $('#mail').on('input', validate);





function mail() {
    var us = document.getElementById('user').value;
    var inp_mail = document.getElementById("mail");
    m = inp_mail.value
    pdd = pass.value
    cdd = conf.value



    if (!us || !m || !pdd || !cdd) {
        var p = document.createElement("p");
        p.innerHTML = "All fields must be filled!";
        crd.appendChild(p);
        return;
    }
    else {
        if (!(validateuser(us))) {
            var p = document.createElement("p");
            p.innerHTML = "username must be in alphanumeric";
            crd.appendChild(p);
            return;
        }

        if (!(validateEmail(m))) {
            var p = document.createElement("p");
            p.innerHTML = "Invalid mail format!";
            crd.appendChild(p);
            return;
        }

        if (pdd.length > 7) {
            if (!pdd.match(regPass)) {
                var p = document.createElement("p");
                p.innerHTML = "Include a special character and at least one capital letter and number";
                crd.appendChild(p);
                return;
            }
        }
        else {
            var p = document.createElement("p");
            p.innerHTML = "Password minimum length be 8";
            crd.appendChild(p);
            return;
        }
        if (pdd != cdd) {
            var p = document.createElement("p");
            p.innerHTML = "Password and confirm must be same!";
            crd.appendChild(p);
            return;
        }
    }

    // Retrieve existing users from local storage
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username or email already exists
    if (existingUsers.some(user => user.username === us || user.email === m)) {
        var p = document.createElement("p");
        p.innerHTML = "Username or email already exists. Please choose a different one.";
        crd.appendChild(p);
        // crd.innerHTML = "Username or email already exists. Please choose a different one.";
        return;
    }

    // Create a new user object
    var newUser = {
        username: us,
        email: m,
        password: pdd
    };

    // Add the new user to the existing users array
    existingUsers.push(newUser);

    // Save the updated users array back to local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Show signup success message
    // signupMessage.innerHTML = "User signed up successfully!";

    // Redirect to the login page
    window.location.href = "index.html";


    // else{
    //     var x1=document.getElementById('user')
    //     x1.classList.add('green');
    // }


    // else {
    //     // $(document).on('click', '.button2', function () {
    //     //     // var pdd = $(this).val();
    //     //     var regPass = "^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}$";
    //     //     var color = "Red";

    //     // });
    // }


}

function handleclick() {

    while (crd.hasChildNodes()) {
        crd.removeChild(crd.lastElementChild);
    }
    // while(inp.classList.value=='green'){
    //     inp.classList.remove('green');
    // }
    mail();
}

// sub();
