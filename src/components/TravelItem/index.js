import './index.css'

const TravelItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails

  return (
    <li className="list-items">
      <img src={imageUrl} className="logos" alt={name} />
      <div>
        <h1 className="head">{name}</h1>
        <p className="desc">{description}</p>
      </div>
    </li>
  )
}

export default TravelItem
