const API_all = async () => {
    const data = await fetch('https://proyecto-independiente.herokuapp.com/menu');
    const json = await data.json()
    return json
}

const API_categoria = async (categoria) => {
    const data = await fetch(`https://proyecto-independiente.herokuapp.com/menu?categoria=${categoria}`);
    const json = await data.json()
    console.log(json)
    return json
}

document.addEventListener('DOMContentLoaded', pintarCartas__all())

// pinta todo
async function pintarCartas__all() {
    let space = document.getElementById('cartas')
    let data = await API_all()
    space.innerHTML = ''
    data.forEach(element => {
        const { nombre, descripcion, img, precio, categoria } = element;
        space.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
                <img src="${img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-white text-uppercase">${nombre}</h5>
                    <p class="card-text ">${descripcion}</p>
                    <p class="card-text fw-bold">${precio}$ <button class="btn btn-info float-end" type="button" id="agregar" onclick="guardarCarrito('${img}', '${nombre}')">Agregar <i class="fas fa-shopping-cart"></i></button></p>
                </div>
            </div>
        </div>
    </div>`
    });
}

// pinta por el filtro categorias
async function pintarCartas__categoria(categoria) {
    let space = document.getElementById('cartas')
    let data = await API_categoria(categoria)
    space.innerHTML = ''
    data.forEach(element => {
        const { nombre, descripcion, img, precio, categoria } = element;
        space.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-white text-uppercase">${nombre}</h5>
                    <p class="card-text ">${descripcion}</p>
                    <p class="card-text fw-bold">${precio}$ <button class="btn btn-info float-end" type="button" id="agregar" onclick="guardarCarrito('${img}', '${nombre}')">Agregar <i class="fas fa-shopping-cart"></i></button></p>
                </div>
            </div>
        </div>
    </div>`
    });
}


// pintar elementos en el carrito
let pedidoCarrito = []
let x = 0
function guardarCarrito(img, name) {
    let carrito = document.getElementById('listarCarrito');

    if (true) {
        x++;
        pedidoCarrito += [
            name + ', '

        ];
        console.log(pedidoCarrito)
        console.log(pedidoCarrito.length)
        console.log(x)
    }
    let total = document.getElementById('listasNumeroP');
    total.innerHTML = `<tr>
            <td>Total de pedidos</td>
            <td>${x}</td>
                    </tr>`
    carrito.innerHTML += `
    <tr>
                    <td><div class="divCarrito"><img src="${img}" alt=""></div></td>
                    <td>${name}</td>
                </tr>
    `

}

function confirmarP() {
    let nombre = document.getElementById("inputNombre").value;
    let telefono = document.getElementById("inputTelefono").value;
    let mesa = document.getElementById("inputMesa").value;
    let hora = document.getElementById("inputHora").value;
    
    if(x === 0){
        alert('No hay nada en el carro')
    }else if (nombre.length == 0 || telefono.length == 0 || hora.length == 0){
        alert('faltan datos por llenar')
    }else{
    let pedido = [nombre, telefono, mesa, hora];
    console.log(pedido)
    alert(`Se han confirmado ${x} pedidos para ${nombre} a las ${hora}`)
    }
}



