import './styles.css'

export function TotalMoney({ values }){
    const initValue = 0

    const spendValues = values.filter(element => element.type === "despesa")
    const spendFilter = spendValues.map(element => {return parseInt(element.value)})
    const sumSpend =  spendFilter.reduce((accumulator, currentValue) => accumulator + currentValue, initValue)

    const entryValues = values.filter(element => element.type === "entrada")
    const entryFilter = entryValues.map(element => {return parseInt(element.value)})
    const sumEntry =  entryFilter.reduce((accumulator, currentValue) => accumulator + currentValue, initValue)

    const totValue = sumEntry - sumSpend

    return (
        <div>
            {
               totValue === 0 ? (
                   <>   
                        <div className="tot-value">
                            <span>Valor total: </span>
                            <span className="number">R$ 0</span>
                        </div>                 
                        <span className="small-totval">O valor se refere ao saldo</span>
                   </>                   
               ) : (
                   <>
                        <div className="tot-value">
                            <span>Valor total:</span>
                            <span className="number">R$ {totValue}</span>
                        </div>                 
                        <span className="small-totval">O valor se refere ao saldo</span>
                   </>
               )
            }
        </div>
        
    )
}