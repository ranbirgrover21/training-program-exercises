import './SideBar.css'
import pokeball from '../assets/pokeball.png'
import pikachu from '../assets/pikachu.png'
import item from '../assets/potion.png'
import moves from '../assets/tm.png'
import map from '../assets/map.png'

// For extension task, you need to add a prop to SideBar so that you can process the
// icon clicks. In this case, the prop i added is onIconClick
function SideBar({ onIconClick }) {
    return (
        <>
            <div className='all'>
                <img src={pokeball} className="logo"/>
                <div className="grayline"/>
                <div className="paddingbox1"/>
                <img src={pikachu} className="iconbox" onClick={() => onIconClick('https://pokeapi.co/api/v2/pokemon?limit=100')}/>
                <div className="paddingbox1"/>
                <img src={map} className="iconbox" onClick={() => onIconClick('https://pokeapi.co/api/v2/location?limit=100')}/>
                <div className="paddingbox1"/>
                <img src={item} className="iconbox" onClick={() => onIconClick('https://pokeapi.co/api/v2/item?limit=100')}/>
                <div className="paddingbox1"/>
                <img src={moves} className="iconbox" onClick={() => onIconClick('https://pokeapi.co/api/v2/move?limit=100')}/>
            </div>
        </>
    )
}

export default SideBar