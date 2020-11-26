window.addEventListener("load", function () {

    var buttonSendOwn = document.querySelector("#buttonSendOwn");
    var showTickt = document.querySelector("#showTickt");
    var tickt = document.querySelector("#Tickt");

    function Show() {
        showTickt.style.display = "block";
        showTickt.style.background = "#06d6a0";
    }

    function BanckOwn() {
        var numberOwn = parseInt(document.querySelector("#numberOwn").value);
        var payOwn = parseInt(document.querySelector("#payOwn").value);

        try {
            if (numberOwn <= 0 || payOwn <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(numberOwn) || isNaN(payOwn)) {
                    alert("Veridique los campos")
                } else {
                    Show();
                    tickt.innerHTML = "Ticket: " + "<br/>" + "Número de cuenta: " + numberOwn + "<br/>"
                        + "Importe: " + "$" + payOwn + "<br/>" + "<a href=transferencias.html><button type=button id=buttonBox>Imprimir</button></a>";
                }
            }
        } catch (error) {
            alert("Error" + error);
        }
    }

    buttonSendOwn.addEventListener("click", function () {
        BanckOwn();
    })


});