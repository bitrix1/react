import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';
import files from './files';
import sortFiles from './sortFiles';

export default combineReducers({
  routing: routerReducer,
  tracks,
  playlists,
  filterTracks,
  files,
  sortFiles
});
