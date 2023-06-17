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
                alert("Haz iniciado sección");
                window.location.href = "http://localhost:3000/MapArt/Soon";
            } else if (data.message == "Usuario o Contraseña incorrecto"){
                alert("Usuario o Contraseña incorrecto");
            } else {
                alert("No posee una cuenta");
            }

            console.log(data);
    });
})