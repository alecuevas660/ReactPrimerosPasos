import './App.css';
import { Game } from './componentes/game'; //importar componente
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>3 clasicos para recordar</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
