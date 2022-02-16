apifood = [
    {
        name: 'carne',
        img: './img/1.jpg',
        description: 'This is a wider card with supporting text below as a natural lead-in tocontent.',
        price: '20000',
        categorie: 'fuertes'
    },
    {
        name: 'carne',
        img: './img/1.jpg',
        description: 'This is a wider card with supporting text below as a natural lead-in tocontent.',
        price: '20000',
        categorie: 'fuertes'
    },
    {
        name: 'carne',
        img: './img/1.jpg',
        description: 'This is a wider card with supporting text below as a natural lead-in tocontent.',
        price: '20000',
        categorie: 'fuertes'
    },
    {
        name: 'carne',
        img: './img/1.jpg',
        description: 'This is a wider card with supporting text below as a natural lead-in tocontent.',
        price: '20000',
        categorie: 'fuertes'
    },
]
let cards = apifood;

function pintarCartas(cartas){
    let space = document.getElementById('cartas')
    space.innerHTML = ''
    cartas.forEach(card => {
        const {name, img, description, price, categorie} = card;
        space.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-white text-uppercase">${name}</h5>
                    <p class="card-text ">${description}</p>
                    <p class="card-text fw-bold">${price}$</p>
                </div>
            </div>
        </div>
    </div>`
    });
}
pintarCartas(cards)
