// == Import
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

// == Composant
const Message = () => {

  const {search, repos} = useSelector((state) => state);

  return (
  <div className="message">
    <p className="message--text">La recherche {search} a donné {repos.length} résultats</p>
  </div>
  )
};

// == Export
export default Message;
