//Nasza podstrona Produktu
import {Link} from 'react-router-dom';

function Product() {
  const productsArray = ['produkt 1', 'produkt 2', 'produkt 3'];
  const list = productsArray.map((product, index) => {
    return (
      <li className="product__list-li" key={index}>
        <Link to="/about">{product}</Link>
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