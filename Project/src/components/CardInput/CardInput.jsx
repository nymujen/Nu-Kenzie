import './styles.css'

export function CardInput({ desc, type, val, id, values, setValues }){
    function removeValue(){
        const uid = id
        const findElement = values.findIndex(element => element.id === uid)  
        values.splice(findElement, 1)
        setValues([...values])
    }
    
    return (
        <>
            {
                type === "entrada" ?  (
                    <li className="card__values--entry">
                        <div className="desc-type">
                            <p>{desc}</p>
                            <span>{type}</span>
                        </div>
                        <div className="val-delete">
                            <span>R$ {val}</span>
                            <img src="/assets/trash.svg" alt="" onClick={removeValue} />
                        </div>
                    </li>
                ) : (
                    <li className="card__values--desp">
                        <div className="desc-type">
                            <p>{desc}</p>
                            <span>{type}</span>
                        </div>
                        <div className="val-delete">
                            <span>R$ {val}</span>
                            <img src="/assets/trash.svg" alt="" onClick={removeValue} />
                        </div>
                    </li>
                )
            }
        </>
        
    )
}