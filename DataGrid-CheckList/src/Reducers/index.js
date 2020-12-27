import { combineReducers } from 'redux';
import scene from './scene'
import gridData from './gridData'

export default combineReducers({
    scene,
    gridData
    // 다른 리듀서를 만들게되면 여기에 넣어줌..
});