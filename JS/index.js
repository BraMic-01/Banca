window.addEventListener("load", function() {
 
 var button = document.querySelector("#boton1");

function Login() {
    var numberCustumber = parseInt(document.querySelector("#numberCustomer").value);  
    var password = document.querySelector("#passwordCustomer").value;   

    if (numberCustumber == 2656078 && password == "admin") {
        
        button.innerHTML = '<button id="boton1" type="submit"> <a class="nav-link" href="consultar.html">Iniciar</a></button>'
    }else{

        alert("Error verifique sus datos");   
    }
}

button.addEventListener("click", function () {
    Login();
});

});