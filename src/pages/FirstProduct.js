//Nasza podstrona pojedynczego produktu
import {Link} from 'react-router-dom';
import OneProduct from "../components/OneProduct"; //importujemy komponent o tej samej nazwie ale z innego folderu

function FirstProduct(props) {
    return (
      <div className="one-product">
        <h1>Strona OneProduct</h1>
        <OneProduct id={props.match.params.id}></OneProduct>
        {/* {props.match.params.id} to nazwa naszego produktu z listy  z pliku Product.js  przekazana propsami z pliku /components/OneProduct.js<br/> */}
        <Link to="/product">Powrót do listy produktów</Link>
      </div>
    );
  }
export default FirstProduct;