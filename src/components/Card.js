
import './card.css' ;

function CardLayout()
{const src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    return(

        <><link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            <div className="card">
                <h2 className="card-title">Seal</h2>
                <img src={src} alt="" />
                <p className="card-desc">Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
            </div> 
        </>
 
    )
}
export default CardLayout