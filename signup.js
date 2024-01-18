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



    if (us == '') {
        var p = document.createElement("p");
        p.innerHTML = "username can't be empty!";
        crd.appendChild(p);
    }
    else if (!(validateuser(us))) {
        var p = document.createElement("p");
        p.innerHTML = "username must be in alphanumeric";
        crd.appendChild(p);
    }
    // else{
    //     var x1=document.getElementById('user')
    //     x1.classList.add('green');
    // }

    if (m == '') {
        var p = document.createElement("p");
        p.innerHTML = "mail can't be empty!";
        crd.appendChild(p);
        // alert("mail can't be empty!");
    }
    else if (!(validateEmail(m))) {
        var p = document.createElement("p");
        p.innerHTML = "Invalid mail format!";
        crd.appendChild(p);
    }

    if (pdd == '') {
        var p = document.createElement("p");
        p.innerHTML = "fill the password";
        crd.appendChild(p);
        // alert('fill the password');
    }
    else {
        // $(document).on('click', '.button2', function () {
        //     // var pdd = $(this).val();
        //     var regPass = "^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-_]).{8,}$";
        //     var color = "Red";
        if (pdd.length > 7) {
            if (!pdd.match(regPass)) {
                var p = document.createElement("p");
                p.innerHTML = "Include a special character and at least one capital letter and number";
                crd.appendChild(p);
            }
        }
        else {
            var p = document.createElement("p");
            p.innerHTML = "Password minimum length be 8";
            crd.appendChild(p);
        }
        // });
    }

    if (pdd != cdd) {
        var p = document.createElement("p");
        p.innerHTML = "Password and confirm must be same!";
        crd.appendChild(p);
    }
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
