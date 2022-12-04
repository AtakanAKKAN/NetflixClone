window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "rgb(20,20,20)";
    }
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
}