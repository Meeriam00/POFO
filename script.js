const menuBtn = document.querySelector('.menubars');
const menu = document.querySelector('menu');
const headersection=document.querySelector('header')

menuBtn.onclick = () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; 
        headersection.style.display='none'
    } else {
        menu.style.display = 'none'; 
    }
};

const leaveBtn = document.querySelector('#Btn');

leaveBtn.onclick = () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        headersection.style.display='block'
    }
};

const login = document.querySelector('#loginBtn');
const loginpage = document.querySelector('.login-page');

login.onclick = () => {
    if (loginpage.style.display === 'none' || loginpage.style.display === '') {
        loginpage.style.display = 'flex';
        headersection.style.display='none'
        menu.style.display='none'
    } else {
        loginpage.style.display = 'none';
    }
};


const user = {
    email: 'meryemabdullayeva@gmail.com',
    password: 'meri2005'
};

const form = document.querySelector("form");
const inputs = document.querySelectorAll('input'); 
const alertBox = document.querySelector('.alert'); 




const closebtn=document.querySelector('#closeBtn')
closebtn.onclick=()=>{
    alertBox.style.position = "relative";
    alertBox.style.zIndex = "-5";

}



const submitedform = (e) => {
    e.preventDefault();

    if (!inputs[0].value || !inputs[1].value) {
        document.querySelector('.alert i').className = "fa-regular fa-circle-xmark";
        document.querySelector('.alert i').style.color='#ff0000'
        document.querySelector('.alert p').innerHTML = '<span>Error</span><br>Your email address is invalid'; 
        alertBox.style.opacity='60%'

    } 

    else if (inputs[0].value === user.email && inputs[1].value === user.password) {
        document.querySelector('.alert i').className = "fa-regular fa-circle-check";
        document.querySelector('.alert i').style.color='#5bec8d'
        document.querySelector('.alert p').innerHTML = '<span>Success</span><br>Your account has been saved'; 
         alertBox.style.opacity='60%'

         
    } 

};




form.onsubmit = submitedform;


function geriQayit() {
    window.location.href = "http://127.0.0.1:5500/index.htmlgit add"; 
}




