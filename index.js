const express = require("express");
const app = express();

//Integrantes
const integrantes = [
    { id: 1,
      nombre: "Alex",
      apellido: "Cardenas",
      edad: 20,
      correo: "alex.cardenas@epn.edu.ec"
    },
    {
        id: 2,
      nombre: "Steven",
      apellido: "Castillo",
      edad: 20,
      correo: "steven.castillo@epn.edu.ec"
    },
    { id: 3, 
      nombre: "Lenin",
      apellido: "Gómez",
      edad: 21,
      correo: "lenin.gomez@epn.edu.ec"
    },
    {
        id: 4,
      nombre: "Shamyr",
      apellido: "Quishpe",
      edad: 21,
      correo: "shamyr.quishpe@epn.edu.ec"
    },
    {
       id: 5,
       nombre: "David",
       apellido: "Vela",
       edad: 21,
       correo: "david.vela@epn.edu.ec"
    },
    {
       id: 6,
       nombre: "Scarlett",
       apellido: "Luna",
       edad: 20,
       correo: "scarlett.luna@epn.edu.ec"
    }
];


const products = [
    {id:1, nombre: "Smartphone", precio: 799.99, categoria: "Electrónica", stock: 50},
    {id:2, nombre: "Portátil", precio: 1199.99, categoria: "Electrónica", stock: 30},
    {id:3, nombre: "Auriculares Bluetooth", precio: 199.99, categoria: "Accesorios", stock: 100},
    {id:4, nombre: "Cafetera", precio: 499.99, categoria: "Electrodomésticos", stock: 20},
    {id:5, nombre: "Reloj Inteligente", precio: 249.99, categoria: "Accesorios", stock: 75},
];


app.get("/", (req, res) => {
    res.send(`<h1 style="text-align: center;">Bienvenido a la materia de aplicaciones web</h1>
    <p style="text-align: center;">Nos representamos como el grupo N4</p>
    <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" style="width:350px; margin: auto; display: block" alt="imagen express JS"/>`)
});
  

app.get("/integrantes", (req, res) => {
  res.json(integrantes);
})


app.get("/integrantes/:id", (req, res)=>{
    const {id} = req.params; 
    const response = integrantes.find(integrante => integrante.id === +id)
    const integrante = response || "Usuario no encontrado";
    res.json(integrante);
})

app.get("/products/", (req, res)=>{
    res.send(products);
})



app.use((req, res) => {

    res.status(404).send(`<h1 style="text-align: center;">ERROR 404</h1> 
    <p style="text-align: center;">Pagina no Encontrada</p>`)
}
);


app.listen(3000);

console.log("Server ON");

