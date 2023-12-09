let cart = document.querySelector(".cart")
let rightbar = document.querySelector(".rightbar")
let removeSidebar = document.querySelector(".hamburger")

// Display none of the right bar when clicked
removeSidebar.addEventListener('click',function () {
  rightbar.style.display ='none'
})

cart.addEventListener('click',function () {
  rightbar.style.display = 'inline'
})

