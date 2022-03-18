import {
  LOADING,

} from '../actions';

const stateInital = {

  isLoading: false,

};

export default (state = stateInital, action = {}) => {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
      
      default:
        return state;
  }


};
