const hamburgerBtn = document.querySelector('#hamburger');
const links = document.querySelector('.links')



hamburgerBtn.addEventListener('click', () => {
    links.classList.toggle('show')
    hamburgerBtn.classList.toggle('show')
})
