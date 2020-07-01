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
    myBtn.innerText = 'Horarios';
    document.getElementById('opcionesAdmin').appendChild(myBtn);

    var myBtn = document.createElement('a');
    myBtn.setAttribute('class', 'btn btn-outline-primary');
    myBtn.setAttribute('style', 'margin-top: 1em; margin-bottom: 1em; width: 100%;');
    myBtn.innerText = 'Cambiar Capacidad';
    document.getElementById('opcionesAdmin').appendChild(myBtn);
}

function btnVerCambiarDescripcion() {
    document.getElementById('accionOpciones').innerHTML = '';

    var myLegend = document.createElement('legend');
    myLegend.innerText = 'Edite la descripción de su establecimiento'
    document.getElementById('accionOpciones').appendChild(myLegend);

    var myTextA = document.createElement('textarea');
    myTextA.setAttribute('class', 'form-control');
    myTextA.setAttribute('placeholder', 'Descripción');
    myTextA.setAttribute('style', 'margin-top: 1em;');
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
    myTextA.setAttribute('style', 'margin-top: 1em;');
    divCol.appendChild(myTextA);

    divCol.appendChild(myTextA);
    divRow.appendChild(divCol);

    document.getElementById('accionOpciones').appendChild(divRow);

    var myTextA = document.createElement('input');
    myTextA.setAttribute('type', 'text');
    myTextA.setAttribute('class', 'form-control');
    myTextA.setAttribute('placeholder', 'Dirección');
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