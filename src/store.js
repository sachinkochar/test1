import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore,applyMiddleware  } from 'redux';
const store  = createStore(reducers,applyMiddleware(thunk,logger));

export default store;