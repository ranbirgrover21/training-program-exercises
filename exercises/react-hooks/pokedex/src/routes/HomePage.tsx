import { useEffect, useState } from 'react'
import Sidebar from '../components/SideBar'
import PokemonList from '../components/PokemonList'
import glass from '../assets/magnifyingglass.png'
import './HomePage.css'

// Type for Task 1
// You don't need it, its just if you want typescript to stop screaming at you
interface pokemonData {
    name: string;
    url: string;
}

function HomePage() {
    // Task 1: Please write the useEffect hook to generate the list of pokemon
    // Please store the list of pokemon inside pokemonData
    // HINT: the url is 'https://pokeapi.co/api/v2/pokemon?limit=100'
    // Note that this is a pagination

    // Delete this for task 1
    const temporaryVariable:  pokemonData[] = []
    
    // Task 2: Add functionality to the search bar so that it is able
    // filter the display of pokemonData

    // Go to InfoPage.tsx for task 3 and 4

    // Extension Task: Add functionality to the sidebar buttons so that the list displayed on the homepage
    // changes depending on the category of the button pressed. The following catergories are:
    // - pokemons
    // - locations
    // - items
    // - machines

    return (
        <div className="flex"> 
            <Sidebar/>
            <div className="main-content">
                <div className="main-title">Devsoc Pokedex</div>
                <div className="searchcontainer">
                    <img src={glass} className="magnifying"/>
                    <input className="searchbar"
                        type="text"
                        placeholder="Search for a pokemon"
                    />
                </div>
                <PokemonList pokemonData={temporaryVariable}/>
            </div>
        </div>
    )
}

export default HomePage