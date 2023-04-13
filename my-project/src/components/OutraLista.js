function OutraLista(props) {
    return (
        <>
            {
                props.itens.length > 0 ? (
                    props.itens.map((element, index) => ( 
                        <p key={index}>{element}</p>
                    ))
                ) : (
                    <p>Sem itens na lista</p>
                )
            }
        </>
    )
}
export default OutraLista