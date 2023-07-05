import starImg from '../../assets/Star.png'


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) badgeText = "SOLD OUT"
    else if (props.location === "Online") badgeText = "ONLINE"
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../../assets/${props.coverImg}`} alt="katie" className='card--image'/>
            <span className='card--rating'>
                <img src={starImg} alt="" className='card--star'/>
                    {props.stats.rating}
                <small className='card--place'>
                    ({props.stats.reviewCount}) • {props.location}
                </small>
                </span>
            <p className='card--content'>{props.title}</p>
            <h3 className='card--price'>From ${props.price} / <span className='card--qty'> person</span></h3>
        </div>
    )
}