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
    // useState for task 1
    const [pokemonData, setPokemonData] = useState<pokemonData[]>([]);

    // useState for Extension task
    const[apiUrl, setApiUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=100');

    // Task 1: Please write the useEffect hook to generate the list of pokemon
    // Please store the list of pokemon inside pokemonData
    // HINT: the url is 'https://pokeapi.co/api/v2/pokemon?limit=100'
    
    useEffect(() => {
        async function fetchPokemon() {
            // let url = https://pokeapi.co/api/v2/pokemon?limit=100   this would be ur solution for Task 1
            let url = apiUrl; // Modified url code for extension task only
            let fetchedPokemon: pokemonData[] = [];  
            try {
                while (url) {
                    const response = await fetch(url);
                    const data = await response.json();
                    fetchedPokemon = fetchedPokemon.concat(data.results);
                    url = data.next; // URL for the next page
                }      
                setPokemonData(fetchedPokemon);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        }
    
        fetchPokemon();
    }, [apiUrl]); // Dependency array would be empty prior to extension task
    
    // Task 2: Add functionality to the search bar so that it is able
    // filter the display of pokemonData

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch =(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    }

    const filteredPokemon = pokemonData.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm)
    );

    // Extension Task: Add functionality to the sidebar buttons so that the list displayed on the homepage
    // changes depending on the category of the button pressed. The following catergories are:
    // - pokemons
    // - berries
    // - items
    // - machines

    const handleIconClick = (newUrl: string) => {
        setApiUrl(newUrl);
    }

    return (
        <div className="flex"> 
            <Sidebar onIconClick={handleIconClick}/>
            <div className="main-content">
                <div className="main-title">Devsoc Pokedex</div>
                <div className="searchcontainer">
                    <img src={glass} className="magnifying"/>
                    <input className="searchbar"
                        type="text"
                        placeholder="Search for a pokemon"
                        onChange={e => handleSearch(e)}
                    />
                </div>
                <PokemonList pokemonData={filteredPokemon}/>
            </div>
        </div>
    )
}

export default HomePage