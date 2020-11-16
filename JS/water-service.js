window.addEventListener("load", function () {

    var buttonSend = document.querySelector("#buttonSend");
    var buttonRemove = document.querySelector("#buttonRemove");

    function Calculate() {
        var barcode = parseInt(document.querySelector("#Barcode").value);
        var pay = parseInt(document.querySelector("#Pay").value);

        try {
            if (barcode <= 0 || pay <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(barcode) || isNaN(pay)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('<h1>Información del ticket:</h1>' +
                        '<p> Código de barras: ' + barcode + ' <br/> Monto a pagar: ' + pay + '</p>' +
                        '<a href="water.html"><button>Enviar</button></a>')
                }
            }
        } catch (error) {
            alert("Error");
        }
    }


    buttonSend.addEventListener("click", function () {
        Calculate()
    });

    buttonRemove.addEventListener("click", function () {
        Remove();
    });

});