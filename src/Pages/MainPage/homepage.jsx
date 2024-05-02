import HeaderMain from "./header"
import './mainsection.css'
import Card from "./card"
import useApi from "../../Hooks/useApi"
import { Blocks } from 'react-loader-spinner'



function HomePage() {
    const { data, errorMessage, isLoading } = useApi('http://127.0.0.1:3002/posts', 'GET');

    if (isLoading) {
        return (
            <>
                <HeaderMain />
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
                <HeaderMain />
                <p className="loading">{errorMessage} : (</p>
            </>
        );
    }

    if (!data || data.length === 0) {
        return (
            <>
                <HeaderMain />
                <h4 className="loading" >No hay posts</h4>
            </>
        );
    }

    return (
        <>
            <HeaderMain />
            <ul className='box'>
                {data.map((post, index) => (
                    <Card
                        key={post.post_id}
                        nombre={post.name}
                        fecha={(post.release_date).substring(0, 10)}
                        info={post.description}
                        imagen={post.image}
                    />
                ))}
            </ul>
        </>
    );
}

export default HomePage