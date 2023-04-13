import {useState} from 'react'
function Form() {
    function cadastro(e) {
        e.preventDefault()
        console.log(`Usuário ${name} cadastrado com a senha: ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastro}>
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input id="name" type="text" placeholder="Digite seu nome" onChange={(evt) => setName(evt.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Senha: </label>
                    <input id="password" type='password' placeholder="Digite sua senha" onChange={(evt) => setPassword(evt.target.value)}/>
                </div>
                <input type="submit" placeholder="Cadastrar"/>
            </form>
        </>
    )
}
export default Form