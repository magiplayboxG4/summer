
const loading = document.getElementsByClassName('loading')[0];
loading.addEventListener("click", function () {
    loading.className += " is-loading";

    setTimeout(function () {
        loading.className = "loading finish";
        loading.innerHTML = "Successfully Delivered";
    }, 3000);

    setTimeout(function () {
        loading.className = "loading";
    }, 5000);

    setTimeout(function () {  
        loading.innerHTML = "Send Message";
    }, 5000);
});