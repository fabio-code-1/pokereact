import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import Carousel from '../carrousel/Carousel.js';
import Search from '../search/Search';


function Header() {
  return (
    <header className="d-flex  flex-column overflow-hidden">
      <NavBar />
      <div>
        <Search />
      </div>
      <Carousel />
    </header>
  );
}

export default Header;