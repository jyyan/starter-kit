import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import routeReducer from './route-reducer';

export default combineReducers({
    routing: routeReducer
});
