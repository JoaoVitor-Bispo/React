import Item from "./Item"
function List() {
    return (
        <>
            <h1>My List</h1>
            <Item marca="Porsche" lançamento={2004}/>
            <Item marca="Lamborghini" lançamento={2016}/>
            <Item/>
        </>
    )
}
export default List