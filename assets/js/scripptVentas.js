let divVenta = document.querySelector(".propsVenta__cards")
let divArriendo = document.querySelector(".propsArriendo__cards")




const propsVenta = [
    {
        nombre: 'Meneses',
        src: './assets/img/prop1.webp',
        unidades: "21",
        metros: "24 a 134",
        ubicacion: 'Francisco Meneses 1580, Estadio Nacional, Ñuñoa, RM (Metropolitana)',
        habitaciones: "1 a 4 dormitorios | 1 a 3 baños",
        entrega: "1 Trimestre 2024",
        costo: "UF 2550",
        smoke: true,
        pets: false
    },
    {
        nombre: 'Edificio Step',
        src: './assets/img/propventa2.webp',
        unidades: "129",
        metros: "21 a 53",
        ubicacion: 'Marchant Pereira 3350, Metro Ñuñoa, Ñuñoa, RM (Metropolitana)',
        habitaciones: "1 a 2 dormitorios | 1 baño",
        entrega: "segundo semestre 2023",
        costo: "UF 2550",
        smoke: false,
        pets: true
    }
    ,
    {
        nombre: 'Eco Irarrázaval',
        src: './assets/img/propventa3.webp',
        unidades: "70",
        metros: "26 a 57",
        ubicacion: 'Av. Irarrázaval 5455, Plaza Egaña, Ñuñoa, RM (Metropolitana)',
        habitaciones: "1 a 2 dormitorios | 1 a 2 baños",
        entrega: "Inmediata",
        costo: "UF 2717",
        smoke: true,
        pets: true
    },
    {
        nombre: 'Mirador 950',
        src: './assets/img/propventa4.webp',
        unidades: "299",
        metros: "22 a 45",
        ubicacion: 'Mirador Azul 950, Plaza Vespucio, La Florida, RM (Metropolitana)',
        habitaciones: "1 a 2 dormitorios | 1 a 2 baños",
        entrega: "1/08/2025",
        costo: "UF 1809",
        smoke: false,
        pets: false
    }
    ,
    {
        nombre: 'Karun',
        src: './assets/img/propventa5.webp',
        unidades: "10",
        metros: "68 a 151",
        ubicacion: 'El Arcángel 4710, Pío XI, Vitacura, RM (Metropolitana)',
        habitaciones: "2 a 3 dormitorios | 2 a 3 baños",
        entrega: "Primer semestre 2024",
        costo: "UF 9390",
        smoke: false,
        pets: true
    }
    ,
    {
        nombre: 'Parque del Sur',
        src: './assets/img/propventa6.webp',
        unidades: "41",
        metros: "20 a 35",
        ubicacion: "General González Balcarce 2020, Parque O'Higgins, Santiago, RM (Metropolitana)",
        habitaciones: "1 dormitorio | 1 baño",
        entrega: "2 Semestre 2023",
        costo: "UF 1975",
        smoke: true,
        pets: false
    }
]




function iteradorVentas(array, div, cc=3) {

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
                `<div class="main__card"> 
        <img src=${i.src}>
        <div class="card__texto">
            <p class="texto__p1">Departamento en venta</p>
            <p class="texto__nombre">${i.nombre}</p>
            <p class="texto__desde">Desde</p>
            <h2 class="texto__h2">${i.costo}</h2>
            <p class="texto__proyecto">PROYECTO</p>
            <div class="texto__carac">
                <p>${i.habitaciones}</p>
                <p>${i.metros} m² útiles</p>


                <div class="texto__clarito">
                <p class="texto__ubic">${i.ubicacion}</p>
                <p>${i.unidades} unidades disponibles</p>
                <p>Entrega ${i.entrega}</p>
                ${fumar}
                ${animales}

                </div>


                
            
            </div>
            
        </div>
    
    </div>
    `
            contador++
            div.innerHTML += template
        }



    }

}

iteradorVentas(propsVenta, divVenta,6)