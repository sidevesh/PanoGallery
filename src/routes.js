import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import Panorama from './containers/Panorama/Panorama';
import PanoGallery from './containers/PanoGallery/PanoGallery';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PanoGallery} />
    <Route path="/:id" component={Panorama} />
  </Route>
);
