window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.documentElement.scrollTop > 500){
        document.getElementById("menu").style.display = "none";
        var element = document.getElementById("content");
        element.classList.add("show");
    } else {
        document.getElementById("menu").style.display = "block";
        var element = document.getElementById("content");
        element.classList.remove("show");
    }
}