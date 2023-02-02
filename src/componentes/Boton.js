import React from 'react';
import '../hojas-estilo/Boton.css'

function Boton (props){

    const esOperador=valor=>{
    //si el valor no es un numero (isNaN) y si el valor no es un punto y si el valor no es un =, entonces se considera un OPERADOR y se retorna el valor verdadero. Sino si cualquiera de esos criterios es falso, retorna falso
    return isNaN(valor) && (valor !='.') && (valor != '=');
    };


    return (
      //aqui coloco una clase de manera dinamica para saber si el valor de children es un operador o no lo es. Si el valor de la funcion esOperador es verdadero se va a remplazar por la clase es operador, si es falso entonces se remplaza por vacio, que  no hara ningun cambio en las clases. Con trimEnd elimino los espacios al final
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
      onClick={()=>props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
}

export default Boton;