import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';


class Home extends Component {
    render() {
        var buttonString = "Ir al blog"
        return (
            <div id="home">
                 <Slider title="Bienvenido al curso de React"
                btn={buttonString}
                size="slider-big"
                />
                <div className="center">
                <section id="content">
                    <h2 className="subheader">Últimos articulos</h2>
                    <Articles 
                    home="true"
                    />


                </section>
                <Sidebar />
                </div>
            </div>

        )


    }
}
export default Home;