/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            texto: "Ver más",
            viewMore: false,
        }
    }

    verMas(){
        console.log("Cambiando vieMore");
        if(this.state.viewMore === false){
            this.setState({
                viewMore:true,
                texto: 'Ver menos'
            })
        } else {
            this.setState({
                viewMore: false,
                texto:'Ver más'
            })
        }
    }

    render(){
        //console.log(this.props);
        return (
            <div className="character-card">
                <img src={`/assets/images/characters/${this.props.data.img}`} alt="" />
                <h4>{this.props.data.name}</h4>
                <p>{this.props.data.description}</p>
                <p className={this.state.viewMore === false ? 'hide' : 'show'}>Universo: {this.props.data.extra}</p>
                <p onClick={()=>this.verMas()} className='more'>{this.state.texto}</p>
            </div>
        );
    }
}

export default Card