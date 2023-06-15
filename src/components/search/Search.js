import './Search.css';
function Search() {
  return (
    <div className="search">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Pokemon... " aria-label="Search" />
        <button className="btn btn-success" type="submit">Pesquisar</button>
      </form>
    </div>
  );
}

export default Search;