import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Moment from 'react-moment'
import 'moment/locale/es';
import Global from '../Global';
import default_img from '../assets/images/default_img.png';



class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null

    }


    componentDidMount(){
        var home = this.props.home;
        var search = this.props.search;
        if(home==='true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);
        }else{
            this.getArticles();
        }

       
    }

    // llamada ajax para obtener los ultimos 5 articulos
    getLastArticles = ()=>{
        axios.get(this.url+"articles/last").then(res =>{
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
            
        });
    }
    
    //obtener articulos que coinciden con la busqueda
    getArticlesBySearch = (searched)=>{
        axios.get(this.url+"search/"+searched).then(res =>{

            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
            
        }).catch(err => {
            this.setState({
                articles: [],
                status: 'success'
            });
        });
    }

     // Obtener todos los articulos
    getArticles = ()=>{
        axios.get(this.url+"articles").then(res =>{
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
            
        });
    }

    render(){

        if(this.state.articles.length >= 1){

            var listArticles = this.state.articles.map((article)=>{
                return (
                    <article key={article._id}  className="article-item" id="article-template">
                    <div className="image-wrap">
                        {article.image !== null ? (
                             <img src={this.url+'get-image/'+article.image}
                             alt={article.title} />
                        ): (
                            <img src={default_img}
                            alt="imagen por defecto" />
                        )
                        
                        }

                       
                    </div>
                <h2>{article.title}</h2>
                    <span className="date">
                       <Moment locale="es" fromNow date={article.date}>  </Moment>
                    </span>
                    <Link to={'/blog/articulo/'+article._id}>Leer más</Link>
                    <div className="clearfix"></div>
                </article>
                );
            })


            return(
                <div id="articles">
                   {listArticles}
                </div>
            );
        }else if(this.state.articles.length === 0 && this.state.status === 'success'){
            return(
                <div id="articles">
                    <h2 className="subheader">
                        No hay articulos para mostrar
                    </h2>
                    <p>
                        Aun no hay contenido en esta sección
                    </p>
                </div>
            );
        }else{
            return(
                <div id="articles">
                    <h2 className="subheader">
                        cargando...
                    </h2>
                </div>
            );
        }

       
    }
    

}

export default Articles;