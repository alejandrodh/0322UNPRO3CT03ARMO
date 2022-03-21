import './App.css';

function App() {
  let nombre = "Ale"
  let gustosHelado = ["chcolate Rappa Nui", "Dulce de leche"];

  return (
    <div>
      <h1>Mi primer app en React</h1>
      <p>Mi nombre es: {nombre}</p>
      <ul>
        { gustosHelado.map( unGusto => <li>{unGusto}</li>) }
      </ul>

    </div>
  );
}

export default App;
