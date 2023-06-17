const register = document.getElementById('formregister');

register.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const correo = e.target.correo.value;
    const user = e.target.user.value;
    const password = e.target.password.value;
    const reg = { "nombre": nombre, "apellido": apellido, "correo": correo, "user": user, "password": password };

    await fetch('http://localhost:3000/MapArt/Registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg),
    })
        .then((respuesta) => respuesta.json())
        .then((data) => {
            alert("Te haz registrado");
            console.log(data);
            window.location.href = "http://localhost:3000/MapArt/Login";

    });
})