import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import Carousel from '../carrousel/Carousel.js';
function Header() {
  return (
    <header className="border d-flex  flex-column">
      <NavBar />
      <Carousel />
    </header>
  );
}

export default Header;