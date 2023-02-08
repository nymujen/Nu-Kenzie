import './styles.css'
import { useState } from "react"
import { v4 as uuid } from 'uuid'

export function Form({ setValues }){
    const [ description , setDescription ] = useState("")
    const [ value , setValue ] = useState(0)
    const [ type , setType ] = useState("")
    

    function handleForm(event){
        event.preventDefault()
        const id = uuid()
        
        setValues((oldValues) => [...oldValues, {  id, description, value, type }])
    }

    return (
        <form onSubmit={handleForm} className="form__container">
            <label htmlFor="description">Descrição</label>
            <input 
                type="text" 
                id="description" 
                onChange={(event) => setDescription(event.target.value)} 
            />
            <span>Ex: Compra de roupas</span>
            <div className="value__type">
                <div className="value">
                    <label htmlFor="value">Valor</label>
                    <input 
                        type="text" 
                        id="value"
                        onChange={(event) => setValue(event.target.value)}
                    />  
                </div>
                <div className="type">
                    <label htmlFor="value-type">Tipo de valor</label>
                    <select id="value-type" value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="">Tipo de valor</option>
                        <option value="entrada">Entrada</option>
                        <option value="despesa">Despesa</option>
                    </select>
                </div>              
            </div>
            <button type="submit" >Inserir valor</button>
        </form>
    )
}