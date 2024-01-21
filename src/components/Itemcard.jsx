import "./css/Itemcard.css";
function Itemcard({data}){
    console.log(data);
    return (
        <div className="Itemcard">
            <h4>{data.title.substring(0,30)}</h4>
            <p>{data.description.substring(0,70)}</p>
            <img id="img" src={data.image} alt="" />
            <div id="pricediv">
                <p>${data.price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Itemcard;