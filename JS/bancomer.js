window.addEventListener("load", function () {

    var buttonSendBancomer = document.querySelector("#buttonSendBancomer");
    var showTickt = document.querySelector("#showTickt");
    var tickt = document.querySelector("#Tickt");

    function Show() {
        showTickt.style.display = "block";
        showTickt.style.background = "#06d6a0";
    }

    function BanckBancomer() {
        var numberBancomer = parseInt(document.querySelector("#numberBancomer").value);
        var payBancomer = parseInt(document.querySelector("#payBancomer").value);

        try {
            if (numberBancomer <= 0 || payBancomer <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(numberBancomer) || isNaN(payBancomer)) {
                    alert("Veridique los campos")
                } else {
                    Show();
                    tickt.innerHTML = "Ticket: " + "<br/>" + "Número de cuenta: " + numberBancomer + "<br/>"
                        + "Importe: " + "$" + payBancomer + "<br/>" + "<a href=transferencias.html><button type=button id=buttonBox>Imprimir</button></a>";
                }
            }
        } catch (error) {
            alert("Error" + error);
        }
    }

   

    buttonSendBancomer.addEventListener("click", function () {
        BanckBancomer();
    });

  


});