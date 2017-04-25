// Dependencies
import { combineReducers } from 'redux';

// Default Reducers
import { device } from '../../reducers';

// Components Reducers
// import home from '../../containers/Home/reducer';

const rootReducer = combineReducers({
  // home,
  device
});

export default rootReducer;
