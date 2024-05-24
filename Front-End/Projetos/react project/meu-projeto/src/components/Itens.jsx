import PropTypes from 'prop-types'
function Itens({marca, ano_lancamento}){
    return(
        <>
        <p>{marca} - {ano_lancamento}</p>
        </>

    )
}
Itens.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number
}

Itens.defaultProps={
    marca:'Faltou a marca',
    ano_lancamento:0
}
export default Itens