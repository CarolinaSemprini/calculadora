import React from "react";
import '../hojas-estilo/Pantalla.css';

//aqui estoy definiendo un componente como una funcion flecha, se utiliza para funciones que no tiene mucha logica, solo presentacion. Con la flecha indico que va a retornar un imput
const Pantalla = ({ input })=>(
    <div className="input">
        {input}
    </div>
);

export default Pantalla;