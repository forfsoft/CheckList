import { SETSCENE } from '../Actions/Scene'

const initialState = {
    current_scene: 'MainPage',
};

export default function scene(state = initialState, action) {
    console.log('scene action call:', action);
    switch(action.type) {
        case SETSCENE:
            console.log('SetScene current ' + state.current_scene + ' to ' + action.change_scene);
            return Object.assign({}, state, {
                current_scene: action.change_scene
            });
        default:
            return state;
    }
}