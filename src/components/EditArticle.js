import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import default_img from '../assets/images/default_img.png';

// Recoger el id del articulo a editar de la url
// metodo para sacar el objeto del backend
// rellenar el formulario con los datos obtenidos
// actualizar el objeto con una peticion al backend

class EditArticle extends Component {
    url = Global.url;
    articleId = null;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    };



    constructor(props) {
        super(props);
        // Se carga el objeto para validar el formulario
        // En el curso utiliza el componentWillMount
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido.'
            }
        });
    }

    componentDidMount() {
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id).then(res => {
            this.setState({
                article: res.data.article
            })
        });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }

        });

        //mostrar mensajes de error cada que se cambia algo en el formulario
        this.validator.showMessages();
        this.forceUpdate();


    }

    saveArticle = (e) => {
        e.preventDefault();

        // Rellenar state con formulario
        this.changeState();

        if (this.validator.allValid()) {
            //hacer una petición http por post para guardar el articulo.
            axios.put(this.url + 'article/'+this.articleId, this.state.article).then(res => {

                if (res.data.article) {
                    this.setState({
                        article: res.data.article,
                        status: 'waiting'
                    })

                    swal(
                        'Artículo creado',
                        'El artículo se ha creado correctamente',
                        'success'
                    )

                    // subir la imagen
                    if (this.state.selectedFile !== null) {

                        // sacar el id del articulo guardado
                        var articleId = this.state.article._id;

                        // crear form data y añadir fichero
                        const formData = new FormData();

                        formData.append(
                            'file0',
                            this.state.selectedFile,
                            this.state.selectedFile.name
                        );
                        // peticion ajax    

                        axios.post(this.url + 'upload-image/' + articleId, formData).then(res => {
                            if (res.data.article) {
                                this.setState({
                                    article: res.data.article,
                                    status: 'success'
                                });
                            } else {
                                this.setState({
                                    article: res.data.article,
                                    status: 'failed'
                                })
                            }
                        });



                    } else {
                        this.setState({
                            status: 'success'
                        })

                    }


                } else {
                    this.setState({
                        status: 'failed'
                    });
                }

            });

        } else {
            this.setState({
                status: 'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });

    }


    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog"></Redirect>
        }

        var article = this.state.article;
        var content = article.content;
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar articulo</h1>

                    {this.state.article.title &&
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />
                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}

                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>

                                <textarea name="content"
                                    ref={this.contentRef} onChange={this.changeState}>{content}</textarea>
                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                
                                <input type="file" name="file0" onChange={this.fileChange} />
                                <div className="image-wrap">
                                    {article.image !== null ? (
                                        <img src={this.url + 'get-image/' + article.image}
                                            alt={article.title} className="thumb"  />
                                    ) : (
                                            <img src={default_img}
                                                alt="imagen por defecto" className="thumb"  />
                                        )

                                    }
                                </div>
                            </div>
                            
                            <div className="clearfix"></div>
                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </form>

                    }

                    {!this.state.article.title &&
                        <h2 className="subheader">Cargando...</h2>
                    }


                </section>

                <Sidebar></Sidebar>
            </div>
        );
    }
}
export default EditArticle;