import { useEffect, useState } from 'react';
import './InfoPage.css'
import { useParams } from 'react-router-dom';
import PokemonBackground from '../components/PokemonBackground'

// These imports have been provided to you for Task 4

// For Left Container
import PokemonName from '../components/PokemonName';
import PokemonTyping from '../components/PokemonTyping';
import PokemonStats from '../components/PokemonStats';
import PokemonAbilites from '../components/PokemonAbilities';

// For Middle Container
import PokemonFrontSprite from '../components/PokemonSprite';

// For Right Container
import PokemonMoves from '../components/PokemonMoves';

function InfoPage() {
    // This has been provided to you for task 3.
    let { id } = useParams();

    // Task 3: Please write the useEffect hook to fetch the info on the pokemon
    // and store it in a useState
    // HINT: `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, setPokemon] = useState<any>(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
            })
    }, []);

    if (!pokemon) {
        return <div>loading...</div>
    }

    // Task 4: Using the components provided in the import statements, replicate the
    // website layout provided. Don't forget to include the info you fetched from
    // task 3
    // HINT: You cannot enter the information directly like you with a <div> as these 
    // components are already defined. They do however, have props defined for information
    // entry.

    return (
        <>
            <PokemonBackground/>
            <div className="layout">
                <div className="left-container">
                    <PokemonName name={pokemon.name}></PokemonName>
                    <PokemonTyping types={pokemon.types}></PokemonTyping>
                    <PokemonStats stats={pokemon.stats}></PokemonStats>
                    <PokemonAbilites abilities={pokemon.abilities}></PokemonAbilites>
                </div>
                <div className="middle-container">
                    <PokemonFrontSprite frontSprite={pokemon.sprites.front_default}/>
                </div>
                <div className="right-container">
                    <PokemonMoves moves={pokemon.moves}></PokemonMoves>
                </div>
            </div>
        </>
    )
}

export default InfoPage