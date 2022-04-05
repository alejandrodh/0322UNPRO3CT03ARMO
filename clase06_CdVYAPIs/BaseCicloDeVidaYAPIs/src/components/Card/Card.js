import React, {Component} from "react";
import './styles.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        console.log(this.props);
        return(
            <article className="tarjeta">
                <img src={this.props.characterInfo.image} alt={this.props.characterInfo.name} />
                <h3>{this.props.characterInfo.name}</h3>
                <p>Status: {this.props.characterInfo.status}</p>
                <p className="delete" onClick={()=>this.props.borrar(this.props.characterInfo.id)}>Borrar</p>
            </article>
        ) 
    }
}

export default Card;