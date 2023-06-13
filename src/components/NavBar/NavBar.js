import './NavBar.css';
import logo from '../../assets/images/pokemon-logo-8.png'; //
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center justify-content-center text-center justify-content-sm-center" href="#home">
          <img src={logo} className="img-fluid sm-img" alt="logo-pokemon" width="300" height="100" />
        </a>
        <button className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 align-items-center justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Página Inicial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">Pokédex</a>
            </li>
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