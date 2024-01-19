const backtotop_btn = document.getElementById("backtotop-btn")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 700) {
        backtotop_btn.setAttribute("class","scale-in-center")
        backtotop_btn.style.visibility = "visible"
    }else{
        backtotop_btn.setAttribute("class","scale-out-center")
        backtotop_btn.style.visibility = "visible"
    }
}

backtotop_btn.onclick = function () {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}