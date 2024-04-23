import HeaderMain from "./header"
import './mainsection.css'
import Card from "./card"



function HomePage(){
    return(
        <>
            <HeaderMain> </HeaderMain>
            <ul className='box'>
                <Card nombre = 'Super Mario Galaxy' fecha = '1 Octubre 2008' info = 'Informacion del Juego' imagen = "https://static.tvtropes.org/pmwiki/pub/images/super_mario_galaxy.png"> </Card>
                <Card nombre = 'Stardew Valley' fecha = '1 Octubre 2008' info = 'Informacion del Juego' imagen = "https://cdn2.steamgriddb.com/grid/36fa6985a5245cc27538a9b6232f1269.png"> </Card>
                <Card nombre = 'Overwatch' fecha = '1 Octubre 2008' info = 'Informacion del Juego' imagen = "https://images.igdb.com/igdb/image/upload/t_1080p/co1rcb.jpg"> </Card>
                <Card nombre = 'Super Mario Galaxy' fecha = '1 Octubre 2008' info = 'Informacion del Juego' imagen = "https://static.tvtropes.org/pmwiki/pub/images/super_mario_galaxy.png"> </Card>
                <Card nombre = 'Super Mario Galaxy' fecha = '1 Octubre 2008' info = 'Informacion del Juego' imagen = "https://static.tvtropes.org/pmwiki/pub/images/super_mario_galaxy.png"> </Card>
            </ul>
        </>
    )
}

export default HomePage