{/** IMPORTANTEEEEEEE - Importo la libreria useState
    Altrimenti x-factor per me finisce qui */}
import { useState } from "react";



{/* aggiungo lóggetto props direttamente con il destructuring 
    e assegno valore per creare destructuring */}

function Card({
    title = "My Language",
    content = "A wonderful description of language's peculiarities and fun facts"
}) {

    {/**mia variabile di stato */ }

    const [isOpen, setIsOpen] = useState(false); { {/** setto il toggle chiuso */ } }

      {/**variabile per gestire cambiamento del colore della variabile */ }
    const btnColor = isOpen? 'btn-warning' : 'btn-primary';

    {/**variabile per gestire popolamento del contenuto del p */ }
    const pContent = isOpen? content : null;

    {/** funzione clickHandler */ }
    const clickHandler = (event) => {
        setIsOpen(!isOpen); // setto valore diverso da open, essendo booleano e'perpetuo lo switch
                            // lei deve fare solo da interruttore
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