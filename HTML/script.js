
const form = document.querySelector('.class-form-1')
    const background = document.querySelector('.mascara-form')
    function cliqueiNoBottao(){
    // function showForm(){
        form.style.left = '50%'
        form.style.transform = 'translateX(-50%)'
        background.style.visibility = 'visible'
    // } 
}
    function hideForm() {
        form.style.left = '-370px'
        form.style.transform = 'translateX(0)'
        background.style.visibility = 'hidden'
    }
 