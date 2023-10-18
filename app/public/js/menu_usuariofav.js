let menu_container =[...document.querySelectorAll('.menu-container')]

let show_menu = document.querySelector('.menu')

menu_container.map((el)=>{
    el.addEventListener('click',()=>{
        show_menu.classList.toggle('show-menu')
    })
})