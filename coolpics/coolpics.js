
var navitems = document.getElementById("navitems")

function toggle(){
    if(navitems.classList.contains("hidden")){
        navitems.classList.remove("hidden")
    }
    else{
        navitems.classList.add("hidden")
    }

}
document.getElementById('menubutton').addEventListener('click',toggle);

// function handleResize(){
//     const menu = document.getElementById("menubutton")
//     if(window.innerWidth > 1000){
//         menu.classList.remove("")
//     }

// }
// window.addEventListener("resize",handleResize)