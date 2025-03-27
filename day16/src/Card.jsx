import "./App.css"
const Card = ({title,price,thumbnail}) => {
  return (
    <div className="card">
        <img src={thumbnail} width={250} />
        <h2>{title}</h2>
        <p>{price}</p>
    </div>
  )
}

export default Card