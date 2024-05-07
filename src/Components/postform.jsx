import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import './postform.css'

function PostForm ({ id, chosename, chosedate, chosedescription, choseimage, tipo }) {
  const [name, setName] = useState('');
  const [releasedate, setReleasedate] = useState('');
  const [descrpition, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [edited, setEdited] = useState('')
  const [posted, setPosted] = useState('')
  const [errorData, setErrorData] = useState('');

  useEffect(() => {
    if (chosename !== '') {
      setName(chosename);
    }

    if (chosedate !== '') {
      setReleasedate(chosedate);
    }

    if (chosedescription !== '') {
      setDescription(chosedescription);
    }

    if (choseimage !== '') {
      setImage(choseimage);
    }
  }, [chosename, chosedate, chosedescription, choseimage]);

  const handleEditSubmit = async (id) => {
    try {
      const response = await fetch('https://api.tiburoncin.lat/23075/updatepost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          id_post: id,
          name,
          release_date: releasedate,
          description: descrpition,
          image
        })
      })

      if (response.ok) {
        setEdited('Post editado correctamente')
        setTimeout(() => {
          setEdited('')
        }, 3000)
      } else {
        setErrorData('Error al editar el post')
        setTimeout(() => {
          setErrorData('')
        }, 5000)
      }
    } catch (error) {
      setErrorData('Error al enviar solicitud')
      console.error('Error al enviar solicitud', error);
      setTimeout(() => {
        setErrorData('')
      }, 5000)
    }
  };

  const handlePostSubmit = async () => {
    const requestBody = {
      name,
      release_date: releasedate,
      description: descrpition,
      image
    };

    try {
      const response = await fetch('https://api.tiburoncin.lat/23075/createpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      if (response.ok) {
        setPosted('Post Subido Correctamente')
        setName('')
        setReleasedate('')
        setDescription('')
        setImage('')
        setTimeout(() => {
          setPosted('')
        }, 3000)
      } else {
        setErrorData('Error en alguno de los campos')
        setTimeout(() => {
          setErrorData('')
        }, 5000)
      }
    } catch (error) {
      setErrorData('Error al enviar solicitud')
      console.error('Error al enviar solicitud', error);
      setTimeout(() => {
        setErrorData('')
      }, 5000)
    }
  };

  return (
        <>
            <form className='boxnewpost'>
                {
                    posted !== ''
                      ? (
                        <div className='success' onClick={() => setPosted('')}>
                            Post Publicado Correctamente
                        </div>
                        )
                      : null
                }
                {
                    edited !== ''
                      ? (
                        <div className='success' onClick={() => setEdited('')}>
                            Post Editado Correctamente
                        </div>
                        )
                      : null
                }
                {
                    errorData !== ''
                      ? (
                        <div className='error-message' onClick={() => setErrorData('')}>
                            {errorData}
                        </div>
                        )
                      : null
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
                {tipo === 'EDIT'
                  ? (
                    <button type="button" className="post" onClick={() => handleEditSubmit(id)}>Editar Post</button>
                    )
                  : (
                    <button type="button" className="post" onClick={() => handlePostSubmit()}>Agregar Post</button>
                    )}
            </form>
        </>
  )
}

PostForm.propTypes = {
  id: PropTypes.number,
  chosename: PropTypes.string,
  chosedate: PropTypes.string,
  chosedescription: PropTypes.string,
  choseimage: PropTypes.string,
  tipo: PropTypes.string.isRequired
}

export default PostForm
