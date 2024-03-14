const user = [ 
    {
        email: "claudia.castro.manriquez@gmail.com",
        saldo: 2000000 ,
}
];


function menuItem() {
    const email = document.querySelector("#email");
    const saldo = document.querySelector ("#saldo");
    email.innerHTML = user[0].email; 
    saldo.innerHTML = user[0].saldo;
}