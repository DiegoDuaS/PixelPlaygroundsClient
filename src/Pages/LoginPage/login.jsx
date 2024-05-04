import useApi from '../../Hooks/useApi';
import useToken from '../../Hooks/useToken';
import { useState } from 'react';
import useNavigate from '../../Hooks/useNavigation';
import md5 from "md5";
import './login.css'

function LoginBox(){

    const { navigate } = useNavigate();
    const { setToken } = useToken(); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorData, setErrorData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://127.0.0.1:3002/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                user: username,
                password: md5(password),
                }),
            })

            if (response.ok) {
                const responseData = await response.json();
                setToken(responseData.access_token);
                navigate('/admin');
            } 
            else {
                const errorData = await response.json();
                setErrorData('Usuario o contraseña incorrecta')
                console.error('Error al iniciar sesión', errorData);
            }
        } catch (error) {
            setErrorData('Error al enviar solicitud de inicio de sesión')
            console.error('Error al enviar solicitud de inicio de sesión:', error);
        }
    };
   
    return (
        <>
            <form className='box' onSubmit={handleSubmit}>
                <h1 className='logintitle'> Login </h1>
                {
                    errorData !== '' ? (
                        <div className='error-message' onClick={() => setErrorData('')}>
                            {errorData}
                        </div>
                    ) : null
                }
                <input 
                    className="login" 
                    type="text" 
                    placeholder="Usuario" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    className="login" 
                    type="password" 
                    placeholder="Contraseña" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" className="loginbutton">Ingresar</button>
            </form>
        </>
    );
}

export default LoginBox;