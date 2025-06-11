export function Eventhandling(){
    function handleSiginClick(e){
        e.stopPropagation()
        alert("Sigin Button Click")
    }
    function handleHeaderClick(){
        alert("Header Tab Click");
    }
    return (
        <>
        <header onClick={handleHeaderClick}>
            <div>
                <h2>NavBar</h2>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div>
                <button onClick={handleSiginClick} className="btn btn-primary px-4">Sigin</button>
            </div>
        </header>
        </>
    )
}