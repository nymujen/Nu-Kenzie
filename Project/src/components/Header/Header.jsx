import './styles.css'

export function Header ({ setPage }){
    return (
        <header className="header__dashboard">
            <h2><span>Nu</span> Kenzie</h2>
            <button type="button" onClick={() => setPage("LandingPage")} >Início</button>
        </header>
    )
}