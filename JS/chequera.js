window.addEventListener("load", function () {
   var buttonCheck = document.querySelector("#buttonCheck");
   var buttonCancel = document.querySelector("#buttonCancel");


    function Check() {
        alert("Tarjeta Activada");
    }

    function Cancel() {
        alert("Tarjeta desactivada");
    }

buttonCheck.addEventListener("click", function () {
    Check();
})

buttonCancel.addEventListener("click", function () {
    Cancel();
})

});