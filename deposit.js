const user = [{
    email: 'claudia.castro.manriquez@gmail.com',
    monto: 1000000
}];
let montoElement = document.getElementById('monto');
montoElement.innerHTML = user[0].monto;

function depositar(event) {
    event.preventDefault();
    const deposito = parseInt(document.getElementById("depositAmount").value);
    user[0].monto += deposito;
    montoElement.innerHTML = user[0].monto;
}