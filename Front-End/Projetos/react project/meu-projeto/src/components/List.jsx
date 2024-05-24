import Itens from "./Itens"
function List(){
    return(
        <>
        <h1>
            Minha lista
        </h1>
        <ul>
          <Itens marca="Ferrari"/>
          <Itens marca="Mercedz"/>

        </ul>
        </>
)
}
export default List