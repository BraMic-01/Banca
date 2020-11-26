window.addEventListener("load", function () {
    var buttonPassword = document.querySelector("#buttonPassword");
    let password;

    function forgetPassword() {
        password = prompt("Digite la contraseña nueva");

        if (password == password) {
            alert("Cambio la contraseña");
            window.location = "index.html"
        } else {
            alert("Cancelo el cambio de contraseña")
        }
    }

    buttonPassword.addEventListener("click", function () {
        forgetPassword();
    })

});