import {useState} from "react"
function Condicional (){
        const [Email, setEmail] = useState()
        const [UserEmail, setUserEmail]=useState()
    
    
        function enviarEmail(e){
        e.preventDefault()
        setUserEmail(Email)
    }
    function limparEmail(){
       setUserEmail('')
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input
                type="email"
                placeholder="Digite seu e-mail...."
                onChange={(e) => setEmail(e.target.value)}/>
                <button
                type="submit"
                onClick={enviarEmail}>
                Enviar e-mail
                </button>
                {UserEmail &&(
                    <div>
                        <p>O e-mail do usuário é: {UserEmail}</p>
                    <button
                    onClick={limparEmail}>
                    Limpar e-mail
                    </button>
                    </div>
                    
                )}

            </form>
        </div>

    )
}
export default Condicional