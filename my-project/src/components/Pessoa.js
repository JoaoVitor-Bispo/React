function Pessoa({foto, nome, idade, profissao}) {
    return (
        <div>
            {/* <img src={props.foto}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p> */}
            <img src={foto}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa