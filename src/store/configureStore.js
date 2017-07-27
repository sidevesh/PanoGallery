import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import galleryState from '../reducers/gallery_state';
import thunk from 'redux-thunk';

const router = routerMiddleware(browserHistory);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(router, thunk));

export default createStore(
  combineReducers({
    galleryState,
    routing: routerReducer
  }),
  enhancer
);
