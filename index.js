const bar = document.querySelector('.bar');
const m_menu = document.querySelector('.m-menu');


bar.addEventListener('click',toggle);

function toggle(){
    if (m_menu.classList.contains('t')){
        m_menu.classList.remove('t');
        // setTimeout(()=> {
        //     m_menu.classList.add('t');      
        // },4000)
    }else{
        m_menu.classList.add('t');
    }
    
}

// m_menu.addEventListener('scroll', rmve)
// function rmve() {
//     m_menu.classList.add('t')
// }