// == Import
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

// == Composant
const Message = () => {

  const {search, repos, totalCount} = useSelector((state) => state);

  return (
  <div className="message">
    <p className="message--text">La recherche {search} a donné {totalCount} résultats</p>
  </div>
  )
};

// == Export
export default Message;
