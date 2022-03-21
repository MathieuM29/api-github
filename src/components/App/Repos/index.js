// == Import
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import Repo from './Repo';

// == Composant
const Repos = () => {

  const reposList = useSelector((state) => state.repos);
  console.log('les repos', reposList);

// tri des données reçus de l'API (modification de la structure du tableau)
  const cleanRepos = (data) => data.map((item) => ({

    id: item.id,
    title: item.full_name,
    description: item.description || 'No description',
    owner: item.owner.login,
    imageUrl: item.owner.avatar_url,
  }));

  const results = cleanRepos(reposList);
  // console.log(results);

  return (
  <div className="repos">

    {results.map((result) => (

      <Repo 
        key={result.id}
        {...result}
      />

    ))}
    

    {/* <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo />
    <Repo /> */}
    
  </div>
  );
};

// == Export
export default Repos;
