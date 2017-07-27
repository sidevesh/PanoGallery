import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import App from './containers/App/App';
import Panorama from './containers/Panorama/Panorama';
import PanoGallery from './containers/PanoGallery/PanoGallery';

export default (
  <Route path="/">
    <IndexRedirect to="PanoGallery"/>
    <Route path="/PanoGallery" component={App}>
      <IndexRoute component={PanoGallery} />
      <Route path=":id" component={Panorama}/>
    </Route>
  </Route>
);
