function SeuNome(nome) { //setNome vindo do App.js sendo passado para esse componente
    console.log(nome)
    return (
        <div>
            <p>Digite o seu nome: </p>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => nome.nome(e.target.value)}/> {/*Aqui chamamos o setNome que foi passado para o parâmetro dessa função*/}
            Seu Nome: {nome.pegarNome}{/*<- Aqui estamos passando o getter(primeiro parametro) do useState. */}
        </div>
    )
}
export default SeuNome