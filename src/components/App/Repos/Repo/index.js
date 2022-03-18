// == Import
import './styles.scss';
import search from 'src/assets/images/search.png';

// == Composant
const Repo = () => (
  <div className="repo">
    <div className="repo__picture">
      <img className="repo__picture--img" src={search} alt="repo picture" />
    </div>
    <div className="repo__infos">
      <h2 className="repo__infos--title">Titre repo</h2>
      <p className="repo__infos--subtitle">sous-titre repo</p>
      <p className="repo__infos--desc">Dolor anim excepteur do eu dolore officia ex. Velit commodo incididunt sint incididunt. Voluptate ullamco cillum culpa dolor officia ea enim nisi sint occaecat aliqua id eu magna.</p>
    </div>
  </div>
);

// == Export
export default Repo;
