const tours = [
    {
        id: 01,
        nombre: "Casco histórico",
        dia: "martes",
        precio: 150,
        detalle: "en este paseo conocerás por la parte antigua de la ciudad y te asombrará"
    },
    {
        id: 02,
        nombre: "Casco histórico",
        dia: "viernes",
        precio: 150,
        detalle: "en este paseo conocerás por la parte antigua de la ciudad y te asombrará"
    },
    {
        id: 03,
        nombre: "Plazas",
        dia: "miércoles",
        precio: 100,
        detalle: "Conocerás la historia y la naturaleza de las plazas de la ciudad"
    },
    {
        id: 04,
        nombre: "Cementerio",
        dia: "domingos",
        precio: 100,
        detalle: "hay un mundo de misterio y simbolismo que espera a ser descubierto"
    }

]
let miTour =  ""
let details = ""

function buscarTour(nameTour){
    let tour = tours.filter(item=>{
        return item.nombre == nameTour
    })
    let dias =[]
    for (const days of tour) {
        dias.push(days.dia)
    }
    return dias
}

function buscarDetalle(nombre){
    let salida = tours.find(item=>item.nombre ===nombre)
    return salida.detalle
}

do {
   let opciones = parseInt(prompt("Tenemos 3 salidas para vos: 1.Cementerio, 2.Casco histórico y 3.Plazas. Indicá el número de opción deseada"))
   switch (opciones) {
    case 1:
        miTour = buscarTour("Cementerio")
        details = buscarDetalle("Cementerio")
        alert ("El tour se realiza los días"+ " " + miTour.join("y ") + " y te contamos que" + " " + details)
        condition = confirm('Querés volver al menú de salidas? O querés reservar esta?')
        break;
    case 2 :
        miTour = buscarTour("Casco histórico")
        details = buscarDetalle("Casco histórico")
        alert ("El tour se realiza los días"+ " " + miTour.join("y ") + " y te contamos que" + " " + details)
        condition = confirm('Querés volver al menú de salidas? O querés reservar esta?')
        
        break;    
    case 3:
        miTour = buscarTour("Plazas")
        details = buscarDetalle("Plazas")
        alert ("El tour se realiza los días"+ " " + miTour.join("y ") + " y te contamos que" + " " + details)
        condition = confirm('Querés volver al menú de salidas? O querés reservar esta?')
        
        break;
   
    default:
        alert ("la opción seleccionada no es correcta")
        condition = true
        break;
   } 
   
} while (condition);
       alert =("Gracias, vuelva pronto")

