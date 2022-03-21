import React, {Component} from 'react';

class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {
            numero:0,
            mensaje: '',
        }
    }

    aumentar(){
        this.setState({
            numero: this.state.numero +1
        })
    }

    disminuir(){
        if(this.state.numero <=0){
            this.setState({
                numero: this.state.numero -1,
                mensaje: "Ojo que vas a números negativos."
            })
        }else{
            this.setState({
                numero: this.state.numero -1
            })
        }
    }

    reset(){
        this.setState({
            numero:0,
            mensaje:''
        })
    }

    render(){
        return(
            <div className='contador'>
                <p className='numeros'>El numero es: {this.state.numero}</p>
                <p className='mensaje'>{this.state.mensaje}</p>
                <button onClick={()=>this.disminuir()}>Bajar</button>
                <button onClick={()=>this.aumentar()}>Subir</button>
                <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
    }

}

export default Contador;

