import { useState } from 'react'
import './newpost.css'

function NewPost(){

    const [name, setName] = useState("");
    const [releasedate, setReleasedate] = useState("");
    const [descrpition, setDescription] = useState("");
    const [image, setImage] = useState("");


    return(
        <>
            <form className='boxnewpost'>
                <input 
                    className="post" 
                    type="text" 
                    placeholder="Nombre del Juego" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    className="post" 
                    type="text" 
                    placeholder="Fecha de Lanzamiento" 
                    name="relasedate" 
                    value={releasedate} 
                    onChange={(e) => setReleasedate(e.target.value)} 
                />
                <input 
                    className="post" 
                    type="text" 
                    placeholder="Descripcion" 
                    name="description" 
                    value={descrpition} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    className="post" 
                    type="text" 
                    placeholder="Imagen (Base64)" 
                    name="image" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)} 
                />
                <button type="submit" className="post">Agregar Post</button>
            </form>
        </>
    )

}

export default NewPost