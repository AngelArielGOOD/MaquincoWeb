document.addEventListener("DOMContentLoaded", function () {
    loadcontact();
});

function loadcontact() {
    fetch('/Front-End/Catalog/Category/compaction/component_contact_information/contact.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el formulario de contacto");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contact-form').innerHTML = data;
        })
        .catch(error => {
            console.error("Hubo un problema con la carga del formulario:", error);
        });
}
