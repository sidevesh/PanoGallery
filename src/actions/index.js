import * as types from '../constants/actionTypes';

export const callDataLoading = () => ({
  type: types.DATA_LOADING
})


export const callDataLoadError = () => ({
  type: types.DATA_LOAD_ERROR
})

export const callDataLoadSuccess = (resp) => ({
  type: types.DATA_LOAD_SUCCESS,
  panos: resp
})


export function callDataLoad() {
  return function (dispatch, getState) {
    dispatch(callDataLoading());
    return fetch(`https://demo0813639.mockable.io/getPanos`)
      .then(response => {
        if(response.status === 200) {
          return response.json();
        }
      })
      .then((json) => {
        dispatch(callDataLoadSuccess(json));
      })
      .catch(() => dispatch(callDataLoadError()));
    }
}