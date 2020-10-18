import React, { Component } from 'react';

class SeccionPruebas extends Component {

    contador = 0;
    
    /*
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        };
    }
    */

    state = {
        contador: 0
    };

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador +1)
        });
    }

    restar = (e) =>{
        
        this.setState({
            contador: (this.state.contador -1)
        });
    }

    render() {
        return (
            <section id="content">
                <h2 className="subheader">Últimos articulos</h2>
                <div id="articles">
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            <img src="https://mockupgratis.com/wp-content/uploads/2019/05/Mockup_Taza_Cafe%CC%81_Restaurante_mockupgratis.com_-1024x683.jpg"
                                alt="tasa-cafe" />
                        </div>
                        <h2>Articulo de prueba</h2>
                        <span className="date">
                            Hace 5 minutos
                    </span>
                        <a href="article.html">Leer más</a>
                        <div className="clearfix"></div>
                    </article>

                </div>
                <h2 className="subheader">Estado</h2>
                <p>
                    contador: {this.state.contador}
                </p>

                <p>
                    <input type="button" value="sumar" onClick= {this.sumar} />
                    <input type="button" value="restar" onClick= {this.restar} />
                </p>



            </section>
            


        );
    }
}

export default SeccionPruebas;