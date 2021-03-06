// == Import
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loading, fetchDatas } from 'src/actions';
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
    // console.log(isLoading);
    dispatch(fetchDatas());

    setTimeout(() => {
      const actionLoadingTime = loading();
      dispatch(actionLoadingTime);
    }, 1000);
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
