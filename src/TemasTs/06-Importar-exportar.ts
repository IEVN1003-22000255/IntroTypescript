import {type Producto, calcularISV2} from "./05-desestructuracion-funciones"

const carrito:Producto[]=[
{
    desc:"Telefono 1",
    precio:1000
},
{
    desc:"telefono 2",
    precio:2000
},
{
    desc: "telefono 3",
    precio:3000
  
}
]

const [total,isv]=calcularISV2(carrito);
console.log("Total de carrito: ", total);
console.log("Isv carrito: ", isv)