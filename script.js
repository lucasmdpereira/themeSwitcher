
const toggle = document.querySelector('div')

    toggle.addEventListener('click', mytoggle)

    function mytoggle(){
        const body = document.querySelector('body')
        const pointer = document.querySelector('.pointer')

        body.classList.toggle('dark')
        pointer.classList.toggle('dark_pointer') 
    }