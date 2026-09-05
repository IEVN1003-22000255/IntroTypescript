
function sumar(a:number,b:number):number {
    //si le cambias number arriba ahora si va con el const de abajo lo tenia con void tu defines que va a regresar despues del parentesis y los puntos 
    let res:number=a+b
    //console.log(res)
    return res
}

const resultado=sumar(3,5)
console.log(resultado)

//console.log(sumar(7,3)) esto era cuando tenia void

function multiplicar(n1:number=2,base?:number, n2:number=4):number{
    return n1*n2*base;
}

console.log(multiplicar())
console.log(multiplicar(3))
console.log(multiplicar(3,2))

interface Mascotas{
nombre:string,
edad:number,
raza:string,
sexo?:string,
vacunado:boolean,
mostrarEdad:()=>void

}

function mostrarMascota(mascota=Mascotas, x:number):void{
    mascota.edad+=x;
    
    console.log(mascota)
    console.log(mascota.mostrarEdad())
}

const nuevaMascota:Mascotas={
    nombre:"firulais",
    edad:5,
    raza: "pastor aleman",
    vacunado:true,
    mostrarEdad(){
        console.log(`la edad de $(this.nombre) es $(this.edad)`)
    }
}
mostrarMascota(nuevaMascota,3)