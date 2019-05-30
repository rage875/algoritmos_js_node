// Crea un algoritmo que imprima la marca, modelo, precio del teléfono más barato y
// el nombre de la tienda donde se puede comprar usando el arreglo store
const stores = [{
    name: "Amazon",
    stock: [
            { marca: "Huawei", modelo: "P30", precio: 11999 },
            { marca: "Apple", modelo: "iPhone x", precio: 18000 },
            { marca: "Motorola", modelo: "Moto X", precio: 9000 }
    ]
    },
    {
    name: "Liverpool",
    stock: [
            { marca: "Huawei", modelo: "P30", precio: 13500 },
            { marca: "Apple", modelo: "iPhone x", precio: 20000 },
            { marca: "Motorola", modelo: "Moto X", precio: 10000 }
    ]
    }
    ]


let telBarato = stores[0].stock[0];
let tienda;

for(let i = 0; i < stores.length; i++){
    for(let j = 0; j < stores[i].stock.length; j++){
        if(telBarato.precio >  stores[i].stock[j].precio)
        {
            telBarato = stores[i].stock[j]
            tienda = stores[i].name
        }
    }
}

console.log("Telefono mas barato, marca:", telBarato.marca,
            " modelo: ", telBarato.modelo,
            " precio: ", telBarato.precio,
            " en tienda:", tienda)