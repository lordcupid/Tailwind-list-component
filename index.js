let icon = document.getElementById("icon")
let flyMenu = document.getElementById("flyIn")

icon.addEventListener("click",function(){
    if(flyMenu.classList.contains("fly-in-menu-container")){
        flyMenu.classList.remove("fly-in-menu-container")
        flyMenu.classList.add("fly-in-menu-container-new")

    }else if(flyMenu.classList.contains("fly-in-menu-container-new")){
        flyMenu.classList.remove("fly-in-menu-container-new")
        flyMenu.classList.add("fly-in-menu-container")

    }
})