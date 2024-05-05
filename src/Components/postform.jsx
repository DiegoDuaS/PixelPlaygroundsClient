import { useState, useEffect } from 'react'
import './postform.css'

function PostForm({id, chosename, chosedate, chosedescription, choseimage, tipo}){

    const [name, setName] = useState("");
    const [releasedate, setReleasedate] = useState("");
    const [descrpition, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [edited, setEdited] = useState("")
    const [posted, setPosted] = useState("")
    const [errorData, setErrorData] = useState('');
    

    useEffect(() => {
        if(chosename !== ""){
            setName(chosename);
        }

        if(chosedate !== ""){
            setReleasedate(chosedate);
        }

        if(chosedescription !== ""){
            setDescription(chosedescription);
        }

        if(choseimage !== ""){
            setImage(choseimage);
        }
    }, [chosename, chosedate, chosedescription, choseimage]);

    const handleEditSubmit = async(id) => {
        
        try {
            const response = await fetch('http://127.0.0.1:3002/updatepost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                id_post: id,
                name: name, 
                release_date: releasedate, 
                description: descrpition, 
                image: image
                }),
            })

            if (response.ok) {
                setEdited("Post editado correctamente")
                console.log("Post editado correctamente")
            } 
            else {
                const errorData = await response.json();
                setErrorData('Error al editar el post')
            }
        } catch (error) {
            setErrorData('Error al enviar solicitud')
            console.error('Error al enviar solicitud', error);
        }

        setidpost(id)
    };

    const handlePostSubmit = async() => {

        const requestBody = {
            name: name,
            release_date: releasedate,
            description: descrpition,
            image: image
        };

        console.log(requestBody)
        
        try {
            const response = await fetch('http://127.0.0.1:3002/createpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })

            if (response.ok) {
                setPosted("Post Subido Correctamente")
                console.log("Post Subido Correctamente")
                setName("")
                setReleasedate("")
                setDescription("")
                setImage("")
            } 
            else {
                const errorData = await response.json();
                setErrorData('Error en alguno de los campos')
            }
        } catch (error) {
            setErrorData('Error al enviar solicitud')
            console.error('Error al enviar solicitud', error);
        }
    };


    return(
        <>
            <form className='boxnewpost'>
                {
                    posted !== '' ? (
                        <div className='success' onClick={() => setPosted('')}>
                            Post Publicado Correctamente
                        </div>
                    ) : null
                }
                {
                    edited !== '' ? (
                        <div className='success' onClick={() => setEdited('')}>
                            Post Editado Correctamente
                        </div>
                    ) : null
                }
                {
                    errorData !== '' ? (
                        <div className='error-message' onClick={() => setErrorData('')}>
                            {errorData}
                        </div>
                    ) : null
                }
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
                    placeholder="Fecha de Lanzamiento (Año - Mes - Día)" 
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
                {tipo === 'EDIT' ? (
                    <button type="button" className="post" onClick={() => handleEditSubmit(id)}>Editar Post</button>
                ) : (
                    <button type="button" className="post" onClick={() => handlePostSubmit()}>Agregar Post</button>
                )}
            </form>
        </>
    )

}

export default PostForm