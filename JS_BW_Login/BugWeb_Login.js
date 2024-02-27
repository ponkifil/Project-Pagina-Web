function enviar(){
    var id;
    var error;
    var control;
    parseInt(control);
    control=0;

    //validar usuario
    id = document.getElementById('nombreUsuario');
    error = document.getElementById('errorUsuario');

    if(id.value.trim() === "")
    {
        error.innerHTML = "El nombre de usuario no puede estar en blanco";
        id.style.border = "2px solid red";
        document.getElementById('u-err').style.opacity = "1";
        document.getElementById('u-ok').style.opacity = "0";
    } else {
        error.innerHTML = "";
        id.style.border = "2px solid green";
        document.getElementById('u-err').style.opacity = "0";
        document.getElementById('u-ok').style.opacity = "1";
        control=control+1;
    }

    //validar apellido
    id = document.getElementById('apellidoUsuario');
    error = document.getElementById('errorApellidoUsuario');

    if(id.value.trim() === "")
    {
        error.innerHTML = "Los apellidos del usuario no puede estar en blanco";
        id.style.border = "2px solid red";
        document.getElementById('a-err').style.opacity = "1";
        document.getElementById('a-ok').style.opacity = "0";
    } else {
        error.innerHTML = "";
        id.style.border = "2px solid green";
        document.getElementById('a-err').style.opacity = "0";
        document.getElementById('a-ok').style.opacity = "1";
        control=control+1;
    }
    
    //validar correo
    id = document.getElementById('eMail');
    error = document.getElementById('errorCorreo');

    if (id.value.trim() === "") {
        error.innerHTML = "El correo no puede estar en blanco";
        id.style.border = "2px solid red";
        document.getElementById('mail-err').style.opacity = "1";
        document.getElementById('mail-ok').style.opacity = "0";
    } else {
        error.innerHTML = "";
        id.style.border = "2px solid green";
        document.getElementById('mail-err').style.opacity = "0";
        document.getElementById('mail-ok').style.opacity = "1";
        control = control + 1;
    }

    //validar contraseña
    id = document.getElementById('Pasword');
    error = document.getElementById('errorPasword');

    if (id.value.trim() === "") {
        error.innerHTML = "La contraseña no puede estar en blanco";
        id.style.border = "2px solid red";
        document.getElementById('pas-err').style.opacity = "1";
        document.getElementById('pas-ok').style.opacity = "0";
    } else {
        error.innerHTML = "";
        id.style.border = "2px solid green";
        document.getElementById('pas-err').style.opacity = "0";
        document.getElementById('pas-ok').style.opacity = "1";
        control = control + 1;
    }

    var dato;
    var escrito;
    if(control==4){

        dato=document.getElementById('o-usuario');
        escrito=document.getElementById('nombreUsuario').value;
        dato.innerHTML=escrito;

        /*
        dato=document.getElementById('o-apellido');
        escrito=document.getElementById('apellidoUsuario').value;
        dato.innerHTML=escrito;
        
        dato = document.getElementById('o-correo');
        escrito = document.getElementById('eMail').value;
        dato.innerHTML = escrito;

        dato = document.getElementById('o-contraseña');
        escrito = document.getElementById('Pasword').value;
        dato.innerHTML = escrito;
        */

        document.getElementById('capturados').style.opacity = "1";
    }
}

function limpiar(){
    location.reload();
}

function subir_insecto(){
    alert("Insecto Subido con Éxito");
}