import './card.css'

function Card({ nombre, fecha, info, imagen}) {
    return (
        <li>
            <img src={imagen} alt="Game Image" className='big' />
            <h2 className="game">{nombre}</h2>
            <h5 className="date">{fecha}</h5>
            <p className="info"> {info} </p>
        </li>
    );
}

export default Card 