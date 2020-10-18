import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importar componentes
import Error from './components/Error';
import Home from './components/Home';
import Blog from './components/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';


class Router extends Component {

    render() {
      

        return (

            <BrowserRouter>

                <Header />

                    {/*CONFIGURAR RUTAS Y PAGINAS */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/formulario" component={Formulario}/>

                        <Route component={Error} />

                    </Switch>

                    <div className="clearfix"></div>
                <Footer />


            </BrowserRouter>
        )
    }
}

export default Router;