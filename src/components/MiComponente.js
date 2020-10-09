import React, {Component} from 'react';

//class MiComponente extends React.Component{
class MiComponente extends Component{

    render(){

        let receta = {
            nombre: 'pizza',
            ingredientes: ['tomate','queso','jamon'],
            calorias: 400
        };

        return (
            //all my JTX here:
            // solo se puede devolver una etiqueta, aunque se puede devolver otras etiquetes dentro de la misma
            <div>
                <h1>Hola, soy el componente llamado: MiComponente</h1>
                <h2>Estoy probando el componente</h2>
                <p>
                    Receta de {receta.nombre}
                    <br></br>
                    {'Calorias:' +receta.calorias}

                   
                  
                </p>
                <ol>
                    {
                 receta.ingredientes.map((ingrediente,i) =>{
                        console.log(ingrediente);
                        return(
                            <li key={i}>
                                {ingrediente}
                            </li>

                        );
                 })
                    }
                    </ol>
                <hr></hr>
                

            </div>
        
            
        );
    }

}

export default MiComponente;