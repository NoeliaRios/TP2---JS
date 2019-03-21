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

//EJERCICIO 1A. precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede
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



//EJERCICIO 1B. cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o 
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



//EJERCICIO 1C. vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora 
// que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el 
// que indica la función precioMaquina.

function vendedoraDelMes(mes, anio) {

    var nuevaVarParaGuardarcomponentes = 0;
    var ventasAda = 0;
    var ventasGrace = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].fecha.getMonth() + 1)
        //console.log(mes)
        //console.log(local.ventas[i].fecha.getFullYear())

        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
            //console.log(precioMaquina(local.ventas[i].componentes))
     

        if (local.ventas[i].nombreVendedora == "Ada") {
            //console.log(precioMaquina(local.ventas[i].componentes))
            ventasAda = ventasAda + precioMaquina(local.ventas[i].componentes)
        }

        if (local.ventas[i].nombreVendedora == "Grace") {
            //console.log(precioMaquina(local.ventas[i].componentes))
            ventasGrace = ventasGrace + precioMaquina(local.ventas[i].componentes)
        }
    }

    } if (ventasAda < ventasGrace) {
        console.log("Gano Ada con " + ventasAda)
        return 'Ada'
    }
    else if (ventasAda > ventasGrace) {
        console.log("gano grace con " + ventasGrace)
        return "grace"
    }
}

console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)


//EJERCICIO 1D. ventasMes(mes, anio): Obtener las ventas de un mes.

function ventasMes(mes, anio) {

    var ventasTotal = 0

    for (var i = 0; i < local.ventas.length; i++) {       

        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
            //console.log(precioMaquina(local.ventas[i].componentes))
            ventasTotal = ventasTotal + precioMaquina(local.ventas[i].componentes)            
        }
    }
    return ventasTotal
}

console.log( ventasMes(1, 2019) ); // 1250

