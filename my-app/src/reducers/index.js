import {combinedReducers, combineReducers} from 'redux';
import posts from './posts/reducer';

export default combineReducers({
    posts
})