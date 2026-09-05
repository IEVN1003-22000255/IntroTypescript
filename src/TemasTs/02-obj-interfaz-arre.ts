interface Alumno{
    nombre: string;
    apellido: string;
    edad:number;
    email:string;
    nota?:number;
    //cuanddo se pone signo de interrogacion es para hacerlo opcional 
}


const alumno:Alumno={
    nombre: "mario",
    apellido: "martinez",
    edad:22,
    email:"martinez@gmail.com"
    
}

console.log(alumno)

let mascotas=["perro","gato","perico"]
console.log(mascotas)

mascotas[1]="nuevo gato"
mascotas.push("leon")
//push es para agregar uno nuevo en este caso lo sustituye 
console.log(mascotas)

let tem:(number|string)[]=[]
//esto sirve para que admita tannto numeros como caracteres string

tem.push(1)
tem.push("once")
console.log(tem)
