import React from 'react';
import '../estilos/game.css';

//Definir componente funcional

export function Game(){
  return(  //se retornara todo el codigo a la función Game  
    <div className='contenedor-juego'>    
      <img
       className='imagen-juego'
       src={require('../img/acblackflag.jpg')} alt='acbf'/> 

       <div className='contenedor-reseña'>
        <p className='nombre-juego'>Assasin's Creed's Black Flag</p>
        <p className='fecha-juego'>29 de octubre de 2013</p>
        <p className='descripcion-juego'>Todos tenemos nuestras películas sobre combates absurdos. Freddy contra Jason. Mega Tiburón contra Pulpo Gigante. Pero cuando se trata de Piratas contra Assassin's Creed, afortunadamente Black Flag es mucho más que una escaramuza. Este viaje por el Caribe con el pícaro Edward Kenway es una gloriosa aventura empapada de ron. Pistolas, espadas, cañones, islas desiertas y los famosos piratas de la época hacen que el nacimiento de Edward como Assassin se sienta como un sueño brillante. Ignora la campaña, zarpa y averigua a dónde te lleva el viento. Aventuras en una campana de buceo, caza de ballenas, tesoros enterrados, emborracharse en bares, todo está aquí. Y aniquilar barco tras barco y reclamar su tripulación y sus tesoros es más que gratificante.</p>
       </div>
    </div>

  );             
}

export default Game; //Exporta el componente