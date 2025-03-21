let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.hide-on-scroll');
    const menu = document.querySelector('.menu_navigation');
    const menuIcon = document.getElementById('menu_icon');

    if (window.scrollY > lastScrollY) {
        // Desplazándose hacia abajo: Oculta el encabezado
        header.classList.add('hidden');
        closeMenu(menu, menuIcon); // Cierra el menú si está abierto
    } else {
        // Desplazándose hacia arriba: Muestra el encabezado
        header.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
});

// Función para cargar el header
function loadHeader() {
    fetch('/Front-End/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Inicializa los scripts relacionados con el header
            initializeHeaderScripts();
        });
}

// Inicializa los scripts relacionados con el header
function initializeHeaderScripts() {
    const menuButton = document.getElementById('menu_btn');
    const menu = document.querySelector('.menu_navigation');
    const menuIcon = document.getElementById('menu_icon');

    if (menuButton && menu && menuIcon) {
        menuButton.addEventListener('click', function () {
            menu.classList.toggle('active');
            menuIcon.src = menu.classList.contains('active') 
                ? '/Front-End/components/Icon_Clouse_Menú.png' : '/Front-End/components/Icon_Menú.png';
        });
    }
}

// Función para cerrar el menú
function closeMenu(menu, menuIcon) {
    if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active'); // Oculta el menú
        if (menuIcon) {
            menuIcon.src = '/Front-End/components/Icon_Menú.png'; // Cambia a icono de menú
        }
    }
}

// Llama a la función de carga
loadHeader();

