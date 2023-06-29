const salir = document.getElementById("salir");
const user_b = document.getElementById("user_b");


salir.onclick = function () {
    sessionStorage.removeItem("Token");
    window.location.href = "http://localhost:3000/MapArt/Login";
};

async function home() {
    const response = await fetch('http://localhost:3000/MapArt/Home', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
        },
    });

    if (response.status !== 200) {
        setTimeout(() => {
            document.body.style.display = "none";
            window.location.href = "http://localhost:3000/MapArt/Login";
        }, 0);
    } else{
        user();
    }
}


async function user() {
    const response = await fetch('http://localhost:3000/MapArt/User', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
        },
    })
        .then((respuesta) => respuesta.json())
        .then((data) => {
            user_b.textContent = "Bienvenido " + data.Usuario;
        });
}

home();
