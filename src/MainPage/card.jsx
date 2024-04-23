import './card.css'

function Card({ nombre, fecha, info, imagen}) {
    return (
        <li>
            <img src={imagen} alt="Game Image" className='big' />
            <div className="titulo">{nombre}</div>
            <div className="precio">{fecha}</div>
            <p> {info} </p>
        </li>
    );
}

export default Card 