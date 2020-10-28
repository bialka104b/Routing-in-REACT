//Nasza podstrona Produktu
import {Link} from 'react-router-dom';
import avocado from '../img/avocado.jpg';
import burak from '../img/burak.jpg';
import cytryna from '../img/cytryna.jpg';
import jablko from '../img/jablko.jpg';
import limonka from '../img/limonka.jpg';
import ogorek from '../img/ogorek.jpg';

function Product() {
  const productsArray = [
    {name: 'Avocado', url: avocado},
    {name: 'Burak', url: burak}, 
    {name: 'Cytryna', url: cytryna},
    {name: 'Jabłko', url: jablko},
    {name: 'Limonka', url: limonka}, 
    {name: 'Ogórek', url: ogorek}
  ];
  const list = productsArray.map((product, index) => {
    return (
      <li className="product__list-li" key={index}>
        <Link to={`/one_product/${product.name}`}>{product.name}
        <img src={`${product.url}`} alt="img" key={index} className="product__img"></img>
        </Link>
      </li>
    )
  })
  return (
    <div className="product">
      <h2>Lista produktów: </h2>
      <div>
        <ul className="product__list">
          {list}
        </ul>
      </div>
    </div>
  );
}
export default Product;