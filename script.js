const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const total = document.getElementById('totalAPagar');
const borrar = document.getElementById('borrar');
const resumen = document.getElementById('resumen');

const precio = 200;
let descE = 0.20;
let descT = 0.50;
let descJ = 0.85;
let importe = null;

function calcularTotal() {
    importe = precio * cantidad.value;
    switch (categoria.value) {
        case 'estudiante':
            importe *= descE;
            break;
        case 'trainee':
            importe *= descT;
            break;
        case 'junior':
            importe *= descJ;
            break;
        default:
            break;
    }
    total.textContent = `Total a Pagar: $ ${importe}`;
}

function borrarValor() {
    if (importe !== null) {
        total.textContent = "Total a Pagar: $"
        importe = null;
    }
}

resumen.addEventListener('click', (e) => {
    e.preventDefault();
    calcularTotal();
});

borrar.addEventListener('click', (e) => {
    e.preventDefault();
    borrarValor();
});


