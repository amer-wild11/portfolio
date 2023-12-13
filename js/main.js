let scrollUp = document.querySelector(".scroll-up")
let settingsSubmit = document.querySelector(".turn-on-off")
let settings = document.querySelector(".settings")
let themeSub = document.querySelector(".submit")
let blue = document.querySelector("#blue")
let yellow = document.querySelector("#yellow")
let red = document.querySelector("#red")
let green = document.querySelector("#green")
let lightGreen = document.querySelector("#lightGreen")
let bulltes = document.querySelector(".bulltes")
let bulltesY = document.querySelector("#bulltes-Y")
let bulltesN = document.querySelector("#bulltes-N")
let fonts = document.querySelector("#fonts")
let pageLine = document.querySelector(".page-line")
let font1 = document.querySelector(".openSans")
let font2 = document.querySelector(".roboto")
let font3 = document.querySelector(".Poppins")
let font4 = document.querySelector(".Tajawal")
let font5 = document.querySelector(".Montserrat")
let font6 = document.querySelector(".Belanosima")
onscroll = function(){
    if(scrollY > 950){
        scrollUp.style.right = "20px";
    }else{
        scrollUp.style.right = "-100px";
    }
    if(settingsSubmit.getAttribute("settings-mood") == "on"){
        settingsSubmit.setAttribute("settings-mood","off")
        settings.style.left = "-276px"
    }
}
scrollUp.onclick = function(){
    window.scrollTo({top: 0, behavior: 'smooth'})
}

settingsSubmit.onclick = function(){
    if(settingsSubmit.getAttribute("settings-mood") == "on"){
        settingsSubmit.setAttribute("settings-mood","off")
        settings.style.left = "-276px"
    }else{
        settingsSubmit.setAttribute("settings-mood","on")
        settings.style.left = "0"
    }
}

blue.onclick = function(){
    if(blue.checked){
        document.documentElement.style.setProperty('--main-color','#2196f3')
        localStorage.setItem("main-color","#2196f3")
        localStorage.setItem("checked","blue")
    }
}
yellow.onclick = function(){
    if(yellow.checked){
        document.documentElement.style.setProperty('--main-color', '#ff9800');
        localStorage.setItem("main-color","#ff9800")
        localStorage.setItem("checked","yellow")
    }
}
red.onclick = function(){
    if(red.checked){
        document.documentElement.style.setProperty('--main-color','#e91e63')
        localStorage.setItem("main-color","#e91e63")
        localStorage.setItem("checked","red")
    }
}
green.onclick = function(){
    if(green.checked){
        document.documentElement.style.setProperty('--main-color','#009688')
        localStorage.setItem("main-color","#009688")
        localStorage.setItem("checked","green")
    }
}
lightGreen.onclick = function(){
    if(lightGreen.checked){
        document.documentElement.style.setProperty('--main-color','#4caf50')
        localStorage.setItem("main-color","#4caf50")
        localStorage.setItem("checked","lightGreen")
    }
}
bulltesY.onclick = function(){
    if(bulltesY){
        bulltes.style.right = "20px"
        localStorage.setItem("bulltes",true)
    }
}
bulltesN.onclick = function(){
    if(bulltesN){
        bulltes.style.right = "-100px"
        localStorage.setItem("bulltes",false)
    }
}
fonts.onchange = function(){
    const selectedIndex = fonts.selectedIndex
    const selectedOption = fonts.options[selectedIndex]
    document.documentElement.style.setProperty('--main-font',selectedOption.value)
    localStorage.setItem("font",selectedOption.value)
}
let lastScrollPosition = 0

window.addEventListener("scroll", () => {
    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    pageLine.style.width = `${(scrollTop / height) * 100}%`;
});

if(localStorage.getItem("theme") ||
localStorage.getItem("bulltes") ||
localStorage.getItem("font")){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("main-color"))
    document.documentElement.style.setProperty('--main-font',localStorage.getItem("font"))
    if(localStorage.getItem("font") == "Open Sans"){
        font1.selected = true
    }else if(localStorage.getItem("font") == "Roboto"){
        font2.selected = true
    }else if(localStorage.getItem("font") == "Poppins"){
        font3.selected = true
    }else if(localStorage.getItem("font") == "Tajawal"){
        font4.selected = true
    }else if(localStorage.getItem("font") == "Montserrat"){
        font5.selcted = true
    }else if(localStorage.getItem("font") == "Belanosima"){
        font6.selected = true
    }
    let checked = localStorage.getItem("checked")
    if(localStorage.getItem("checked") == "lightGreen"){
        lightGreen.checked = true
    }else if(localStorage.getItem("checked") == "red"){
        red.checked = true
    }else if(localStorage.getItem("checked") == "green"){
        green.checked = true
    }else if(localStorage.getItem("checked") == "blue"){
        blue.checked = true
    }else if(localStorage.getItem("checked") == "yellow"){
        yellow.checked = true
    }
    if(localStorage.getItem("bulltes") == "true"){
        bulltesY.checked = true
        bulltes.style.right = "20px"
    }else{
        bulltes.style.right = "-100px"
        bulltesN.checked = true
    }
}
