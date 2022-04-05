import React, {Component} from 'react';

class Navitem extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    pasarPorArriba(){
        console.log('Clickeaste el elemento: ' + this.props.dataItem.menu);
    }

    render(){
        return(
                <li onClick={() => this.pasarPorArriba()} className="nav-item">
                    {/* Para verlo en la consola eliminen href */}
                    <a className="nav-link" href="/">
                         <i className={`fas fa-fw ${this.props.dataItem.icono}`}></i>
                        <span>{this.props.dataItem.menu}</span>
                    </a>
                </li>        
        )
    }
}

export default Navitem;