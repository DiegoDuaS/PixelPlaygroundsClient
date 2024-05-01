import './card.css'

function Card({ nombre, fecha, info, imagen}) {

    const buffer = imagen
    console.log(buffer)
    const base64 = buffer.toString('base64')
    console.log(base64)

    return (
        <li>
            <img src={`data:image/png;base64,${imagen}`} alt="Game Image" className='big' />
            <h2 className="game">{nombre}</h2>
            <h5 className="date">{fecha}</h5>
            <p className="info"> {info} </p>
        </li>
    );
}

export default Card 