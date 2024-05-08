// DO NOT MODIFY

import './PokemonList.css'
import PokemonCard from './PokemonCard'

// Each key has to be modified to be assigned an index to prevent duplicate keys
function PokemonList({ pokemonData }) {
    return (
        <div className="list">
            {pokemonData.map((pokemon, index )=> (
                <PokemonCard key={`${pokemon.name}-${index}`} pokemon={pokemon} />
            ))}
        </div>
    )
}  

export default PokemonList