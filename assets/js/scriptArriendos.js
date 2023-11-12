
let divArriendo = document.querySelector(".propsArriendo__cards")



const propsArriendo = [
    {
        nombre: 'Spot Vista Los Andes',
        src: './assets/img/proparriendo1.webp',
        unidades: "20",
        metros: "41 a 68",
        ubicacion: 'Avenida Manquehue Norte 958, Las Condes, Chile, Parque Arauco, Las Condes, RM (Metropolitana)',
        habitaciones: "1 a 4 dormitorios | 1 a 3 baños",
        costo: "$ 737.205",
        smoke: false,
        pets: false
    }, {
        nombre: 'SOMMA Plaza Ñuñoa',
        src: './assets/img/proparriendo2.webp',
        unidades: "72",
        metros: "34 a 52",
        ubicacion: 'Av. Irarrázaval 2899, Ñuñoa, Chile, Plaza Ñuñoa, Ñuñoa, RM (Metropolitana)',
        habitaciones: "1 a 2 dormitorios | 1 a 2 baños",
        costo: "$ 500.700",
        smoke: true,
        pets: true
    }, {
        nombre: 'Vida Central',
        src: './assets/img/proparriendo3.webp',
        unidades: "28",
        metros: "25 a 45",
        ubicacion: 'Coronel Souper 4200 - 4500, Santiago, Estación Central, Chile, San Alberto Hurtado, Estación Central, RM (Metropolitana)',
        habitaciones: "2 dormitorios | 1 a 2 baños",
        costo: "$ 245.000",
        smoke: true,
        pets: false
    }, {
        nombre: 'Jose Ureta',
        src: './assets/img/proparriendo4.webp',
        unidades: "18",
        metros: "31 a 51",
        ubicacion: 'José Ureta 180, La Cisterna, Chile, Lo Ovalle, La Cisterna, RM (Metropolitana)',
        habitaciones: "1 a 2 dormitorios | 1 a 2 baños",
        costo: "$ 305.000",
        smoke: false,
        pets: true
    }, {
        nombre: 'Jardines Del Pacífico',
        src: './assets/img/proparriendo5.webp',
        unidades: "1",
        metros: "45",
        ubicacion: 'Arriendo Año Corrido Jardines Del Pacífico Iii, Puerta del Mar, La Serena, Coquimbo',
        habitaciones: "2 dormitorios | 2 baños",
        costo: "$ 560.000",
        smoke: true,
        pets: true
    }, {
        nombre: 'Paso el Roble',
        src: './assets/img/proparriendo6.webp',
        unidades: "135",
        metros: "31 a 49",
        ubicacion: 'Paso El Roble 1 - 300, La Florida, Chile, Plaza Vespucio, La Florida, RM (Metropolitana)',
        habitaciones: "1 a 2 dormitorios | 1 a 2 baños",
        costo: "$ 306.031",
        smoke: false,
        pets: true
    },

]




function iteradorArriendo(array, div, cc) {

    contador = 0
    fumar=""
    animales=""
    for (const i of array) {

        if (i.smoke === true) {
            var fumar = `<p class="text-success">
            <i class="fas fa-smoking"></i> Permitido fumar
          </p>`
            

        }if (i.smoke===false) {
            var fumar=
            ` <p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
          </p>`
           
            
        }if (i.pets === true) {
            var animales = `<p class="text-success">
            <i class="fas fa-paw"></i> Mascotas permitidas
          </p>`


        }if (i.pets===false) {
            var animales=
            ` <p class="text-danger">
            <i class=" fas fa-ban"></i> No se permiten mascotas
          </p>`
           
            
        }
        if (contador < cc) {
            let template =
                `<div class="main__card main__card--arriendo"> 
        <img src=${i.src}>
        <div class="card__texto">
            <p class="texto__p1">Departamento en Arriendo</p>
            <p class="texto__nombre">${i.nombre}</p>
            <p class="texto__desde">Desde</p>
            <h2 class="texto__h2">${i.costo}</h2>
            <div class="texto__carac texto__carac--arriendo">
                <p>${i.habitaciones}</p>
                <p>${i.metros} m² útiles</p>


                <div class="texto__clarito texto__clarito--arriendo">
                <p class="texto__ubic">${i.ubicacion}</p>
                <p>${i.unidades} unidades disponibles</p>
                </div>
                ${fumar}
                ${animales}

                
            
            </div>
            
        </div>
    
    </div>
    `
            contador++
            div.innerHTML += template
        }



    }

}

iteradorArriendo(propsArriendo, divArriendo, 6)
