import {
  LOADING,
  CHANGE_INPUT_VALUE,
  RECIEVED_DATAS

} from '../actions';

const stateInital = {

  isLoading: false,
  search: '',
  repos: [],
  totalCount: 0,

};

export default (state = stateInital, action = {}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        search: action.payload,
      };
    case RECIEVED_DATAS:
      return {
        ...state,
        repos: action.payload.items,
        totalCount: action.payload.total_count,
      };

      default:
        return state;
  }


};
