import './CardItems.css'

const CardItems = (props) => {
    return (
        <div className="pokemon-card-attribute">
            <div className="pokemon-card-attribute-label">{props.name}</div>
            <div className="pokemon-card-attribute-value">{props.value}</div>
        </div>
    )
}

export default CardItems;