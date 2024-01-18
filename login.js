var btn =document.querySelector("button.button2");
var inp_mail =document.getElementById("mail");
var pass=document.getElementById('pass');
var m=''
var pdd=''
var crd=document.querySelector('.alert');

var p=document.createElement("p");
btn.addEventListener("click", handleclick);

function mail(){
    m=inp_mail.value
    pdd=pass.value
    if(m=='')
    {
        p.innerHTML="mail can't be empty!";
        crd.appendChild(p);
        // alert("mail can't be empty!");
    }
    else if(pdd==''){
        p.innerHTML="fill the password";
        crd.appendChild(p);
        // alert('fill the password');
    }
}

function handleclick(){
    mail();
}

// sub();
