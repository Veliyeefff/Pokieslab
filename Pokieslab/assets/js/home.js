const submenu_link1 = document.querySelector('.submenu-1')
const submenu_link2 = document.querySelector('.submenu-2')
const submenu1 = document.querySelector('.menu-1')
const submenu2 = document.querySelector('.menu-2')
submenu_link1.addEventListener('mouseover', () => {
    submenu1.classList.add('active')
})
submenu_link2.addEventListener('mouseover', () => {
    submenu2.classList.add('active')
})

submenu_link1.addEventListener('mouseleave', () => {
    submenu1.classList.remove('active')
})
submenu_link2.addEventListener('mouseleave', () => {
    submenu2.classList.remove('active')
})

const mobile_link1 = document.querySelector('.mobile-menu-link-1')
const mobile_link2 = document.querySelector('.mobile-menu-link-2')
const active_menu = document.querySelector('.toggle-menu')
const software_menu = document.querySelector('.mobile-menu-1')
const casino_menu = document.querySelector('.mobile-menu-2')

mobile_link1.addEventListener('click', (e) => {
    e.preventDefault()
    active_menu.classList.toggle('toggle-menu-active')
    software_menu.classList.add('active')
    casino_menu.classList.remove('active')
})

mobile_link2.addEventListener('click', (e) => {
    e.preventDefault()
    active_menu.classList.toggle('toggle-menu-active')
    casino_menu.classList.add('active')
    software_menu.classList.remove('active')
})
