import Itens from "./Itens"
function List(){
    return(
        <>
        <h1>
            Minha lista
        </h1>
        <ul>
          <Itens marca="Ferrari" ano_lancamento={1985}/>
          <Itens marca="Mercedz" ano_lancamento={1934}/>
          <Itens ano_lancamento={1999}/>
          <Itens marca="Fiat" />

        </ul>
        </>
)
}
export default List