const API_all = async () => {
    const data = await fetch('https://proyecto-independiente.herokuapp.com/menu');
    const json = await data.json()
    return json
}

const API_categoria = async (categoria) => {
    const data = await fetch(`https://proyecto-independiente.herokuapp.com/menu?categoria=${categoria}`);
    const json = await data.json()
    return json
}

document.addEventListener('DOMContentLoaded', pintarCartas__all())

async function pintarCartas__all(){
    let space = document.getElementById('cartas')
    let data = await API_all()
    space.innerHTML = ''
    data.forEach(element => {
        const {nombre, descripcion, img, precio, categoria} = element;
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
                    <p class="card-text fw-bold">${precio}$</p>
                </div>
            </div>
        </div>
    </div>`
    });
}

async function pintarCartas__categoria(categoria){
    let space = document.getElementById('cartas')
    let data = await API_categoria(categoria)
    space.innerHTML = ''
    data.forEach(element => {
        const {nombre, descripcion, img, precio, categoria} = element;
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
                    <p class="card-text fw-bold">${precio}$</p>
                </div>
            </div>
        </div>
    </div>`
    });
}




