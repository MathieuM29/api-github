// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loading } from 'src/actions';
import './styles.scss';
import Header from './Header';
import Search from './Search';
import Message from './Message';
import Repos from './Repos';
import Loader from './Loader';

// == Composant
const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    const actionLoading = loading();
    dispatch(actionLoading);
    console.log(isLoading);

    setTimeout(() => {
      const actionLoadingTime = loading();
      dispatch(actionLoadingTime);
    }, 1500);

  }, []);

  return (
  <div className="app">
    {!isLoading && (
      <>
    <Header />
    <Search />
    <Message />
    <Repos />
      </>
    )}
    
    {isLoading && <Loader />}
  </div>
  )
};

// == Export
export default App;
