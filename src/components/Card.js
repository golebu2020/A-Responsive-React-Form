export default function Card(props){

  let badgeText
  if (props.openSpots === 0){
    badgeText = 'SOLD OUT'
  }else if (props.location == 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    <div>
      <div className="main--image-container">       
        <img src= {`./images/${props.coverImg}`} alt="" />
        {badgeText && <button className="btn">{badgeText}</button>}
        {/* ??{props.openSpots===0 && <button className="btn">SOLD OUT</button>} */}
      </div>
      <div className="main--info">
        <img src="./Star.png" alt="" className="main--info--star" />
        <p>{props.stats.rating}</p>
        <p className="country">({props.stats.reviewCount})</p>
        <p className="country">&#x2022;</p>
      <p className="country">{props.location}</p>      
       </div>
      <p className="main--info--caption">{props.title}</p>
      <p className="main--info--price"><strong>From ${props.price}</strong> / person</p>
    </div>
   
  )
}