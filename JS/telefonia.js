window.addEventListener("load", function () {
    //Botones Telcel
    var sentButtonTelcel = document.querySelector("#sendTelcel");
    var removeButtonTelcel = document.querySelector("#removeTelcel");
    //Movistar
    var sentButtonMovistar = document.querySelector("#sentMovistar");
    var removeButtonMovistar = document.querySelector("#removeMovistar");
    // AT&T
    var sentButtonAt = document.querySelector("#sentAt");
    var removeButtonAt = document.querySelector("#removeAt");
    //pillofon
    var sentButtonPillofon = document.querySelector("#sentPillofon");
    var removeButtonPillofon = document.querySelector("#removePillofon");
    //Solofon
    var sentButtonSolofon = document.querySelector("#sendSolofon");
    var removeButtonSolofon = document.querySelector("#removeSolofon");
    //weex
    var sentButtonWeex = document.querySelector("#sendWeex");
    var removeButtonWeex = document.querySelector("#removeWeex");

    function Telcel() {
        var phoneTelcel = parseInt(document.querySelector("#Phone_telcel").value);
        var montoTelcel = parseInt(document.querySelector("#Phone_telcel").value);
        try {
            if (phoneTelcel <= 0 || montoTelcel <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(phoneTelcel) || isNaN(montoTelcel)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('Hola mundo')
                }
            }
        } catch (error) {
            alert("Error");
        }
    }

    function Remove() {
        window.location = "servicios.html";
    }

    function Movistar() {
        document.write("Hola otra vez");
    }

    sentButtonTelcel.addEventListener("click", function () {
        Telcel();
    });

    removeButtonTelcel.addEventListener("click", function () {
        Remove();
    });

    sentButtonMovistar.addEventListener("click", function () {
        Movistar();
    });



});