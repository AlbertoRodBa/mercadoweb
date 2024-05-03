// 1. Importar express y las otras libreriras
const express = require('express');
const exphbs = require ('express-handlebars')

// 2. Crear instancia de express
const app = express ()

// 3. Escuchar conexiones http en puerto 3000
app.listen(3000, ()=> {
    console.log("Servidor iniciado en puerto 3000")
})

// 4. Definir Motor Vistas
app.set("view engine", "handlebars")

// Configurar motor vistas
app.engine ("handlebars", exphbs.engine()) // 


// Proporcionar archivos estáticos
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"))
app.use("/popper", express.static(__dirname + "/node_modules/@popperjs/core/dist/umd"))
app.use("/assets", express.static(__dirname + "/assets"))


// 5. Rutas

app.get("/", (req, res) => {
    res.render("home", {
        productos: ["Banana", "Cebollas", "Lechuga", "Papas", "Pimenton", "Tomate"],
    })
})



// Test
// app.get('/', (req, res)=> {
//     res.send('hello world')
// })