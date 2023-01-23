const bar = document.querySelector('.bar');
const m_menu = document.querySelector('.m-menu');
const mbars = document.querySelector('.mbars');
const body = document.querySelector('body');
const contact = document.querySelector('.contact-wraper');
const submitBtn = document.querySelector('#submit');
const cv = document.getElementById('cv');
const person = document.getElementById('individual');
// const cb = document.getElementById('cb');






function toggleCV() {
    if (person.value==="Tutor"){
        cv.style.display = "block";        

    }else{
        cv.style.display = "none";
    
    }
}

person.addEventListener('change', toggleCV);



function showModal() {
    contact.classList.remove('hide');
    body.classList.add('short');
}


function closeModal() {    
    contact.classList.add('hide');
    body.classList.remove('short');
}


bar.addEventListener('click',toggle);
let isclicked = false;
function toggle(){
    isclicked!=isclicked;
    if (isclicked==true){
        m_menu.classList.remove('t');
        body.classList.add('short')
        mbars.classList.remove('fa-bars')
        mbars.classList.add('fa-xmark')
    }else{
        m_menu.classList.add('t');
        body.classList.remove('short')
        mbars.classList.add('fa-bars')
        mbars.classList.remove('fa-xmark')

    }
    isclicked = !isclicked;
}

// m_menu.addEventListener('scroll', rmve)
function rmve() {
    m_menu.classList.add('t');
    body.classList.remove('short');
    mbars.classList.add('fa-bars');
    mbars.classList.remove('fa-xmark')


}
