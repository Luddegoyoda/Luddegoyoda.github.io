const image = document.getElementById("logoImage");
const body = document.querySelector("body");

image.addEventListener("click", function() {
    if (body.classList.contains("darkmode"))
    {
        body.classList.remove("darkmode");
    }
    else
    {
        body.classList.add("darkmode");
    }
});
