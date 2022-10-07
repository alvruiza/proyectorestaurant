import "./DishCard.css"

const DishCard = (props) => {

    const {platos} = props

    return (         
        <div className="container-fluid dishdiv">
            <h1 className="dishtitle">{platos.title}</h1>
            <img className="dishimg"   src={platos.img} alt="" />
            <p className="dishdescription">{platos.description}</p>
            <p className="dishprice">${platos.price}</p>
        </div>                 
    )
}

export default DishCard