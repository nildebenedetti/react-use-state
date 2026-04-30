{/* aggiungo lóggetto props direttamente con il destructuring 
    e assegno valore per creare destructuring */}

function Card({ 
    title = "My Language",
    content = "A wonderful description of language's peculiarities and fun facts"
}) { 

    return <>
        <div className="card">
                <div className="card-body">
                    <a href="#" className="btn btn-primary">{title}</a>
                    <p className="card-text py-1">{content}</p>
                </div>
        </div>
    </>

}
export default Card