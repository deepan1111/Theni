const menu = document.getElementsByClassName("ham")[0]
const menuList = document.getElementsByClassName("nav-links")[0]

menu.addEventListener("click", ()=>{
    menu.addEventListener('click',()=>{
        menuList.classList.toggle("active");
    })
})

