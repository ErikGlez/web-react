import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

// Validacion de formulario y alertas

class CreateArticle extends Component{

    render(){
        return(
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear articulo</h1>
                    
                    <form className="mid-form">
                        <div className="form-group">
                            <labe htmlFor="title">Titulo</labe>
                            <input type="text" name="title" /> 
                        </div>
                        <div className="form-group">
                            <labe htmlFor="content">Contenido</labe>
                            <textarea type="text" name="content"> </textarea>
                        </div>

                        <div className="form-group">
                            <labe htmlFor="file0">Imagen</labe>
                            <input type="file" name="file0" /> 
                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success" />
                    </form>

                </section>

                <Sidebar></Sidebar>
            </div>
        );
    }
}
export default CreateArticle;