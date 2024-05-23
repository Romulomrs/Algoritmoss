function SayMyName(nome,idade,profissão,foto){
    return(
        <div>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão {profissão}</p>
            <img src={foto} alt={nome}/>
        </div>

    )
}
export default SayMyName