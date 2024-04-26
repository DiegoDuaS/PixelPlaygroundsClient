import './login.css'

function LoginBox(){

    return(
        <>
        <form className='box'>
            <h1 className='logintitle'> Login </h1>
            <input class="login" type="text" placeholder="Usuario" value="" fdprocessedid="nxawq"></input>
            <input class="login" type="password" placeholder="Contraseña" value="" fdprocessedid="1tezah"></input>
            <button class="loginbutton">Ingresar</button>
        </form>
        </>
    )
}

export default LoginBox