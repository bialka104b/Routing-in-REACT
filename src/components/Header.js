import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      {/* <a href="/home" className="header__link">Komponent Header</a> */}
      <NavLink exact to="/" className="header__link" activeClassName="is-active">Komponent Header</NavLink>
      {/* exact wymagane po to aby React  potraktował tego "/" jako coś najważniejszego i żeby nie było nic więcej tylko ten slash i wtedy nas kierowało na strone główną, dzięki temu pozbywamy sie dwóch linków jednocześnie o klasie is-active*/}
      {/* activeClassName daje możliwość zmiany domyślnej klasy active, która jest generowana przez NavLinka na inną nazwe tej klasy */}
      <NavLink to="/about" className="header__link" activeClassName="is-active">Komponent About</NavLink>
      <NavLink to="/contact" className="header__link" activeClassName="is-active">Komponent Contact</NavLink>
      <NavLink to="/product" className="header__link" activeClassName="is-active">Komponent Product</NavLink>
      <NavLink to="/foruser" className="header__link" activeClassName="is-active">Komponent Dla użytkownika zalogowanego</NavLink>
    </div>
  );
}
export default Header;