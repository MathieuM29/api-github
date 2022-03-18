// == Import
import './styles.scss';
import Header from './Header';
import Search from './Search';
import Message from './Message';
import Repos from './Repos';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Search />
    <Message />
    <Repos />
  </div>
);

// == Export
export default App;
