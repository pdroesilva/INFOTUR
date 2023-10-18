let labelImg = document.querySelector('#labelImg>img')
let userFile = document.querySelector('#user-img')

console.log(userFile, labelImg)

userFile.addEventListener('change', (e)=>{
    labelImg.src='https://source.unsplash.com/random/250x250/?woman'
    const userTarget = e.target
    const file = userTarget.files[0]

     const reader = new FileReader()

    reader.addEventListener('load', (e)=>{
        const readerTarget = e.target
        labelImg.src=readerTarget.result
    })
    
    reader.readAsDataURL(file)

})