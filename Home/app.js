const goBtn = document.querySelector("back_to_top");
window.addEventListener('scroll', checkHeight)
function checkHeight(){
    if(window.scrollY > 200) {
        goBtn.style.display = "flex"
    }else {
        goBtn.style.display = "none"
    }
}

goBtn.addEventListener('click', ()=>{
    window.scroll({
        top:0
    })
})
