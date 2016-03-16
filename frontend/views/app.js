import { connect } from 'react-redux';

import App from './index';

const selector = state => ({
    route: state.getIn(['routing', 'locationBeforeTransitions', 'pathname'])
});

export default connect(selector)(App);

