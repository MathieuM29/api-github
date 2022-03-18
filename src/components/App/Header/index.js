// == Import
import './styles.scss';
import logoGitHub from 'src/assets/images/github_logo.png';

// == Composant
const Header = () => (
  <header className="header">
    <img className="header--img" src={logoGitHub} alt="logo GitHub" />
  </header>
);

// == Export
export default Header;
