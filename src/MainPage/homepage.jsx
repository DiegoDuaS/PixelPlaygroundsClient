import HeaderMain from "./header"
import './mainsection.css'
import Card from "./card"
import useApi from "../Hooks/useApi"



function HomePage() {
    const { data, errorMessage, isLoading } = useApi('http://127.0.0.1:3002/posts', 'GET');

    if (isLoading) {
        return (
            <>
                <HeaderMain />
                <p>Cargando...</p>
            </>
        );
    }

    if (errorMessage) {
        return (
            <>
                <HeaderMain />
                <p>Error: {errorMessage}</p>
            </>
        );
    }

    if (!data || data.length === 0) {
        return (
            <>
                <HeaderMain />
                <h4>No hay posts</h4>
            </>
        );
    }

    return (
        <>
            <HeaderMain />
            <ul className='box'>
                {data.map((post, index) => (
                    <Card
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