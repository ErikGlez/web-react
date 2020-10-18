import React from 'react';
import cohete from '../assets/images/cohete.gif';

const Error = ()=>{
    return(
        <section id="contentError">
             <div className="center">
        <div id="error">
            <div id="gift">
                <img src={cohete} alt="cohete en el espacio"/>
            </div>
            <div id="message">
                <div className="content">
                    <h1>404</h1>
                    <h2>Page not found.</h2>
                    <p>
                       The page you're looking for doesn't exist or other error occurred.
                       
                    </p>
                    <a href="/">Go Back</a> 
                </div>
                    
            </div>
    
             {/** limpiar flotados */}
                <div className="clearfix"></div>
           
        </div>
    
    </div>
    
        </section>
    );
}

export default Error;