// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function btnVerRegistraCentro() {
    var name = document.getElementById('bussinesName').value;
    var email = document.getElementById('bussinesEmail').value;
    var pass = document.getElementById('bussinesPass').value;
    var desc = document.getElementById('bussinesDesc').value;
    var prov = document.getElementById('bussinesProv').value;
    var cant = document.getElementById('bussinesCant').value;
    var dist = document.getElementById('bussinesDist').value;
    var direc = document.getElementById('bussinesAddress').value;
    var phone = document.getElementById('bussinesPhone').value;
    var maxCantidad = document.getElementById('bussinesMaxCapacity').value;
    var porcentaje = document.getElementById('bussinesPercentCapacity').value;
    var porcentaje = document.getElementById('bussinesPercentCapacity').value;

    var logo = document.getElementById('fileChooserLogo').files[0];
    var image_name = logo.name;
    var image_extension = image_name.split('.').pop().toLowerCase();

    //alert(document.getElementById('fileChooserImages').files.length);

    var images = document.getElementById('fileChooserImages').files[0];
    var image_name = images.name;
    var image_extension = image_name.split('.').pop().toLowerCase();

    //hay que hacer la llamada al API

    window.location.href = "/IniciarSesion";
}

function btnIniciarSesion() {
    var email = document.getElementById('bussinesEmail').value;
    var pass = document.getElementById('bussinesPass').value;

    //hay que llamar al API para confirmar el inicio de sesión

    window.location.href = "/Administrador";
}

function cerrarSesion() {
    window.location.href = "/IniciarSesion";
}

//carga las opciones para el perfil
function btnVerMiEstablecimiento() {
    document.getElementById('opcionesAdmin').innerHTML = '';
    document.getElementById('accionOpciones').innerHTML = '';
    document.getElementById('opcionesAdmin').setAttribute("class", "col-md-3 border-right border-primary");
    document.getElementById('accionOpciones').setAttribute("class", "col-md-9");

    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; width: 100%;');
    myBtn.setAttribute('onclick', 'btnVerCambiarDescripcion()');
    myBtn.innerText = 'Cambiar Descripción';
    document.getElementById('opcionesAdmin').appendChild(myBtn);

    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; width: 100%;');
    myBtn.setAttribute('onclick', 'btnVerCambiarUbicacion()');
    myBtn.innerText = 'Cambiar Ubicación';
    document.getElementById('opcionesAdmin').appendChild(myBtn);

    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; width: 100%;');
    myBtn.setAttribute('onclick', 'btnVerCambiarHorarios()');
    myBtn.innerText = 'Horarios';
    document.getElementById('opcionesAdmin').appendChild(myBtn);

    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; margin-bottom: 1em; width: 100%;');
    myBtn.setAttribute('onclick', 'btnVerCambiarCapacidad()');
    myBtn.innerText = 'Cambiar Capacidad';
    document.getElementById('opcionesAdmin').appendChild(myBtn);
}

//opciones de perfil


function btnVerCambiarDescripcion() {
    document.getElementById('accionOpciones').innerHTML = '';

    var myLegend = document.createElement('legend');
    myLegend.innerText = 'Edite la descripción de su establecimiento'
    document.getElementById('accionOpciones').appendChild(myLegend);

    var myTextA = document.createElement('textarea');
    myTextA.setAttribute('class', 'form-control');
    myTextA.setAttribute('placeholder', 'Descripción');
    myTextA.setAttribute('style', 'margin-top: 1em;');
    myTextA.setAttribute('id', 'descripcion');
    document.getElementById('accionOpciones').appendChild(myTextA);

    //sin accion 
    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; margin-bottom: 1em; width: 100%;');
    myBtn.innerText = 'Guardar cambios';
    document.getElementById('accionOpciones').appendChild(myBtn);
}

function btnVerCambiarUbicacion() {
    document.getElementById('accionOpciones').innerHTML = '';

    var myLegend = document.createElement('legend');
    myLegend.innerText = 'Edite la ubicación de su establecimiento'
    document.getElementById('accionOpciones').appendChild(myLegend);


    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col');

    var myTextA = document.createElement('input');
    myTextA.setAttribute('type', 'text');
    myTextA.setAttribute('class', 'form-control');
    myTextA.setAttribute('placeholder', 'Provincia');
    myTextA.setAttribute('id', 'provincia');
    myTextA.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(myTextA);

    divCol.appendChild(myTextA);
    divRow.appendChild(divCol);

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col');

    var myTextA = document.createElement('input');
    myTextA.setAttribute('type', 'text');
    myTextA.setAttribute('class', 'form-control');
    myTextA.setAttribute('placeholder', 'Cantón');
    myTextA.setAttribute('id', 'canton');
    myTextA.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(myTextA);

    divCol.appendChild(myTextA);
    divRow.appendChild(divCol);

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col');

    var myTextA = document.createElement('input');
    myTextA.setAttribute('type', 'text');
    myTextA.setAttribute('class', 'form-control');
    myTextA.setAttribute('placeholder', 'Distrito');
    myTextA.setAttribute('id', 'distrito');
    myTextA.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(myTextA);

    divCol.appendChild(myTextA);
    divRow.appendChild(divCol);

    document.getElementById('accionOpciones').appendChild(divRow);

    var myTextA = document.createElement('input');
    myTextA.setAttribute('type', 'text');
    myTextA.setAttribute('class', 'form-control');
    myTextA.setAttribute('placeholder', 'Dirección');
    myTextA.setAttribute('id', 'direccion');
    myTextA.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(myTextA);

    document.getElementById('accionOpciones').appendChild(myTextA);

    //sin accion 
    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; margin-bottom: 1em; width: 100%;');
    myBtn.innerText = 'Guardar cambios';
    document.getElementById('accionOpciones').appendChild(myBtn);
}

function btnVerCambiarHorarios() {
    document.getElementById('accionOpciones').innerHTML = '';

    var myLegend = document.createElement('legend');
    myLegend.innerText = 'Edite el horario del Centro de Entrenamiento';
    document.getElementById('accionOpciones').appendChild(myLegend);

    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-md-8');

    var spanAbre = document.createElement('span');
    spanAbre.innerHTML = 'El Centro de Entrenamiento abre a la(s):';
    divCol.appendChild(spanAbre);

    var inHora = document.createElement('input');
    inHora.setAttribute('class', 'form-control');
    inHora.setAttribute('id', 'horaAbre');
    inHora.setAttribute('type', 'time');
    divCol.appendChild(inHora);

    var spanCierra = document.createElement('span');
    spanCierra.innerHTML = 'Y cierra a la(s):';
    divCol.appendChild(spanCierra);

    var inHora = document.createElement('input');
    inHora.setAttribute('class', 'form-control');
    inHora.setAttribute('id', 'horaCierra');
    inHora.setAttribute('type', 'time');
    divCol.appendChild(inHora);

    divRow.appendChild(divCol);
    document.getElementById('accionOpciones').appendChild(divRow);

    //sin accion 
    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; margin-bottom: 1em; width: 100%;');
    myBtn.innerText = 'Guardar cambios';
    document.getElementById('accionOpciones').appendChild(myBtn);
}

function btnVerCambiarCapacidad() {
    document.getElementById('accionOpciones').innerHTML = '';

    var myLegend = document.createElement('legend');
    myLegend.innerText = 'Edite el horario del Centro de Entrenamiento';
    document.getElementById('accionOpciones').appendChild(myLegend);

    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-md-8');

    var inputCant = document.createElement('input');
    inputCant.setAttribute('class', 'form-control');
    inputCant.setAttribute('type', 'number');
    inputCant.setAttribute('placeholder', 'Capacidad Máxima');
    inputCant.setAttribute('id', 'capacidadMaxima');
    inputCant.setAttribute('style', 'margin-top: 1em;');

    divCol.appendChild(inputCant);

    var inputCant = document.createElement('input');
    inputCant.setAttribute('class', 'form-control');
    inputCant.setAttribute('type', 'number');
    inputCant.setAttribute('placeholder', 'Porcentaje Permitido');
    inputCant.setAttribute('id', 'porcentajePermitido');
    inputCant.setAttribute('style', 'margin-top: 1em;');

    divCol.appendChild(inputCant);
    divRow.appendChild(divCol);

    document.getElementById('accionOpciones').appendChild(divRow);

    //sin accion 
    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; margin-bottom: 1em; width: 100%;');
    myBtn.innerText = 'Guardar cambios';
    document.getElementById('accionOpciones').appendChild(myBtn);
}

//opciones de perfil

//muestra las opciones de las clases online
function btnVerClasesOnline() {
    document.getElementById('opcionesAdmin').innerHTML = '';
    document.getElementById('accionOpciones').innerHTML = '';
    document.getElementById('opcionesAdmin').setAttribute("class", "col-md-3 border-right border-primary");
    document.getElementById('accionOpciones').setAttribute("class", "col-md-9");

    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; width: 100%;');
    myBtn.setAttribute('onclick', 'btnVerAgregarEventos()');
    myBtn.innerText = 'Agregar Eventos';
    document.getElementById('opcionesAdmin').appendChild(myBtn);
}

function btnVerAgregarEventos() {
    document.getElementById('accionOpciones').innerHTML = '';

    var myLegend = document.createElement('legend');
    myLegend.innerText = 'Agregue nuevos eventos';
    document.getElementById('accionOpciones').appendChild(myLegend);

    var divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    var divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-md-8');

    var evento = document.createElement('input');
    evento.setAttribute('class', 'form-control');
    evento.setAttribute('type', 'text');
    evento.setAttribute('placeholder', 'Evento');
    evento.setAttribute('id', 'nombreEvento');
    evento.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(evento);

    var evento = document.createElement('input');
    evento.setAttribute('class', 'form-control');
    evento.setAttribute('type', 'textarea');
    evento.setAttribute('placeholder', 'Descripción del Evento');
    evento.setAttribute('id', 'descripcionEvento');
    evento.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(evento);

    var spanAbre = document.createElement('span');
    spanAbre.innerHTML = 'El evento inicia a la(s):';
    divCol.appendChild(spanAbre);

    var inHora = document.createElement('input');
    inHora.setAttribute('class', 'form-control');
    inHora.setAttribute('id', 'iniciaEvento');
    inHora.setAttribute('type', 'time');
    divCol.appendChild(inHora);

    var spanCierra = document.createElement('span');
    spanCierra.innerHTML = 'Y finaliza a la(s):';
    divCol.appendChild(spanCierra);

    var inHora = document.createElement('input');
    inHora.setAttribute('class', 'form-control');
    inHora.setAttribute('id', 'finEvento');
    inHora.setAttribute('type', 'time');
    divCol.appendChild(inHora);

    var evento = document.createElement('input');
    evento.setAttribute('class', 'form-control');
    evento.setAttribute('type', 'textarea');
    evento.setAttribute('placeholder', 'Costo del evento');
    evento.setAttribute('id', 'costoEvento');
    evento.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(evento);

    divRow.appendChild(divCol);
    document.getElementById('accionOpciones').appendChild(divRow);

    //sin acciones
    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; margin-bottom: 1em; width: 100%;');
    myBtn.innerText = 'Guardar y publicar evento';
    document.getElementById('accionOpciones').appendChild(myBtn);
}


//opción para cargar la opción de resúmenes
function btnVerResumenes() {
    document.getElementById('opcionesAdmin').innerHTML = '';
    document.getElementById('accionOpciones').innerHTML = '';
    document.getElementById('opcionesAdmin').setAttribute("class", "col-md-3 border-right border-primary");
    document.getElementById('accionOpciones').setAttribute("class", "col-md-9");

    var evento = document.createElement('input');
    evento.setAttribute('class', 'form-control');
    evento.setAttribute('type', 'date');
    evento.setAttribute('placeholder', 'Fecha de Inicio');
    evento.setAttribute('id', 'fecha_i');
    evento.setAttribute('style', 'margin-top: 1em;');
    document.getElementById('opcionesAdmin').appendChild(evento);

    var evento = document.createElement('input');
    evento.setAttribute('class', 'form-control');
    evento.setAttribute('type', 'date');
    evento.setAttribute('placeholder', 'Fecha Final');
    evento.setAttribute('id', 'fecha_f');
    evento.setAttribute('style', 'margin-top: 1em;');
    document.getElementById('opcionesAdmin').appendChild(evento);

    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; width: 100%;');
    myBtn.setAttribute('onclick', 'btnGenerarResumen()');
    myBtn.innerText = 'Ver resúmen';
    document.getElementById('opcionesAdmin').appendChild(myBtn);

    var spanR = document.createElement('span');
    spanR.setAttribute('id', 'respuesta');
    document.getElementById('accionOpciones').appendChild(spanR);
}

function btnGenerarResumen() {
    var f_i = document.getElementById('fecha_i').value;
    var f_f = document.getElementById('fecha_f').value;

    parametros = { "fecha_i": f_i, "fecha_f": f_f };
    alert(f_i + ' ' + f_f);
    $.ajax(
        {
            data: parametros,
            url: '/Administrador/CrearPDF',
            type: 'post',
            beforeSend: function () {
                $("#respuesta").html("Buscando ...");
            }, //antes de enviar

            success: function (response) {
                $("#respuesta").html(response);
            } //se ha enviado
        }
    );
}