export const SETSCENE = 'SETSCENE';
export function SetScene(change_scene) {
    return {
        type: SETSCENE,
        change_scene: change_scene
    };
}
