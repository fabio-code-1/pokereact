import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import Carousel from '../carrousel/Carousel.js';
import SearchMobile from '../search-mobile/SearchMobile';

function Header() {
  return (
    <header className="d-flex  flex-column overflow-hidden">
      <NavBar />
      <SearchMobile />
      <div class="d-grid gap-2 col-6 mx-auto m-5">
        <button class="btn btn-warning" type="button"><i class="bi bi-arrow-clockwise"></i>Surpreenda-me</button>
      </div>
      <Carousel />
    </header>
  );
}

export default Header;