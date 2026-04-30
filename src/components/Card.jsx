{/* aggiungo lóggetto props direttamente con il destructuring 
    e assegno valore per creare destructuring */}

function Card({ 
    title = "My Language",
    content = "A wonderful description of language's peculiarities and fun facts"
}) { 
    {/**variabile per gestire cambiamento del colore della variabile */}
    let btnColor = 'btn-primary';

    {/** funzione clickHandler */}

    function clickHandler(event){
        console.log("click!");      
    }

    return <>
        <div className="card">
                <div className="card-body">
                    <a href="#" onClick={clickHandler} className={`btn ${btnColor}`}>{title}</a>
                    <p className="card-text py-1">{content}</p>
                </div>
        </div>
    </>

}
export default Card