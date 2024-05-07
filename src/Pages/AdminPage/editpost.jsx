import React, { useState } from 'react'
import './deletepost.css'
import AdminCard from '../../Components/admincards'
import useApi from '../../Hooks/useApi'
import { Blocks } from 'react-loader-spinner'

import PostForm from '../../Components/postform'
import './editpost.css'

function EditPost () {
  const { data, errorMessage, isLoading } = useApi('https://api.tiburoncin.lat/23075/posts', 'GET');
  const [idpost, setidpost] = useState(null)
  const [name, setName] = useState('');
  const [releasedate, setReleasedate] = useState('');
  const [descrpition, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [errorData, setErrorData] = useState('');
  const [isLoadingGetPost, setisLoadingGetPost] = useState(null);

  const handleAdminCardClick = async (id) => {
    setisLoadingGetPost(true)

    try {
      const response = await fetch('https://api.tiburoncin.lat/23075/getpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id_post: id
        })
      })

      if (response.ok) {
        const responseData = await response.json()
        setName(responseData[0].name)
        setReleasedate((responseData[0].release_date).substring(0, 10))
        setDescription(responseData[0].description)
        setImage(responseData[0].image)
      } else {
        const errorData = await response.json();
        setErrorData('Error al buscar el post')
        console.error('Error al iniciar sesión', errorData);
      }
    } catch (error) {
      setErrorData('Error al enviar solicitud')
      console.error('Error al enviar solicitud', error);
    } finally {
      setisLoadingGetPost(false);
    }

    setidpost(id)
  };

  if (isLoading) {
    return (
            <>
                <p className="loading">Cargando...</p>
                <Blocks
                     height="80"
                     width="80"
                     color="#ffffff"
                     ariaLabel="blocks-loading"
                     wrapperStyle={{}}
                     wrapperClass="blocks-wrapper"
                     visible={true}
                />
            </>
    );
  }

  if (errorMessage) {
    return (
            <>
                <p className="loading">{errorMessage} : (</p>
            </>
    );
  }

  if (!data || data.length === 0) {
    return (
            <>
                <h4 className="loading" >No hay posts</h4>
            </>
    );
  }

  return (
        <>
            <div className='edit-posts-container'>
            {idpost !== null && !isLoadingGetPost
              ? (
                    <PostForm id={idpost} chosename={name} chosedate={releasedate} chosedescription={descrpition} choseimage={image} tipo={'EDIT'} />
                )
              : (
                    <div className='boxnopost'>
  {isLoadingGetPost
    ? (
    <p className='noposttext'>Cargando...</p>
      )
    : (
    <>
      <p className='noposttext'>Elige un post para editar</p>
      {errorData && <p className='noposttext'>Error: {errorData}</p>}
    </>
      )}
</div>
                )}
                <ul className='postsbox'>
                    {data.map((post, index) => (
                        <AdminCard
                            key={post.post_id}
                            id={post.post_id}
                            nombre={post.name}
                            fecha={(post.release_date).substring(0, 10)}
                            info={post.description}
                            onClick={() => handleAdminCardClick(post.post_id)}
                        />
                    ))}
                </ul>

            </div>
        </>
  );
}

export default EditPost
