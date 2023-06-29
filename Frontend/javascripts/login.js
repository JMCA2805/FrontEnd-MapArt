const login = document.getElementById('frmlogin');

login.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = e.target.user.value;
    const password = e.target.password.value;
    const reg = { "user": user, "password": password };

    await fetch('http://localhost:3000/MapArt/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg),
    })
        .then((respuesta) => respuesta.json())
        .then((data) => {
            if (data.message == "Inicio de Sección exitoso") {

                sessionStorage.setItem('Token', data["token"]);

                fetch('http://localhost:3000/MapArt/Home', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
                    },
                })
                    .then((respuesta) => {
                        if (respuesta.ok) {

                            Swal.fire(
                                '¡Inicio de Sección Exitoso!',
                                '¡Presione el botón para continuar!',
                                'success'
                            )
                                .then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.href = "http://localhost:3000/MapArt/Home";
                                    } else {
                                        reject();
                                    }
                                })
                                .catch(() => {
                                    window.location.href = "http://localhost:3000/MapArt/Home";
                                });
                        } else {
                            window.location.href = "http://localhost:3000/MapArt/Login";
                        }
                    })
            } else {
                Swal.fire(
                    '¡Usuario o Contraseña incorrecto',
                    '¡Presione el botón para continuar!',
                    'error'
                )
            }
        });
})

async function inicio() {
    const response = await fetch('http://localhost:3000/MapArt/Home', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
        },
    });

    if (response.status == 200) {
        window.location.href = "http://localhost:3000/MapArt/Home";
    }
}

async function main() {
    await inicio();
}

main();