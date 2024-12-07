import { useState } from 'react'

import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    

    const onSubmit = (evento) => {
        evento.preventDefault()
        console.log('Form enviado =>', nome, cargo, imagem, time )
        props.aoCadastrar({nome, cargo, imagem, time})
      
    }
    return (
        <section className='formulario' onSubmit={onSubmit}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem}  aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>Criar Card</Botao>

            </form>
        </section>
    )
}

export default Formulario