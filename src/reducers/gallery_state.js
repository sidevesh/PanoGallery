import * as types from '../constants/actionTypes';

const initialState = {
  panos: [],
  status: 'initial'
};

export default function galleryState(state = initialState, action = {}) {
  switch (action.type) {
    case types.DATA_LOAD_SUCCESS:
      return {
        ...state,
        panos: action.panos,
        status: 'success'
      };
    case types.DATA_LOADING:
      return {
        ...state,
        status: 'loading'
      };
    case types.DATA_LOAD_ERROR:
      return {
        ...state,
        status: 'error'
      };
    default:
      return state;
  }
}
