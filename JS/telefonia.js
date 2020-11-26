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
        var montoTelcel = parseInt(document.querySelector("#Monto_telcel").value);
        try {
            if (phoneTelcel <= 0 || montoTelcel <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(phoneTelcel) || isNaN(montoTelcel)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('<h1>Información del ticket:</h1>' +
                        '<p>Compañia Telefonica: Telcel <br/> Número Teléfonico: ' + phoneTelcel + ' <br/> Monto a pagar: ' + montoTelcel + '</p>' +
                        '<a href="telmex.html"><button>Enviar</button></a>')
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
        var phoneMovistar = parseInt(document.querySelector("#Phone_movistar").value);
        var montoMovistar = parseInt(document.querySelector("#Monto_movistar").value);
        try {
            if (phoneMovistar <= 0 || montoMovistar <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(phoneMovistar) || isNaN(montoMovistar)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('<h1>Información del ticket:</h1>' +
                        '<p> Compañia Telefonica: Movistar <br/> Número Teléfonico: ' + phoneMovistar + ' <br/> Monto a pagar: ' + montoMovistar + '</p>' +
                        '<a href="telmex.html"><button>Enviar</button></a>')
                }
            }
        } catch (error) {
            alert("Error");
        }
    }

    function At() {
        var phoneA = parseInt(document.querySelector("#Phone_a").value);
        var montoA = parseInt(document.querySelector("#Monto_a").value);
        try {
            if (phoneA <= 0 || montoA <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(phoneA) || isNaN(montoA)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('<h1>Información del ticket:</h1>' +
                        '<p> Compañia Telefonica: AT&T <br/> Número Teléfonico: ' + phoneA + ' <br/> Monto a pagar: ' + montoA + '</p>' +
                        '<a href="telmex.html"><button>Enviar</button></a>')
                }
            }
        } catch (error) {
            alert("Error");
        }
    }

    function Pillofon() {
        var phonePillofon = parseInt(document.querySelector("#Phone_pillofon").value);
        var montoPilofon = parseInt(document.querySelector("#Monto_pillofon").value);
        try {
            if (phonePillofon <= 0 || montoPilofon <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(phonePillofon) || isNaN(montoPilofon)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('<h1>Información del ticket:</h1>' +
                        '<p> Compañia Telefonica: Pillofon <br/> Número Teléfonico: ' + phonePillofon + ' <br/> Monto a pagar: ' + montoPilofon + '</p>' +
                        '<a href="telmex.html"><button>Enviar</button></a>')
                }
            }
        } catch (error) {
            alert("Error");
        }
    }

    function Solofon() {
        var phoneSolofon = parseInt(document.querySelector("#Phone_solofon").value);
        var montoSolofon = parseInt(document.querySelector("#Monto_solofon").value);
        try {
            if (phoneSolofon <= 0 || montoSolofon <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(phoneSolofon) || isNaN(montoSolofon)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('<h1>Información del ticket:</h1>' +
                        '<p> Compañia Telefonica: Solofon <br/> Número Teléfonico: ' + phoneSolofon + ' <br/> Monto a pagar: ' + montoSolofon + '</p>' +
                        '<a href="telmex.html"><button>Enviar</button></a>')
                }
            }
        } catch (error) {
            alert("Error");
        }
    }

    function Weex() {
        var phoneWeex = parseInt(document.querySelector("#Phone_weex").value);
        var montoWeex = parseInt(document.querySelector("#Monto_weex").value);
        try {
            if (phoneWeex <= 0 || montoWeex <= 0) {
                alert("No se puede digitar numeros negativos");
            } else {
                if (isNaN(phoneWeex) || isNaN(montoWeex)) {
                    alert("Veridique los campos");
                } else {
                    alert("Pago Realizado correctamente");
                    document.write('<h1>Información del ticket:</h1>' +
                        '<p> Compañia Telefonica: Weex <br/> Número Teléfonico: ' + phoneWeex + ' <br/> Monto a pagar: ' + montoWeex + '</p>' +
                        '<a href="telmex.html"><button>Enviar</button></a>')
                }
            }
        } catch (error) {
            alert("Error");
        }
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

    sentButtonAt.addEventListener("click", function () {
        At();
    })

    sentButtonPillofon.addEventListener("click", function () {
        Pillofon();
    })

    sentButtonSolofon.addEventListener("click", function () {
        Solofon();
    })

    sentButtonWeex.addEventListener("click", function () {
        Weex();
    })

});