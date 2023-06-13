import './Header.css';
import NavBar from '../NavBar/NavBar.js';
function Header() {
  return (
    <header className="border d-flex  flex-column">
     <NavBar/>
     <div className="border border-danger d-flex align-items-center justify-content-center h-100">

     </div>
    </header>
  );
}

export default Header;