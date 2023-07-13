import './App.css';
import { Game } from './componentes/game'; //importar componente
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>3 clasicos para recordar</h1>
        <Game
        nombre='Assassins Creed Black Flag'
        fecha= '29 de octubre de 2013'
        descripcion = 'El escenario es ahora el mar Caribe, y la época principios del siglo XVIII, con un Edward Kenway que ha decidido dedicarse a la piratería por verle mayor ganancia que ser un corsario al servicio de la marina inglesa. Una serie de acontecimientos le irán sumergiendo en la eterna guerra entre los asesinos y templarios mientras cumplimos todo tipo de misiones a lo largo y ancho del Caribe en su época más memorable. Si en ACIII contábamos con un barco y un sistema de batallas navales un tanto paralelo y opcional, en ACIV: Black Flag es una de las partes centrales del juego. A bordo de nuestro barco Jackdaw surcaremos las aguas más calientes del mundo convirtiéndonos en el terror de los mares, en misiones que combinan esta dinámica con las mecánicas clásicas de Assassin’s Creed: Sigilo, armas e ítems para aprovecharlo, y un sistema de combate sencillo pero muy satisfactorio.'
        imagen='ac'
        />

        <Game
        nombre='God Of war'
        fecha= '22 de marzo de 2005'
        descripcion = 'Kratos es el protagonista de God of War, un feroz guerrero espartano que es, a su vez, hijo de Zeus y Calisto, lo que le otorga el estatus de semidiós. El relato real del personaje, por otra parte, comienzo cuando hace un trato con Ares, el dios griego de la guerra: si accede a destruir a sus enemigos, Kratos le ofrecerá su vida como sirviente. Ares, lógicamente, acepta ante la posibilidad de hacerse con un esbirro más.'
        imagen='gow'/>

        <Game
        nombre='Prince Of Persia'
        fecha= '22 de marzo de 2005'
        descripcion = 'En el medio oriente, un príncipe persa se alía con la princesa de un reino vecino para proteger el secreto de las Arenas del Tiempo y también para capturar al asesino del rey de Persia, el cual pretende retroceder en el tiempo.'
        imagen='prince'/>
      </div>
    </div>
  );
}

export default App;
