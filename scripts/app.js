document.addEventListener('DOMContentLoaded', function() {
    
    const leadForm = document.getElementById('lead-form');
    const formContainer = document.getElementById('form-container');

    leadForm.addEventListener('submit', function(event) {
        
        event.preventDefault(); 
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Simula el envío (aquí es donde enviarías los datos a un servidor)
        console.log("Formulario enviado:");
        console.log("Nombre:", name);
        console.log("Email:", email);

        // Muestra el mensaje de agradecimiento
        formContainer.innerHTML = `
            <div class="thank-you-message">
                <h1>¡Gracias, ${name}!</h1>
                <p>Tu cupón de descuento ha sido enviado a:</p>
                <strong>${email}</strong>
                <p style="margin-top: 20px;">¡Disfruta tu café!</p>
            </div>
        `;
    });

});