$(function () {
    $("#enviar").click(function (event) {

        if ($("#nombre").val()) {
            swal({
                title: "Correcto.",
                text: "Se ha enviado el correo.",
                type: "success",
                allowOutsideClick: false,
                timer: 5000,
            });
        }
        else {
            swal({
                title: "Datos incorrectos.",
                text: "No se ha enviado el correo.",
                type: "warning",
                allowOutsideClick: false,
                timer: 5000,
            });
        }
    });
});