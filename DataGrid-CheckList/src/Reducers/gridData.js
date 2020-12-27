import { SETGRIDCOLUMNSDATA, SETGRIDROWSDATA, SETGRIDDATA } from '../Actions/GridData'

const initialState = {
    gridColumnsData : [],
    gridRowsData : [],
};

export default function gridData(state = initialState, action) {
    switch(action.type) {
        case SETGRIDCOLUMNSDATA:
            console.log('SetGridColumnsData');
            return Object.assign({}, state, {
                gridColumnsData: action.columnsData
            });
        case SETGRIDROWSDATA:
            console.log('SetGridRowsData');
            return Object.assign({}, state, {
                gridRowsData: action.rowsData
            });
        case SETGRIDDATA:
            console.log('SetGridData');
            return Object.assign({}, state, {
                gridColumnsData: action.columnsData,
                gridRowsData: action.rowsData
            });
        default:
            return state;
    }
}