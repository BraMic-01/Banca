window.addEventListener("load", function () {

    var buttonSendBanamex = document.querySelector("#buttonSendBanamex");
    var showTickt = document.querySelector("#showTickt");
    var tickt = document.querySelector("#Tickt");

    function Show() {
        showTickt.style.display = "block";
        showTickt.style.background = "#06d6a0";
    }

    function BanckBanamex() {
        var numberBanamex = parseInt(document.querySelector("#numberBanamex").value);
        var payBanamex = parseInt(document.querySelector("#payBanamex").value);

        try {
            if (numberBanamex <= 0 || payBanamex <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(numberBanamex) || isNaN(payBanamex)) {
                    alert("Veridique los campos")
                } else {
                    Show();
                    tickt.innerHTML = "Ticket: " + "<br/>" + "Número de cuenta: " + numberBanamex + "<br/>"
                        + "Importe: " + "$" + payBanamex + "<br/>" + "<a href=transferencias.html><button type=button id=buttonBox>Imprimir</button></a>";
                }
            }
        } catch (error) {
            alert("Error" + error);
        }
    }



    buttonSendBanamex.addEventListener("click", function () {
        BanckBanamex();
    })


});