import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetGridColumnsData, SetGridRowsData, SetGridData } from './../../Actions/GridData'
import ReactDataGrid from "react-data-grid"
import { Toolbar, Data, Menu } from "react-data-grid-addons";
import './DataGridEditorSample.css'

const defaultColumnProperties = {
    filterable: true,
    resizable: true,
    sortable: true,
};

const columns = [
    {
        key: "id",
        name: "ID",
        editable: false,
        frozen: true,
        sortDescendingFirst: true
    },
    {
        key: "title",
        name: "Title",
        editable: true
    },
    {
        key: "firstname",
        name: "First name",
        editable: true
    },
    {
        key: "lastname",
        name: "Last name",
        editable: true
    },
    {
        key: "complete",
        name: "Complete",
        editable: true
    }
].map(c => ({ ...c, ...defaultColumnProperties }));


const rows = [
    { id: 0, title: "Task 1", firstname: "goli1", lastname: "81", complete: 20, expand: true },
    { id: 1, title: "Task 2", firstname: "goli2", lastname: "82", complete: 40, expand: true },
    { id: 2, title: "Task 3", firstname: "goli3", lastname: "83", complete: 60, expand: true },
    { id: 3, title: "Task 4", firstname: "goli4", lastname: "84", complete: 80, expand: true },
    { id: 4, title: "Task 5", firstname: "goli5", lastname: "85", complete: 100, expand: true },
    { id: 5, title: "Task 11", firstname: "goli5", lastname: "85", complete: 100, expand: true }
];

const selectors = Data.Selectors;
const { ContextMenu, MenuItem, SubMenu, ContextMenuTrigger } = Menu;


function ExampleContextMenu({
    idx,
    id,
    rowIdx,
    onRowDelete,
    onRowInsertAbove,
    onRowInsertBelow
  }) {
    return (
      <ContextMenu id={id}>
        <MenuItem data={{ rowIdx, idx }} onClick={onRowDelete}>
          Delete Row
        </MenuItem>
        <SubMenu title="Insert Row">
          <MenuItem data={{ rowIdx, idx }} onClick={onRowInsertAbove}>
            Above
          </MenuItem>
          <MenuItem data={{ rowIdx, idx }} onClick={onRowInsertBelow}>
            Below
          </MenuItem>
        </SubMenu>
      </ContextMenu>
    );
  }


class DataGridEditor extends Component {
    constructor(props) {
        super(props);
        this.state = { filters: undefined };
    }

    componentDidMount() {
        console.log('DataGridEditor component start');
        this.props.onSetGridData(columns, rows);
    }

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        const rows = this.props.gridRowsData.slice();
        for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
        }
        this.props.onSetGridRowsData(rows)
    };

    onFilterEventChange = (filter) => {
        const newFilters = { ...this.state.filters };
        if (filter.filterTerm) {
            newFilters[filter.column.key] = filter;
        } else {
            delete newFilters[filter.column.key];
        }
        this.setState({ filters: newFilters })
    }

    onClearFilter = () => {
        this.setState({ filters: undefined })
    }

    getRows = (rows, filters) => {
        var result = selectors.getRows({ rows, filters });
        return result
    }

    onSortRow = (sortColumn, sortDirection) => {
        const comparer = (a, b) => {
            if (sortDirection === "ASC") {
                return a[sortColumn] > b[sortColumn] ? 1 : -1;
            } else if (sortDirection === "DESC") {
                return a[sortColumn] < b[sortColumn] ? 1 : -1;
            }
        };

        if (sortDirection === "NONE") {
            sortDirection = "ASC"
            sortColumn = "id"
        }

        var newRowsData = [...this.props.gridRowsData].sort(comparer)
        this.props.onSetGridRowsData(newRowsData)
    }

    EmptyRowsView = () => {
        const message = "No data";
        return (
          <div
            style={{ textAlign: "center", backgroundColor: "#ddd", padding: "100px" }}
          >
            <h3>{message}</h3>
          </div>
        );
      };

    deleteRow = rowIdx => {
        // const nextRows = [...rows];
        // nextRows.splice(rowIdx, 1);
        // return nextRows;
        //return this.props.gridRowsData;
    };

    insertRow = rowIdx => {
        // const newRow = createFakeRow("-");
        // const nextRows = [...rows];
        // nextRows.splice(rowIdx, 0, newRow);
        // return nextRows;
        //return this.props.gridRowsData;
    };

    RowRenderer = ({ renderBaseRow, ...props }) => {
        const color = props.idx % 2 ? "green" : "blue";
        const newClass = props.idx % 2 ? "CellTest" : "CellTest2";
        var row = props.row;
        //row.id = "3"
        // return <div style={{color}}>{renderBaseRow({...props, row})}</div>;
        return <div className={newClass}>{renderBaseRow({...props, row})}</div>;
      };

      
    render() {
        if (this.props.gridColumnsData.length == 0) {
            return (<div>none</div>);
        }
        const filteredRows = this.getRows(this.props.gridRowsData, this.state.filters)

        return (
            <div className="DataGridEditorRoot">
                <ReactDataGrid
                    columns={this.props.gridColumnsData}
                    rowGetter={i => filteredRows[i]}
                    rowsCount={filteredRows.length}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                    enableCellSelect={true}
                    toolbar={<Toolbar enableFilter={true} />}
                    onAddFilter={this.onFilterEventChange}
                    onClearFilters={this.onClearFilter}
                    onGridSort={this.onSortRow}
                    emptyRowsView={this.EmptyRowsView}
                    rowRenderer={this.RowRenderer}
                    contextMenu={
                        <ExampleContextMenu
                        onRowDelete={(e, { rowIdx }) => this.deleteRow(rowIdx)}
                        onRowInsertAbove={(e, { rowIdx }) => this.insertRow(rowIdx)}
                        onRowInsertBelow={(e, { rowIdx }) => this.insertRow(rowIdx + 1)}
                        />
                    }
                    RowsContainer={ContextMenuTrigger}
                // minHeight={500}
                // onColumnResize={(idx, width) => console.log(`Column ${idx} has been resized to ${width}`) }
                // onCellCopyPaste
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        gridColumnsData: state.gridData.gridColumnsData,
        gridRowsData: state.gridData.gridRowsData
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSetGridColumnsData: (param1) => dispatch(SetGridColumnsData(param1)),
        onSetGridRowsData: (param1) => dispatch(SetGridRowsData(param1)),
        onSetGridData: (param1, param2) => dispatch(SetGridData(param1, param2))
    }
}
DataGridEditor = connect(mapStateToProps, mapDispatchToProps)(DataGridEditor);
export default DataGridEditor;