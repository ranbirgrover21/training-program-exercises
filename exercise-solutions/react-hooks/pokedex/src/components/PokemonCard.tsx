import './PokemonCard.css'
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
    // If you find this, i was going to make the card display other information
    // However that requires useEffect again and it crashed my browser
    return (
        <Link className="card" to={`pokemon/${pokemon.name}`}>
            <div>{pokemon.name}</div>
        </Link>
    )
}  

export default PokemonCard