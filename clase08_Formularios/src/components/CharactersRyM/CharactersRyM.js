import React, {Component} from "react";
import Card from "../Card/Card";
import FilterField from "../FilterField/FilterField";
import './styles.css';

class CharactersRyM extends Component{
    constructor(props){
        super(props);
        this.state={
            characters: [],
            charactersBkp:[],
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
                    charactersBkp: data.results,
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
                    charactersBkp: this.state.charactersBkp.concat(data.results),
                    nextPage:data.info.next,
                }
            ), console.log(this.state.characters.length))
            .catch( error => console.log(error))
            
    }

    borrarTarjeta(id){
        //Filtrar una y dejar las demás tarjetas
        let personajesFiltrados = this.state.characters.filter( oneCharacter => oneCharacter.id !== id )

        //Cambiar el estado
        this.setState({
            characters: personajesFiltrados
        })
        console.log(this.state.characters.length);
    }

    filtrarPersonajes(textoAFiltrar){
        //Comparar el texto recibido con el nombre del personaje. Si el texto esta dentro del nombre me quedo con el personaje.
        let personajesFiltrados = this.state.charactersBkp.filter( oneCharacter => oneCharacter.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))

        this.setState({
            characters: personajesFiltrados,
        })
    }

    reset(){
        this.setState({
            characters: this.state.charactersBkp
        })
        console.log('resetenado');
        console.log(this.state.charactersBkp.length);
    }
    

    // Renderizar condicional "cargando..." o las tarjetas.
    // Las tarjeatas se van a renderizar usando .map            
    render(){
        // console.log(this.state.characters);
        return(
            <React.Fragment>   
                <FilterField filtrarPersonajes={(textoABuscar)=>this.filtrarPersonajes(textoABuscar)} />
                <button type="button" onClick={ ()=>this.cargarMas()}>Cargar más</button>
                <button type="button" onClick={()=>this.reset()}> Resetar borrados</button>
                <section className="card-wrapper">    
                    { 
                        this.state.characters.length === 0 ?
                        <p>Cargando...</p> :
                        this.state.characters.map( (oneCharacter, idx) => <Card key={oneCharacter.name + idx} characterInfo={oneCharacter} borrar={(pepe)=>this.borrarTarjeta(pepe)}/>)
                    }
                </section>
            </React.Fragment>
        )
    }

}

export default CharactersRyM
