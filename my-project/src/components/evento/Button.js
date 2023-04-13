function Button(props) {
    return (
        <div>
            <p>Evento por props</p>
            <button onClick={props.evento}>{props.text}</button>
        </div>
    )
}
export default Button