window.addEventListener("load", function () {

    var button = document.querySelector("#boton1");

    function Login() {
        var numberCustumber = parseInt(document.querySelector("#numberCustomer").value);
        var password = document.querySelector("#passwordCustomer").value;

        if (numberCustumber == 2656078 && password == "admin") {
            window.location = "consultar.html"
        } else {
            alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
        }
    }

    button.addEventListener("click", function () {
        Login();
    });

});