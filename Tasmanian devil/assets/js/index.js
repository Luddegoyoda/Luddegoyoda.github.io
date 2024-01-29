const element = document.getElementById("clickMeText");
const image = document.getElementById("StarImage");
const body = document.querySelector("body");

function ImageChange(){

    if(image.src == "http://127.0.0.1:5500/assets/images/GOG_Hero.png"){
        image.src = "assets/images/Hero2.jpg";
    }
    else{
        image.src = "assets/images/GOG_Hero.png";
    }
}

image.addEventListener("click", ImageChange)


element.addEventListener("click", function() {
    if (body.classList.contains("darkmode"))
    {
        body.classList.remove("darkmode");
    }
    else
    {
        body.classList.add("darkmode");
    }
});
