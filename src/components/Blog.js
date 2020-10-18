import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';


class Blog extends Component {


    render() {

    
        return (
            <div id="Blog">
                <Slider title="Blog"
                    size="slider-small"
                />

                <div className="center">
                    <section id="content">
                        {/**Listado de articulos que vendran del api */}
                        <Articles />

                        
                        


                    </section>
                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>

        )


    }
}
export default Blog;