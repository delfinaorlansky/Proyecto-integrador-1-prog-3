import Navbar from './components/Navbar';
import Contenido from './components/contenido';
import Columna from './components/Columna';
function App () {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <Contenido/>
        <Columna/>
      </header>
    </div>
  )
}

export default App;
