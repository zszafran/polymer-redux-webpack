import {createStore} from 'redux';
import PolymerRedux from 'polymer-redux/src/';

const initial = {message: 'Hello, World!'};
const reducer = state => state;
const store = createStore(reducer, initial);

export default PolymerRedux(store);