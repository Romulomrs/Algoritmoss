import Button from './Eventos/button'
function Evento (){
    function meuEvento(){
        console.log('Ativando primeiro evento')
    }
    function SegundoEvento(){
        console.log('Ativando segundo evento')
}
        return(
            <>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento}text= "primeiro evento"/>
            <Button event={SegundoEvento}text= "Segundo evento"/>
            </>

    )
}
export default Evento;