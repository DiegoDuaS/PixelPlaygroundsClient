import './deletepost.css'
import AdminCard from '../../Components/admincards'
import Popup from '../../Components/popup'
import useApi from "../../Hooks/useApi"
import { Blocks } from 'react-loader-spinner'
import { useState } from 'react'


function DeletePost(){

    const { data, errorMessage, isLoading } = useApi('http://127.0.0.1:3002/posts', 'GET');
    const[postName, setpostName] = useState("")
    const[idpost, setidpost] = useState(null)
    const[isOpen, setisOpen] = useState(false)

    const handleAdminCardClick = (id, name) => {
        setidpost(id)
        setisOpen(true)
        setpostName(name)
    };

    const closePopup = () => {
        setisOpen(false)
    }

    const handleDelete = () => {
        setisOpen(false)
    }

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
            <ul className='postsbox'>
                {data.map((post, index) => (
                    <AdminCard
                        key={post.post_id}
                        id={post.post_id}
                        nombre={post.name}
                        fecha={(post.release_date).substring(0, 10)}
                        info={post.description}
                        onClick={() => handleAdminCardClick(post.post_id, post.name)}
                    />
                ))}
            </ul>
            <Popup isOpen={isOpen} postName={postName} closePopup={closePopup} handleDelete={handleDelete}>
            </Popup>
        </>
    );
}


export default DeletePost