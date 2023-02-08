import './styles.css'
import { Form } from "../Form/Form";
import { CardInput } from "../CardInput/CardInput";
import { TotalMoney } from '../TotalMoney/TotalMoney';
import { Header } from '../Header/Header';

export function Dashboard({ setPage, setValues, values }){

    return (
        <div className="dashboard__container">  
            <Header setPage={setPage} />
            <div className='dashboard__content'>
                <section className="form__container">
                    <Form setValues={setValues}/> 
                    <TotalMoney values={values}/>
                </section>
                <section className="values__container">
                    {
                        values.length === 0 ? (
                            <h2 className="no-value">Você ainda não possui nenhum lançamento</h2>
                        ) : (
                            <ul >
                                {
                                    values.map(element => (
                                        <CardInput values={values} setValues={setValues} key={element.id} id={element.id} desc={element.description} val={element.value} type={element.type} />
                                    ))
                                }
                            </ul>
                        )
                    }             
                </section>
            </div>
            
        </div>
    )
}