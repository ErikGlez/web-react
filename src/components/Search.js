import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';


class Search extends Component {


    render() {
        
        var searched = this.props.match.params.search;
    
        return (
            <div id="Blog">
                <Slider title={'busqueda: '+searched}
                    size="slider-small"
                />

                <div className="center">
                    <section id="content">
                        {/**Listado de articulos que coinciden con la busqueda*/}
                        <Articles 
                            search={searched}
                        />

                        
                        


                    </section>
                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>

        )


    }
}
export default Search;