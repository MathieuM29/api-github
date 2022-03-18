// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeInputValue, fetchDatas } from 'src/actions';
import './styles.scss';
import searchIcon from 'src/assets/images/search.png';

// == Composant
const Search = () => {

 const value = useSelector((state) => state.search);
 const dispatch = useDispatch();

//  console.log(value);

 const handleChange = (e) => {

  dispatch(changeInputValue(e.target.value));
 };

 const handleSubmit = (e) => {

  e.preventDefault();
  dispatch(fetchDatas());
 };

  return (
  <div className="search">
    <form onSubmit={handleSubmit}>
      <input className="search--input" type="text" placeholder="Rechercher" value={value} onChange={handleChange} />
      <img className="search--icon" src={searchIcon} alt="search icon" />
    </form>
  </div>
  )
};

// == Export
export default Search;
