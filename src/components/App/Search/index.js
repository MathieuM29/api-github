// == Import
import './styles.scss';
import search from 'src/assets/images/search.png';

// == Composant
const Search = () => (
  <div className="search">
    <input className="search--input" type="text" placeholder="Rechercher" />
    <img className="search--icon" src={search} alt="search icon" />
  </div>
);

// == Export
export default Search;
