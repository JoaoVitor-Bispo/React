import {useState} from 'react'

function Condicional() {
    function enviarEmail() {
        console.log(email)
    }

    function limparEmail() {
        setEmail('')
    }

    const [email, setEmail] = useState()
    return (
        <div>
            <div>
                <label htmlFor="email"></label>
                <input id="email" type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
                <button onClick={enviarEmail}>Enviar</button>
            {email &&(
                <>
                    <p>O email do usuário é: {email}</p>
                    <button onClick={limparEmail}>Limpar Email</button>
                </>
            )}
        </div>
    )
}
export default Condicional