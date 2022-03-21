// == Import
import './styles.scss';
import search from 'src/assets/images/search.png';

// == Composant
const Repo = ({ imageUrl, title, description, owner, id }) => {


  return (
  <div className="repo">
    <div className="repo__picture">
      <img className="repo__picture--img" src={imageUrl} alt="repo picture" />
    </div>
    <div className="repo__infos">
      <h2 className="repo__infos--title">{title}</h2>
      <p className="repo__infos--subtitle">{owner}</p>
      <p className="repo__infos--desc">{description}</p>
    </div>
  </div>
  );
};

// == Export
export default Repo;
