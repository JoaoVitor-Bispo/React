import List from "./List";
import PropTypes from 'prop-types'
function Item({marca, lançamento}) {
    return (
        <>
            <li>{marca} - {lançamento}</li>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lançamento: PropTypes.number.isRequired
}
Item.defaultProps = {
    marca: 'Sem marca',
    lançamento: 0
}
export default Item