import { connect } from 'react-redux';

import App from './index.jsx';

const selector = state => ({
    route: state.getIn(['routing', 'locationBeforeTransitions', 'pathname'])
});

export default connect(selector)(App);

