// Login

const form = document.getElementById('logueo');
const usuario = document.getElementById('user');
const contrasena = document.getElementById('password');


function validarCuenta(evento) {
    event.preventDefault(); // Evita que se recargue la pagina al enviar
    const logueado = (usuario.value === "claudia") && (contrasena.value === "18318")
    if (logueado) {
        sessionStorage.setItem('auth', true)
        location.href = "./menu.html"
    } else {
        alert("Usuario o contraseña incorrecta")
    }
}


form.addEventListener("submit", validarCuenta);