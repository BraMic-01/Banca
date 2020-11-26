window.addEventListener("load", function () {
    var buttonBaja = document.querySelector("#baja");
    //var buttonCancel = document.querySelector("#buttonCancel");
 
 
     function Check() {
         alert("Has dado de baja tu cuenta");
     }
 
     function Cancel() {
         alert("Tarjeta desactivada");
     }
 
 buttonBaja.addEventListener("click", function () {
     Check();
 })
 
 /*buttonCancel.addEventListener("click", function () {
     Cancel();
 })*/
 
 });