{/** IMPORTANTEEEEEEE - Importo la libreria useState
    Altrimenti x-factor per me finisce qui */}
import { useState } from "react";



{/* aggiungo lóggetto props direttamente con il destructuring 
    e assegno valore per creare destructuring */}

function Card({
    title = "My Language",
    content = "A wonderful description of language's peculiarities and fun facts"
}) {
    {/**variabile per gestire cambiamento del colore della variabile */ }
    let btnColor = '';

    {/**variabile per gestire popolamento del contenuto del p */ }
    let pContent = ''

    {/**mia variabile di stato */ }

    const [isOpen, setIsOpen] = useState(false); { {/** setto il toggle chiuso */ } }

    if (isOpen) {
        btnColor = 'btn-warning';
    } else {
        btnColor = 'btn-primary';
    }

    if (isOpen) {
        pContent = content;
    } else {
        pContent = null;
    }

    {/** funzione clickHandler */ }
    const clickHandler = (event) => {
        console.log('click!');
        setIsOpen(!isOpen);
        
    }

    return <>
        <div className="card">
            <div className="card-body">
                <a href="#" onClick={clickHandler} className={`btn ${btnColor}`}>{title}</a>
                <p className="card-text py-1">{pContent}</p>
            </div>
        </div>
    </>

}
export default Card