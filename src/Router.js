import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Importar componentes
import Error from './components/Error';
import Home from './components/Home';
import Blog from './components/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';



class Router extends Component {

    render() {
      

        return (

            <BrowserRouter>

                <Header />

                    {/*CONFIGURAR RUTAS Y PAGINAS */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog/crear" component={CreateArticle} />
                        <Route exact path="/blog/editar/:id" component={EditArticle} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                return (<Redirect to={'/blog/busqueda/'+search} />);
                            }
                        } />
                        <Route exact path="/blog/articulo/:id" component={Article} />
                        <Route exact path="/formulario" component={Formulario}/>
                        <Route exact path="/error" component={Error} />
                        <Route component={Error} />

                    </Switch>

                    <div className="clearfix"></div>
                <Footer />


            </BrowserRouter>
        )
    }
}

export default Router;