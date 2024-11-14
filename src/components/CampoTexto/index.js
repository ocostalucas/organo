import "./CampoTexto.css"

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} required={props.obrigatorio} onChange={aoDigitado}  placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto