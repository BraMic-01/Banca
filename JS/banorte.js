window.addEventListener("load", function () {

   
    var buttonSendBanorte = document.querySelector("#buttonSendBanorte");
    var showTickt = document.querySelector("#showTickt");
    var tickt = document.querySelector("#Tickt");

    function Show() {
        showTickt.style.display = "block";
        showTickt.style.background = "#06d6a0";
    }

    function BanckBanorte() {
        var numberBanorte = parseInt(document.querySelector("#numberBanorte").value);
        var payBanorte = parseInt(document.querySelector("#payBanorte").value);

        try {
            if (numberBanorte <= 0 || payBanorte <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(numberBanorte) || isNaN(payBanorte)) {
                    alert("Veridique los campos")
                } else {
                    Show();
                    tickt.innerHTML = "Ticket: " + "<br/>" + "Número de cuenta: " + numberBanorte + "<br/>"
                        + "Importe: " + "$" + payBanorte + "<br/>" + "<a href=transferencias.html><button type=button id=buttonBox>Imprimir</button></a>";
                }
            }
        } catch (error) {
            alert("Error" + error);
        }
    }


    buttonSendBanorte.addEventListener("click", function () {
        BanckBanorte();
    });


});