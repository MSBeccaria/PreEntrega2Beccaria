const turistas = [
    {
        tour: "Casco histórico",
        nombre: "Susana",
        apellido: "Lopez",
        mail: "susana@lopez"
    },
    {
        tour: "Patrimonio arquitectura",
        nombre: "Juan", apellido: "Perez",
        mail: "juan@perez"
    },
    {
        tour: "Casco histórico",
        nombre: "Ana",
        apellido: "Gomez",
        mail: "ana@gomez"
    }
]
let nombre = prompt("Ingrese nombre de la persona buscada")
let apellido = prompt("Ingrese apellido de la persona buscada")

function buscarTurista(name, lastName) {
    let turista = turistas.filter(iten => {
        return iten.nombre == name && iten.apellido == lastName
    })
    
    if(turista.length === 0) {
        return undefined
    } else {
        return turista[0].tour
    }
}

function init() {
    let busqueda = buscarTurista(nombre, apellido);
   
    if (busqueda != undefined) {
        alert(`Reserva de ${apellido} para tour ${busqueda}`);
    } else {
        alert("No hay reserva a ese nombre")
        console.log(busqueda)
    }
}
init(