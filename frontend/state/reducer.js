import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import routeReducer from 'state/route-reducer';

export default combineReducers({
    routing: routeReducer
});
