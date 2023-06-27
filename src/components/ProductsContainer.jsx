import './css/productsContainer.css'

import ProductItem from './ProductItem'

const data = [
    {
        "productname": "Crocs™ Crocband™",
        "price": "45,99",
        "color": "#303e59",
        "info": "Crocs™ Crocband™",
        "image": "crocs-crocband-navy.jpg"
    },
    {
        "productname": "Crocs™ Classic",
        "price": "39,99",
        "color": "#d0d9a2",
        "info": "Crocs™ Classic",
        "image": "crocs-classic-lime-zest.jpg"
    },
    {
        "productname": "Crocs™ Summer Slide",
        "price": "29,99",
        "color": "#e55f68",
        "info": "Crocs™ Baya Summer Slide™",
        "image": "crocs-baya-summer-slide-pepper.jpg"
    },
    {
        "productname": "Crocs™ Bayaband Clog",
        "price": "36.50",
        "color": "#0388d6",
        "info": "Crocs™ Bayaband Clog Bright Cobalt",
        "image": "crocs-bayaband-clog-bright-cobalt.jpg"
    },
    {
        "productname": "Crocs™ Kids' Crocband™",
        "price": "35,99",
        "color": "#ec93be",
        "info": "Crocs™ Kids' Crocband™ Jaunt",
        "image": "crocs-kids-crocband-jaunt-bright-pink.jpg"
    },
    {
        "productname": "Crocs™ Bayaband Logo",
        "price": "38,49",
        "color": "#078aa9",
        "info": "Crocs™ Bayaband Logo Motion Clog",
        "image": "crocs-bayaband-logo-motion-clog-black.jpg"
    },
    {
        "productname": "Crocs™ Kids' Handle It",
        "price": "34,99",
        "color": "#f2ca46",
        "info": "Crocs™ Kids' Handle It Rain Boot",
        "image": "crocs-kids-handle-it-rain-boot-yellow.jpg"
    },
    {
        "productname": "Crocs™ Bayaband Clog",
        "price": "34.99",
        "color": "#222",
        "info": "Crocs™ Bayaband Clog Black/White",
        "image": "crocs-bayaband-clog-black-white.jpg"
    },
    {
        "productname": "Crocs™ Serena",
        "price": "35,99",
        "color": "#ea6d6e",
        "info": "Crocs™ Serena Flip Women's",
        "image": "crocs-serena-flip-women-s-poppy.jpg"
    }
];

const ProductsContainer = () => {

   return (
      <div id="product-item-container">

         { data.map( (itemData) => <ProductItem data={ itemData } />) }

      </div>
   )
}

export default ProductsContainer