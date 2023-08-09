import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import formReducer from './reducers/formReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer
});

const store = createStore(rootReducer);

export default store;