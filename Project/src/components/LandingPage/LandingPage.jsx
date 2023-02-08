import './styles.css'

export function LandingPage({ setPage }){

    return (
        <div className="container__landing">
            <section className="container__description--landing">
                <h2><span>Nu</span> Kenzie</h2>
                <p>Centralize o controle das suas finanças</p>
                <span className='small'>de forma rápida e segura</span>
                <button type="button" onClick={() => setPage("Dashboard")} >Iniciar</button>
            </section>
            <img src="/assets/Illustration.svg" alt="" className='landing__img' />
        </div>     
    )
}