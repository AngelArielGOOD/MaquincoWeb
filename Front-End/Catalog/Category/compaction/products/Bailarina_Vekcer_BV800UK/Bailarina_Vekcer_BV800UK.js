// Cambia la imagen cuando se hace clic en una miniatura
function changeImage(imageSrc) {
    document.getElementById("selected-image").src = imageSrc;
}

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    // Importa Firebase
    import("https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js").then(({ initializeApp }) => {
        import("https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js").then(({ getFirestore, collection, addDoc }) => {
            
            // Configuración de Firebase
            const firebaseConfig = {
                apiKey: "AIzaSyCHKfdUjUnZPo_SuhLKVHPv00-ZQu4aiZw",
                authDomain: "maquincoweb-5316f.firebaseapp.com",
                projectId: "maquincoweb-5316f",
                storageBucket: "maquincoweb-5316f.firebasestorage.app",
                messagingSenderId: "386010337504",
                appId: "1:386010337504:web:37b6b742a5fad689240085",
                measurementId: "G-KL2WHTR1PP"
            };

            // Inicializa Firebase y Firestore
            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);
            console.log("Firebase inicializado:", db);

            // Función para enviar el formulario
            document.querySelector("form").addEventListener("submit", async (e) => {
                e.preventDefault();

                // Obtiene los valores del formulario
                const nombre = document.getElementById("name").value.trim();
                const email_phone = document.getElementById("email_phone").value.trim();
                const mensaje = document.getElementById("message").value.trim();

                if (!nombre || !email_phone || !mensaje) {
                    alert("Por favor, completa todos los campos.");
                    return;
                }

                try {
                    // Guarda los datos en Firestore
                    await addDoc(collection(db, "mensajes"), {
                        nombre: nombre,
                        email_phone: email_phone,
                        mensaje: mensaje,
                        fecha: new Date()
                    });

                    alert("Mensaje enviado correctamente!");
                    document.querySelector("form").reset(); // Limpia el formulario
                } catch (error) {
                    console.error("Error al enviar el mensaje:", error);
                    alert("Hubo un error al enviar tu mensaje. Intenta de nuevo.");
                }
            });
        });
    });
});
