import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importar componentes
import Error from './components/Error';
import Home from './components/Home';
import Header from './components/Header';

import Footer from './components/Footer';


class Router extends Component {

    render() {
      

        return (

            <BrowserRouter>

                <Header />

                    {/*CONFIGURAR RUTAS Y PAGINAS */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Home} />

                        <Route component={Error} />

                    </Switch>

                    <div class="clearfix"></div>
                <Footer />


            </BrowserRouter>
        )
    }
}

export default Router;