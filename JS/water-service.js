window.addEventListener("load", function () {

    var buttonSend = document.querySelector("#buttonSend");
    var buttonRemove = document.querySelector("#buttonRemove");
    var showTickt = document.querySelector("#showTickt");
    var tickt = document.querySelector("#Tickt");


    function Show() {
        showTickt.style.display = "block";
        showTickt.style.background = "#ffd166";
    }

    function Esconder() {
        showTickt.style.display = "none";
    }

    function Calculate() {
        var barcode = parseInt(document.querySelector("#Barcode").value);
        var pay = parseInt(document.querySelector("#Pay").value);

        try {
            if (barcode <= 0 || pay <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(barcode) || isNaN(pay)) {
                    alert("Veridique los campos")
                } else {
                    Show();
                    tickt.innerHTML = "Ticket: " + "<br/>" + "Código de barras: " + barcode + "<br/>"
                        + "Monto a pagar: " + pay + "<br/>" + "<a href=cfe.html><button type=button id=buttonBox>Imprimir</button></a>";
                }
            }
        } catch (error) {
            alert("Error");
        }
    }


    buttonSend.addEventListener("click", function () {
        Calculate();
    });

    buttonRemove.addEventListener("click", function () {

    });

});