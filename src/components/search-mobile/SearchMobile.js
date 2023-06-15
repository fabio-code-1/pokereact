import './SearchMobile.css';
function SearchMobile() {
  return (
    <div className="search-mobile">
      <form className="d-flex m-2">
        <input className="form-control me-2" type="search" placeholder="Pokemon... " aria-label="Search" />
        <button className="btn btn-success" type="submit">Pesquisar</button>
      </form>
    </div>
  );
}

export default SearchMobile;