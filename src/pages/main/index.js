import React, { Component } from "react";
import api from "../../services/api"
import './style.css';

export default class Main extends Component {

    //state

    state = {
        pets: []
    };

    //call api
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/pets');

       this.setState({pets: response.data})
        console.log(response.data);
    };


    render() {
        const { pets } = this.state;
    return (

        <div className="pet-list">
            {pets.map(pet => (

           <article key={pet._id}>

            <h2><strong>{pet.animal}</strong></h2>
            <p>{pet.raca}</p>
            <p>{pet.cor}</p>
            <p>{pet.status}</p>
            

            <a href="">Acessar</a>
            </article> 
 
           
           
           ))}

        </div>




    )
    }
}