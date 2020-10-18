import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas';
import Error from './components/Error';

// Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


class Router extends Component {

    render() {
        var buttonString = "Ir al blog";

        return (

            <BrowserRouter>

                <Header />
                <Slider title="Bienvenido al curso de React"
                    btn={buttonString}
                />
                <div className="center">
                <section id="content">

              

                    {/*CONFIGURAR RUTAS Y PAGINAS */}
                    <Switch>
                        <Route exact path="/" component={SeccionPruebas} />
                        <Route exact path="/home" component={SeccionPruebas} />
                        <Route exact path="/ruta-prueba" component={SeccionPruebas} />

                        <Route exact path="/pagina-1" render={() => (
                            <h1> Pagina 1  </h1>

                        )} />

                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;
                            return (
                                <div id="content">
                                    <h2 className="subheader">Pagina de pruebas</h2>
                                    <h2>{nombre && !apellidos &&
                                        <span>{nombre}</span>
                                    }
                                        {nombre && apellidos &&
                                            <span>{nombre} {apellidos}</span>
                                        }

                                    </h2>
                                </div>
                            )
                        }
                        } />

                        <Route component={Error} />

                    </Switch>
                    </section>

                    <Sidebar />
                    <div class="clearfix"></div>
                </div> {/* fin div center */}


                <Footer />


            </BrowserRouter>
        )
    }
}

export default Router;