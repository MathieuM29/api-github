import axios from 'axios';
import { FETCH_DATAS, recievedDatas } from 'src/actions';

const loadingDatasMiddleware = (store) => (next) => (action) => { 
  switch (action.type) {
    case FETCH_DATAS:
      next(action);

      const search = store.getState();
      // console.log(search);

      axios({
        method: 'get',
        url: `https://api.github.com/search/repositories?q=${search}`,
      })
        .then((res) => {
          const actionReceivedDatas = recievedDatas(res.data);
          console.log('middleware', actionReceivedDatas);
          store.dispatch(actionReceivedDatas);
        })
        .catch((err) => {
          console.log(err);
        }); 
      break; 
    default: 
      next(action); 
  } 
}; 

export default loadingDatasMiddleware;
