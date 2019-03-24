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

            if (local.ventas[i].componentes[j] === componente) {
                cantidadVendida++
            }
        }
    }
    return cantidadVendida
}

console.log(cantidadVentasComponente("Monitor ASC 543")); // 2
// console.log(cantidadVentasComponente("Motherboard ASUS 1200"));
// console.log(cantidadVentasComponente("Monitor GPRS 3000"));



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

console.log('Cantidad de ventas mes Enero ' + ventasMes(1, 2019)); // 1250

// EJERCICIO 1E. ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

function ventasVendedora(nombre) {

    var ventasTotales = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].nombreVendedora == nombre) {
            ventasTotales = ventasTotales + precioMaquina(local.ventas[i].componentes)
        }
    }
    return ventasTotales
}

console.log('Ventas totales realizadas por Grace ' + ventasVendedora("Grace")); // 900


//EJERCICIO 1F. componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de 
//la cantidad de ventas es el que indica la función cantidadVentasComponente

function componenteMasVendido() {

    var masVendido = 0;
    var arrayActual = 0;
    var nombre;

    for (var i = 0; i < local.precios.length; i++) {
        arrayActual = cantidadVentasComponente(local.precios[i].componente);
        //console.log(cantidadVentasComponente(local.precios[i].componente))

        if (arrayActual > masVendido) {
            masVendido = arrayActual;
            nombre = local.precios[i].componente;
        }
        arrayActual = 0;
    }
    return nombre
}

console.log(componenteMasVendido()); // Monitor GPRS 3000


//EJERCICIO 1G. huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.

function huboVentas(mes, anio) {

    var ventasMes = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].fecha.getMonth() + 1 == mes && local.ventas[i].fecha.getFullYear() == anio) {
            //console.log(precioMaquina(local.ventas[i].componentes))
            ventasMes = true;
        } else {
            ventasMes = false;
        }
    }
    return ventasMes
}

console.log(huboVentas(3, 2019)); // false
//console.log( huboVentas(1, 2019) );


// EJERCICIO 2A. En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).

for (var i = 0; i < local.ventas.length; i++) {
    local.ventas[i].sucursal = 'Centro';
}

console.log(local);


//EJERCICIO 2B. Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']

local.sucursal = ['Centro', 'Caballito']

console.log(local);

//EJERCICIO 2C. Cargar la siguiente información en el array ventas, creando sus respectivos objetos siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal

var nuevaData = [

    { fecha: new Date(2019, 2, 12), nombreVendedora: 'Hedy', componentes: ['Monitor GPRS 3000', 'HDD Toyiva'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 24), nombreVendedora: 'Shreyl', componentes: ['Motherboard ASUS 1500', 'HDD Wezter Dishital'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 1), nombreVendedora: 'Ada', componentes: ['Motherboard MZI', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 11), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'RAM Quinston'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 11), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'RAM Quinston'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 15), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 12), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1500', 'HDD Toyiva'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 21), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'RAM Quinston'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 8), nombreVendedora: 'Sheryl', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 16), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston Fury'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 27), nombreVendedora: 'Hedy', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 22), nombreVendedora: 'Grace', componentes: ['Monitor ASC 543', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 5), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1500', 'RAM Quinston'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 1), nombreVendedora: 'Grace', componentes: ['Motherboard MZI', 'HDD Wezter Dishital'], sucursal: 'Centro' },
    { fecha: new Date(2019, 2, 7), nombreVendedora: 'Sheryl', componentes: ['Monitor GPRS 3000', 'RAM Quinston'], sucursal: 'Caballito' },
    { fecha: new Date(2019, 2, 14), nombreVendedora: 'Ada', componentes: ['Motherboard ASUS 1200', 'HDD Toyiva'], sucursal: 'Centro' }
]

for (var i = 0; i < nuevaData.length; i++) {
    local.ventas.push(nuevaData[i])
}

//EJERCICIO 2D. Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal) {

    var VentasPorSucursal = 0;

    for (var i = 0; i < local.ventas.length; i++) {

        if (local.ventas[i].sucursal === sucursal) {
            VentasPorSucursal = VentasPorSucursal + precioMaquina(local.ventas[i].componentes)
        }
    }
    return VentasPorSucursal
}

console.log(ventasSucursal("Centro")); // 4195


//EJERCICIO 2E. Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero 
//trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

function ventasPor(nombreProp, valorProp) {
    var acumVentas = 0;

    for (var i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i][nombreProp] === valorProp) {
            acumVentas = acumVentas + precioMaquina(local.ventas[i].componentes);
        }
    }
    return acumVentas
}

console.log(ventasPor('nombreVendedora', 'Hedy'));
console.log(ventasPor('sucursal', 'Caballito'));

//EJERCICIO 2F. Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre 
//de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta 
//es el que indica la función precioMaquina.

function sucursalDelMes(mes, anio) {

    var montoMaximo = 0;
    var montoActual = 0;
    var sucursalGanadora;

    for (var i = 0; i < local.ventas.length; i++) {
        for (var j = 0; j < local.ventas.length; j++) {
            if (local.sucursal[i] === local.ventas[j].sucursal && local.ventas[j].fecha.getMonth() + 1 === mes && local.ventas[j].fecha.getFullYear() === anio) {
                montoActual = montoActual + precioMaquina(local.ventas[j].componentes)
            }
        }
        if (montoActual > montoMaximo) {
            montoMaximo = montoActual;
            sucursalGanadora = local.sucursal[i];
        }
        montoActual = 0;
    }
    return sucursalGanadora
}

console.log(sucursalDelMes(1, 2019)); // "Centro"

//EJERCICIO 3A. Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

// renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año
// console.log( renderPorMes() );
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210

function renderPorMes() {
    var mesesNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var mesesLetras = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


    for (var i = 0; i < mesesNum.length; i++) {
        if (ventasMes(mesesNum[i], 2019) != 0) {
            console.log("Total de " + mesesLetras[i] + ": " + ventasMes(mesesNum[i], 2019));
        };
    }
}

console.log(renderPorMes());

//EJERCICIO 3B. renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal() {

    for (var a = 0; a < local.sucursal.length; a++) {
        console.log("Total de " + local.sucursal[a] + ": " + ventasVendedora(local.sucursal[a]))
    }
}

console.log(renderPorSucursal());
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265


//EJERCICIO 3C. render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

function render(){
    var render1= renderPorMes()
    var render2= renderPorSucursal();
    var mensaje= "Producto Estrella: " +componenteMasVendido()
    var mensajeDos= vendedoraDelMes()

    return render1 +" -" +  render2 + " - " + mensaje + " - " + mensajeDos
}

console.log( render() );
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace