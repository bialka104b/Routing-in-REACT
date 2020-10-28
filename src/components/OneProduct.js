function OneProduct(props) {
  return (
    <div className="one-product__components">
      <h2>{props.id} dddd</h2>
      {/* pod obiektem props mamy  id przekazywane z komponentu FirstProduct które dociera z komponentu Content*/}
      <img src="props.id" alt=""/>
    </div>
  );
}
export default OneProduct;