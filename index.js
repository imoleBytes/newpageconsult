const bar = document.querySelector('.bar');
const m_menu = document.querySelector('.m-menu');
const mbars = document.querySelector('.mbars');
const body = document.querySelector('body');



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