import { useState } from "react"
function Forms(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }
    const[name, setName]=useState()
    const[password, setpassword]=useState()
    return(
<>
<h1>Meu cadastro</h1>


<form onSubmit={cadastrarUsuario}>
    <div>
        <label htmlFor="name">Nome:</label>
        <input
         type="text"
         id="name" 
         name="name" 
         placeholder="Digite seu nome"
         onChange={(e)  => setName(e.target.value)}/>
    </div>
    <div>
    <label htmlFor="password">Senha:</label>
        <input
         type="password"
         id="password" 
         name="password" 
         placeholder="Digite a sua senha"
         onChange={(e)  => setpassword(e.target.value)}/>

    </div>
</form>
</>

    )
}
export default Forms