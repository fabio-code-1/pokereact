import './NavBar.css';
import logo from '../../assets/images/pokemon-logo-8.png';
import bullbasaur from '../../assets/icons/bullbasaur.png';
import charmander from '../../assets/icons/charmander.png';
import pikachu from '../../assets/icons/pikachu.png';
import squirtle from '../../assets/icons/squirtle.png';
import pokedex from '../../assets/icons/pokedex.png';
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center justify-content-center text-center justify-content-sm-center" href="/">
          <img src={logo} className="img-fluid sm-img" alt="logo-pokemon" width="300" height="100" />
        </a>
        <button className="navbar-toggler mx-auto button-bnt" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 align-items-center justify-content-center">
            <div className="d-flex flex-wrap">
              <div className="nav-item ms-3">
                <a className="nav-link d-flex flex-column align-items-center" href="#home">
                  <img src={pikachu} className="img-fluid mb-2" alt="icon" width="50" height="40" />
                  <span className="text-center btn btn-warning text-light btn-sm">Início</span>
                </a>
              </div>
              <div className="nav-item ms-3">
                <a className="nav-link d-flex flex-column align-items-center" href="#home">
                  <img src={pokedex} className="img-fluid mb-2" alt="icon" width="50" height="40" />
                  <span className="text-center btn btn-dark text-light btn-sm">Pokédex</span>
                </a>
              </div>
              <div className="nav-item ms-3">
                <a className="nav-link d-flex flex-column align-items-center" href="#home">
                  <img src={bullbasaur} className="img-fluid mb-2" alt="icon" width="50" height="40" />
                  <span className="text-center btn btn-success text-light btn-sm">Link</span>
                </a>
              </div>
            </div>

            <div className="d-flex flex-wrap">
              <div className="nav-item ms-3">
                <a className="nav-link d-flex flex-column align-items-center" href="#home">
                  <img src={charmander} className="img-fluid mb-2" alt="icon" width="50" height="40" />
                  <span className="text-center btn btn-danger text-light btn-sm">Link</span>
                </a>
              </div>
              <div className="nav-item ms-3">
                <a className="nav-link d-flex flex-column align-items-center" href="#home">
                  <img src={squirtle} className="img-fluid mb-2" alt="icon" width="50" height="40" />
                  <span className="text-center btn btn-primary text-light btn-sm">Link</span>
                </a>
              </div>
              <div className="nav-item ms-3">
                <div className="nav-link d-flex flex-column align-items-center" href="#home">
                  <img src={squirtle} className="img-fluid mb-2" alt="icon" width="50" height="40" />
                  <span className="text-center text-dark btn-sm">Light</span>
                </div>
              </div>
            </div>
          </ul>


          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Pokemon... " aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Pesquisar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar