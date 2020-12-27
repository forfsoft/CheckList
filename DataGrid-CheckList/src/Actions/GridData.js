export const SETGRIDCOLUMNSDATA = 'SETGRIDCOLUMNSDATA';
export function SetGridColumnsData(data) {
    return {
        type: SETGRIDCOLUMNSDATA,
        columnsData: data
    };
}

export const SETGRIDROWSDATA = 'SETGRIDROWSDATA';
export function SetGridRowsData(data) {
    return {
        type: SETGRIDROWSDATA,
        rowsData: data
    };
}

export const SETGRIDDATA = 'SETGRIDDATA';
export function SetGridData(columns, rows) {
    return {
        type: SETGRIDDATA,
        columnsData: columns,
        rowsData: rows
    };
}
