import Button from './evento/Button'
function Evento(props) {
    function myEvent() {
        console.log(`O evento ${props.numero} foi disparado com sucesso!`)
    }
    function event() {
        console.log('A props recebeu o evento com sucesso.')
    }
    return (
        <div>
            <p>Clique para disparar um evento.</p>
            <button onClick={myEvent}>Disparar!</button>
            <Button evento={event} text="Meu evento"/>
        </div>
    )
}
export default Evento;