import logo from '../../../images/header_image.svg';

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Image of a text that spells: Around the U.S."
        className="header__image"
      />
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
