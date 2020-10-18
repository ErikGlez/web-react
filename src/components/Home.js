import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Home extends Component {
    render() {

        return (
            <div id="home">
                <Slider/>
                <div className="center">
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


                </section>
                <Sidebar />
                </div>
            </div>

        )


    }
}
export default Home;