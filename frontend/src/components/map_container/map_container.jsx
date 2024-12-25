import './map_container.css'
import CombatOrder from './combat_order/combat_order';


function MapContainer () {
    return(
        <div className='map_container'>
            <div className='map_container-col-1'></div>
            <CombatOrder/>
        </div>
    )
}

export default MapContainer;