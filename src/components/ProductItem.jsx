import './css/productItem.css'

function ProductItem(props) {

   const {productname, price, color, info, image} = props.data

   return (
      <div className="product-item">
         <img className="product-item-img"  src={`images/${ image }`} alt={ productname } /> 
         <span className="product-item-name">{ info }</span>
         <span className="product-item-price">{ price }<span>&nbsp;€</span></span>
         <span className="product-item-color-dot" style={{backgroundColor: color}}></span>
      </div>
   )
}
export default ProductItem

