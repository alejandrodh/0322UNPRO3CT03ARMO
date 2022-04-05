import React, {Component} from 'react';

class Formulario extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    evitarDefault(evento){
        evento.preventDefault();
        console.log('Evitando el envío');
    }

    obtenerDatos(evento){
        this.setState({
          value: evento.target.value,  
        }, () => console.log(this.state.value))
    }


    render(){
        return(
            <form onSubmit={(evento)=>this.evitarDefault(evento)} className='mb-4'>
                <input onChange={(evento)=>this.obtenerDatos(evento)} type="text" name="usuario" value={this.state.value} />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default Formulario;