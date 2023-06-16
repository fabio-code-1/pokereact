import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import Carousel from '../carrousel/Carousel.js';
import SearchMobile from '../search-mobile/SearchMobile';
import refreshbutton from '../../assets/icons/refresh-button.png';

function Header() {
  return (
    <header className="d-flex  flex-column overflow-hidden">
      <NavBar />
      <SearchMobile />
      <div class="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
        <button class="btn btn-warning text-light" type="button">Surpreenda-me
        <img src={refreshbutton} className=" ms-3 img-fluid" alt="icon" width="20" height="20" />
        </button>
      </div>
      <Carousel />
    </header>
  );
}

export default Header;