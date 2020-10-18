import React, { Component } from 'react';

import Sidebar from './Sidebar';


class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    }

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';

        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value;
        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value;
        } else {
            genero = this.generoOtroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            biografia: this.bioRef.current.value,
            genero: genero

        }

        this.setState({
            user: user
        });

        console.log("formulario enviado");
        console.log(user)

    }


    render() {

        if (this.state.user) {
            var user = this.state.user;
        }

        return (
            <div id="Formulario">


                <div className="center">
                    <section id="content">

                        <h1 className="subheader">Ingresa los datos:</h1>
                        {/**mostrar datos Formulario*/}
                        {this.state.user &&

                            <div id="user-data">
                                {this.state.user.nombre &&
                                    <p> Nombre:
                             <strong> {user.nombre} </strong>
                                    </p>
                                }
                                {this.state.user.apellidos &&
                                    <p> Apellidos:
                             <strong> {user.apellidos} </strong>
                                    </p>
                                }
                                {this.state.user.biografia &&
                                    <p> Biografia:
 <strong> {user.biografia} </strong>
                                    </p>
                                }
                                {this.state.user.genero &&
                                    <p> Genero:
                                    <strong> {user.genero} </strong>
                                    </p>
                                }

                            </div>


                        }

                        {/**Formulario*/}
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario} >
                            <div className="form-group">
                                <label htmlFor="nombre">Name</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} />Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} />Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} />Otro
                          </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="enviar" className="btn btn-success" />
                            <div className="clearfix"></div>
                        </form>



                    </section>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </div>

        )


    }
}
export default Formulario;