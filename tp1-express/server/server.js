const express = require("express");

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Servidor de Express en el puerto 3000")
})

app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})