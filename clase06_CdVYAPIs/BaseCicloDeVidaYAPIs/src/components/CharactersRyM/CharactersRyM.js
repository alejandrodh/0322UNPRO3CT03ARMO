import React, {Component} from "react";
import Card from "../Card/Card";

class CharactersRyM extends Component{
    constructor(props){
        super(props);
        this.state={
            characters: [],
            nextPage:'' 
        }
    }

    //Pedir datos a la API y guardarlos en el estado
    componentDidMount(){
        let url ='https://rickandmortyapi.com/api/character';
        fetch(url)
            .then(response => response.json())
            .then( data => this.setState(
                { 
                    characters:data.results,
                    nextPage:data.info.next,
                }
            ))
            .catch( error => console.log(error))
    }

    cargarMas(){
        let url = this.state.nextPage;
        fetch(url)
            .then(response => response.json())
            .then( data => this.setState(
                { 
                    characters:this.state.characters.concat(data.results),
                    nextPage:data.info.next,
                }
            ))
            .catch( error => console.log(error))
    }

    borrarTarjeta(id){
        //Filtrar una y dejar las demás tarjetas
        let personajesFiltrados = this.state.characters.filter( oneCharacter => oneCharacter.id !== id )

        //Cambiar el estado
        this.setState({
            characters: personajesFiltrados
        })
    }
    

    // Renderizar condicional "cargando..." o las tarjetas.
    // Las tarjeatas se van a renderizar usando .map            
    render(){
        // console.log(this.state.characters);
        return(
            <section>
                <button type="button" onClick={ ()=>this.cargarMas()}>Cargar más</button>
                { 
                    this.state.characters.length === 0 ?
                    <p>Cargando...</p> :
                    this.state.characters.map( (oneCharacter, idx) => <Card key={oneCharacter.name + idx} characterInfo={oneCharacter} borrar={(pepe)=>this.borrarTarjeta(pepe)}/>)
                }
            </section>
        )
    }

}

export default CharactersRyM
