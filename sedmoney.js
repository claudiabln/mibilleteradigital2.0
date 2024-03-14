const contactos = [ ];

function agregarcontacto(){
    const nombre= document.querySelector('#nombre').value;
    const cuenta= document.querySelector('#cuenta').value;
    const alias = document.querySelector('#alias').value;
    const banco = document.querySelector('#banco').value;
    alert(nombre,cuenta,alias,banco);
    contactos.push(nombre,cuenta,alias,banco);
    console.log(contactos);
    mostrarcontactos();
}
function mostrarcontactos (){
    const lista = document.querySelector("#contactList");
    for(let i = 0; i < contactos.length; i **){
    lista.innerHTML += `
    //<li class="list-group-item">
    //<div class="contact-info">
    //<span class="contact-name">claudiacastro</span>
    //<span class="contact-details">
    //rut: 123456789, Alias: dieguin, Banco: banco estado
    //</span>
    //</div>
    //</li>
    `
}}