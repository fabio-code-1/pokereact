import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import Carousel from '../carrousel/Carousel.js';
function Header() {
  return (
    <header className="d-flex  flex-column overflow-hidden">
      <NavBar />
      <Carousel />
    </header>
  );
}

export default Header;