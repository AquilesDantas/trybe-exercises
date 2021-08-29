import './App.css';
import Pokedex from './components/pokedex';
import pokemons from './data';

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Pokedex list={pokemons}/>
    </div>
  );
}

export default App;
