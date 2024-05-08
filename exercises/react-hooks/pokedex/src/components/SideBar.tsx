import './SideBar.css'
import pokeball from '../assets/pokeball.png'
import pikachu from '../assets/pikachu.png'
import map from '../assets/map.png'
import item from '../assets/potion.png'
import moves from '../assets/tm.png'

function SideBar() {
    return (
        <>
            <div className='all'>
                <img src={pokeball} className="logo"/>
                <div className="grayline"/>
                <div className="paddingbox1"/>
                <img src={pikachu} className="iconbox"/>
                <div className="paddingbox1"/>
                <img src={map} className="iconbox"/>
                <div className="paddingbox1"/>
                <img src={item} className="iconbox"/>
                <div className="paddingbox1"/>
                <img src={moves} className="iconbox"/>
            </div>
        </>
    )
}

export default SideBar