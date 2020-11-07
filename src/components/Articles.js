import React, {Component} from 'react';
import axios from 'axios';
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


    componentWillMount(){
        this.getArticles();
    }

    getArticles = ()=>{
        axios.get(this.url+"articles").then(res =>{
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
             //console.log(this.state);
        });
    }

    render(){

        if(this.state.articles.length >= 1){

            var listArticles = this.state.articles.map((article)=>{
                return (
                    <article className="article-item" id="article-template">
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
                    <a href="article.html">Leer más</a>
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