export const LOADING = 'LOADING';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const FETCH_DATAS = 'FETCH_DATAS';
export const RECIEVED_DATAS = 'RECIEVED_DATAS';

export const loading = () => ({
  type: LOADING,
});

export const changeInputValue = (payload) => ({
  type: CHANGE_INPUT_VALUE,
  payload: payload,
});

export const fetchDatas = () => ({
  type: FETCH_DATAS,
});

export const recievedDatas = (payload) => ({
  type: RECIEVED_DATAS,
  payload: payload,
});
