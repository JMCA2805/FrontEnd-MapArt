const subscr = document.getElementById('formsubs');

subscr.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const direcci = e.target.direcci.value;
    const correo = e.target.correo.value;
    const telf = e.target.telf.value;
    const sub = { "nombre": nombre, "direccion": direcci, "correo": correo, "telefono": telf };

    await fetch('http://localhost:3000/MapArt/Subscription', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sub),
    })
        .then((respuesta) => respuesta.json())
        .then((data) => {
            Swal.fire(
                '¡Suscripción Exitosa!',
                '¡Presione el botón para continuar!',
                'success'
            )
                .then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "http://localhost:3000/MapArt";
                    } else {
                        reject();
                    }
                })
                .catch(() => {
                    window.location.href = "http://localhost:3000/MapArt";
                });
        });
})