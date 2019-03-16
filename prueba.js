var local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ],

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};

//EJERCICIO 1. precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede
//armar con esos componentes, que es la suma de los precios de cada componente incluido.

function precioMaquina(componentes) {
    var precioTotal = 0;

    for (var i = 0; i < componentes.length; i++) {
        //console.log(parametros[i])

        for (var j = 0; j < local.precios.length; j++) {
            // console.log(local.precios[j].componente)
            // console.log(local.precios[j].precio)

            if (componentes[i] === local.precios[j].componente) {
                precioTotal = precioTotal + local.precios[j].precio
            }
        }
    }

    return precioTotal
}

console.log(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]));



//EJERCICIO 2. cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o 
//sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está 
//identificada por la variable ventas.

function cantidadVentasComponente(componente) {
    var cantidadVendida = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas);

        for (var j = 0; j < local.ventas[i].componentes.length; j++) {
            //console.log(local.ventas[i].componentes)

            if (componente === local.ventas[i].componentes[j]) {
                cantidadVendida++
            }
        }
    }
    return cantidadVendida
}

console.log(cantidadVentasComponente("Monitor ASC 543")); // 2