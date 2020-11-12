import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment'
import 'moment/locale/es';
import default_img from '../assets/images/default_img.png'

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentDidMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id).then(res => {
            this.setState({
                article: res.data.article,
                status: 'success'

            })
        }).catch(err =>{
            this.setState({
                article: false,
                status: 'success'
            })
        });
    }

    deleteArticle = (id)=>{

        swal({
            title: "Estas seguro?",
            text: "Sera eliminado, no recuperaras este articulo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete(this.url+'article/'+id).then(res =>{
                    this.setState({
                        article: res.data.article,
                        status: 'deleted'
        
                    })
               
              swal('Artículo eliminado',
              'El artículo se ha eliminado correctamente',{
                icon: "success",
              });
            });
            } else {
              swal("Tranquilo tu artículo sigue posteado");
            }
          });
         
    }

    render() {
        if(this.state.status ==='deleted'){
            return <Redirect to="/blog"></Redirect>
        }
        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">
                    {this.state.article &&
                        <article className="article-item article-detail" >
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
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                               <Moment locale="es" fromNow date={article.date}></Moment>
                  </span>
                            <p>
                                {article.content}
                         </p>

                         <button onClick={
                             ()=>{
                                 this.deleteArticle(article._id)
                             }
                         } className="btn btn-danger">Eliminar </button>
                         <Link to={'/blog/editar/'+article._id}className="btn btn-update">Editar </Link>
                           
                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'success' &&
                    <div id="article">
                        <h2 className="subheader">El articulo no existe</h2>
                        <p>
                            Intentalo de nuevo mas tarde.
                        </p>
                    </div>
                        
                    }

                    {this.state.status == null &&
                    <div id="article">
                        <h2 className="subheader">Cargando...</h2>
                        <p>
                            Espere un momento.
                        </p>
                    </div>
                        
                    }



                </section>



                <Sidebar />

            </div>

        );
    }

}
export default Article;