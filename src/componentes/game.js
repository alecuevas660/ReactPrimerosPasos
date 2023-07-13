import React from 'react';
import '../estilos/game.css';

//Definir componente funcional

export function Game(props){
  return(  //se retornara todo el codigo a la función Game  
    <div className='contenedor-juego'>    
      <img
       className='imagen-juego'
       src={require(`../img/reseña-${props.imagen}.jpg`)} alt='imggame'/> 

       <div className='contenedor-reseña'>
        <p className='nombre-juego'>{props.nombre}</p>
        <p className='fecha-juego'>{props.fecha}</p>
        <p className='descripcion-juego'>{props.descripcion}</p>
       </div>
    </div>

  );             
}

export default Game; //Exporta el componente