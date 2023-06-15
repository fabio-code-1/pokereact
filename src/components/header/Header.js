import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import Carousel from '../carrousel/Carousel.js';
import SearchMobile from '../search-mobile/SearchMobile';

function Header() {
  return (
    <header className="d-flex  flex-column overflow-hidden">
      <NavBar />
      <SearchMobile />
      <Carousel />
    </header>
  );
}

export default Header;