function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todos los contenidos de las pestañas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Desactivar todos los botones de las pestañas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "#ffa2eb";
    }

    // Mostrar el contenido de la pestaña seleccionada
    document.getElementById(tabName).style.display = "block";

    // Resaltar el botón de la pestaña activa
    evt.currentTarget.style.backgroundColor = "#b964a7";
}

// Mostrar la primera pestaña por defecto
document.getElementById("tab1").style.display = "block";