//puede haber una interface dentro de otra

interface Reproductor{
    volumen:number,
    seundo:number,
    cancion:string,
    detalles:Detalles
}

interface Detalles{
    autor:string
    anio:number
}

const reproductor:Reproductor={

    volumen:90,
    segundo:36,
    cancion:"mess",
    detalles:{
        autor:"Ed sheeran",
        anio:2015
    }

}

//desestructuracion de objetos 
const{volumen,segundo,cancion,detalles}=reproductor;
const{autor,anio}=detalles;
console.log("el volumen actual es : ",reproductor.volumen)
console.log("el segundo actual es : ",reproductor.segundo)
console.log("la cancion actual es : ",reproductor.cancion)
console.log("el autor es : ",reproductor.detalles.autor)
console.log("el anio es : ",reproductor.detalles.anio)

//destructuracion de arreglos
const dbz:string[]=["goku","vegeta", "Trunks"];
const [p1,p2,p3]=dbz;
console.log("personaje 1: ", p1);
console.log("personaje 2: ", p2);
console.log("personaje 3: ", p3);