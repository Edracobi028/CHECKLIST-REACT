import logo from './platzi.webp'; /* habilitar el logo */
import './App.css'; /* Habilitamos los estilos */

/* Componente REACT Nota: Los componentes con jsx (js + xml)react inician con Mayusculas*/
function App() {
  return (
    <div className="App">

      <TodoItem/>{/* El componente react To-doItem insertado como un elemento */}
      <TodoItem/>
      <TodoItem/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

/* Componente React to-doItem */
function TodoItem() {
  return(
    <li>
      <span>V</span>
        <p>Llorar con la llorona</p>
      <span>X</span>
    </li>
  );
}
  

export default App;
