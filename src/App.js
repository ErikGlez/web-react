import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/CSS/App.css'; 

// Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';

function hola(nombre){

  var plantilla = (<h2> Hola bienvenido al curso de {nombre}</h2>);

  return plantilla;
}

function App() {
  var nombre = "React";
  return (
    <div className="App">
      <Header/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {hola(nombre)} 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section className="componentes"> 
          <MiComponente />
          <Peliculas/>
      </section>
      </header>
     
    </div>
  );
}

export default App;
