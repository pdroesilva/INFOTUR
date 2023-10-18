const fav = [...document.querySelectorAll('.favorito')]
fav.map((el)=>{
    el.addEventListener('click', ()=>{
        el.classList.toggle('material-symbols-outlined-filled')
    })
})
