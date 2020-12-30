import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetGridColumnsData, SetGridRowsData, SetGridData } from './../../Actions/GridData'
import { GetColumnsData, GetRowsData, GetColumnsResize, GetBooleanColumns } from "./DataGridTreeData"
import './DataGridTreeEditor.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
//import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import GridMUI from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    GroupingState,
    IntegratedGrouping,
    SortingState,
    IntegratedSorting,
    SearchState,
    FilteringState,
    IntegratedFiltering,
    EditingState,
    TreeDataState,
    CustomTreeData,
    DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {
    Plugin,
    Template,
    TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import {
    Grid,
    Table,
    TableColumnVisibility,
    Toolbar,
    ColumnChooser,
    SearchPanel,
    TableHeaderRow,
    TableTreeColumn,
    TableGroupRow,
    GroupingPanel,
    DragDropProvider,
    TableInlineCellEditing,
    TableColumnResizing,
    TableFilterRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';

class DataGridTreeEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: GetColumnsData(), rows: GetRowsData(), columnsWidth: GetColumnsResize(), viewType: 'Default',
            defaultHiddenColumnNames: undefined, filteringColumnExtensions: undefined, activeColumnsFilter: false, columnFilters: [],
            booleanColumns: GetBooleanColumns()
        };
        //this.setState({ filteringColumnExtensions: this.getHiddenColumnsFilteringExtensions(this.state.defaultHiddenColumnNames) })
    }

    componentDidMount() {
        console.log('DataGridTreeEditor component start');
        this.props.onSetGridData(GetColumnsData(), GetRowsData());
    }

    onViewType = (event, newType) => {
        this.setState({ viewType: newType })
    }

    getHiddenColumnsFilteringExtensions = hiddenColumnNames => {
        if (undefined == hiddenColumnNames) {
            return undefined;
        }
        var newColumnNames = hiddenColumnNames.map(columnName => ({
            columnName,
            predicate: () => false,
        }));
        return newColumnNames;
    }

    BooleanTypeProvider = props => (
        <DataTypeProvider formatterComponent={this.BooleanFormatter} editorComponent={this.BooleanEditor} {...props} />
    );

    BooleanFormatter = ({ value }) => <Chip label={value ? 'Yes' : 'No'} />;

    BooleanEditor = ({ value, onValueChange }) => (
        <Select
            input={<Input />}
            value={value ? 'Yes' : 'No'}
            onChange={event => onValueChange(event.target.value === 'Yes')}
            style={{ width: '100%' }} >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
        </Select>
    );

    onHiddenColumnNamesChange = (hiddenColumnNames) => {
        this.setState({ filteringColumnExtensions: this.getHiddenColumnsFilteringExtensions(this.state.defaultHiddenColumnNames) })
    }

    commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        var rows = this.state.rows;
        if (added) {
            const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
            changedRows = [
                ...rows,
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row,
                })),
            ];
        }
        if (changed) {
            changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
        }
        this.setState({ rows: changedRows })
    };

    FocusableCell = ({ onClick, ...restProps }) => (
        <Table.Cell {...restProps} tabIndex={0} onFocus={onClick} />
    );

    getRowId = row => (
        row.id
    );

    getChildRows = (row, rootRows) => {
        if (undefined == row) {
            console.log("===== undefined")
        } else {
            console.log("=====", row.id, row.parentId)
        }
        const childRows = rootRows.filter(r => r.parentId === (row ? row.id : null));
        //console.log("=====",childRows, rootRows)
        return childRows.length ? childRows : null;
    };

    onFiltersChange = (event) => {
        console.log("====", event)
        this.setState({ columnFilters: event });
    }

    onActiveColumnFilter = (event) => {
        if (event.target.checked == false) {
            console.log("==== filter none")
            this.setState({ columnFilters: [] });
        }
        this.setState({ activeColumnsFilter: event.target.checked });
    }

    onDeleteColumn = (columnData) => {
        if (undefined == columnData) {
            return;
        }
        //console.log("===", columnData)
    }

    onCloneColumn = (columnData) => {
        if (undefined == columnData) {
            return;
        }
        //console.log("===", columnData)
    }

    cellComponent = (props) => {
        //console.log("===", props)
        const { column } = props;
        if (column.name === 'Action') {
             return ( 
                <Table.Cell {...props} >
                    <IconButton onClick={() => this.onDeleteColumn(props.row)} color="primary" component="span" style={{ height: '20px'}} >
                        <DeleteIcon style={{ pandding: '0px'}} />
                    </IconButton>
                    <IconButton onClick={() => this.onCloneColumn(props.row)} color="primary" component="span" style={{ height: '20px'}} >
                        <FileCopyIcon style={{ pandding: '0px'}} />
                    </IconButton>
                </Table.Cell>
             )
        }
        return <Table.Cell {...props} />;
    };
/*
        //             style={{
        //                 backgroundColor: value < 5000 ? 'red' : undefined,
        //             }} >
        //             <span
        //                 style={{
        //                     color: value < 5000 ? 'white' : undefined,
        //                 }} >
        //                 {value}
        //             </span>
        */
    gridViewRender = () => {
        if (this.state.viewType == 'Default') {
            return (<Paper key='a'>
                <Grid rows={this.state.rows} columns={this.state.columns} getRowId={this.getRowId}>
                    <SearchState />
                    <FilteringState filters={this.state.columnFilters} onFiltersChange={this.onFiltersChange} />
                    <IntegratedFiltering columnExtensions={this.state.filteringColumnExtensions} />

                    <SortingState defaultSorting={[{ columnName: "LargeCategory", direction: "asc" }]} />
                    <IntegratedSorting />
                    <EditingState onCommitChanges={this.commitChanges} />
                    <Table cellComponent={this.FocusableCell} />
                    <TableColumnResizing defaultColumnWidths={this.state.columnsWidth} />
                    <Table cellComponent={this.cellComponent} />
                    <TableHeaderRow showSortingControls />
                    {(this.state.activeColumnsFilter == true) ? <TableFilterRow /> : undefined}
                    <TableEditRow />
                    <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
                    <TableColumnVisibility defaultHiddenColumnNames={this.state.defaultHiddenColumnNames} onHiddenColumnNamesChange={this.onHiddenColumnNamesChange} />
                    <Toolbar />
                    <TableInlineCellEditing startEditAction='doubleClick' selectTextOnEditStart={true} />
                    <SearchPanel />
                    <ColumnChooser />
                </Grid>
            </Paper>);
        } else if (this.state.viewType == 'Group') {
            return (
                <Paper key='b'>
                    <Grid rows={this.state.rows} columns={this.state.columns}>
                        <DragDropProvider />
                        <SearchState />
                        <FilteringState filters={this.state.columnFilters} onFiltersChange={this.onFiltersChange} />
                        <IntegratedFiltering columnExtensions={this.state.filteringColumnExtensions} />
                        <GroupingState defaultGrouping={[{ columnName: "LargeCategory" }]} />
                        <IntegratedGrouping />
                        <EditingState onCommitChanges={this.commitChanges} />
                        <Table cellComponent={this.FocusableCell} />
                        <TableColumnResizing defaultColumnWidths={this.state.columnsWidth} />
                        <Table cellComponent={this.cellComponent} />
                        <TableHeaderRow />
                        {(this.state.activeColumnsFilter == true) ? <TableFilterRow /> : undefined}
                        <TableEditRow />
                        <TableEditColumn showAddCommand showEditCommand showDeleteCommand />
                        <TableGroupRow />
                        <TableColumnVisibility defaultHiddenColumnNames={this.state.defaultHiddenColumnNames} onHiddenColumnNamesChange={this.onHiddenColumnNamesChange} />
                        <Toolbar />
                        <GroupingPanel />
                        <TableInlineCellEditing startEditAction='doubleClick' selectTextOnEditStart={true} />
                        <SearchPanel />
                        <ColumnChooser />
                    </Grid>
                </Paper>
            );
        }
        // } else if (this.state.viewType == 'Tree') {
        //     return (
        //         <Paper key='c'>
        //             <Grid rows={this.state.rows} columns={this.state.columns}>
        //                 {/* <SearchState />
        //                 <IntegratedFiltering columnExtensions={this.state.filteringColumnExtensions} /> */}

        //                 <TreeDataState />
        //                 <CustomTreeData getChildRows={this.getChildRows} />

        //                 {/* <EditingState onCommitChanges={this.commitChanges} /> */}
        //                 <Table cellComponent={this.FocusableCell} />
        //                 {/* <TableColumnResizing defaultColumnWidths={this.state.columnsWidth} /> */}
        //                 <TableHeaderRow />
        //                 <TableTreeColumn for="LargeCategory"/>
        //                 {/* <TableColumnVisibility defaultHiddenColumnNames={this.state.defaultHiddenColumnNames} onHiddenColumnNamesChange={this.onHiddenColumnNamesChange} />
        //                 <Toolbar />
        //                 <TableInlineCellEditing startEditAction='doubleClick' selectTextOnEditStart={true} />
        //                 <SearchPanel />
        //                 <ColumnChooser /> */}
        //             </Grid>
        //         </Paper>
        //     );
        // }
    }

    render() {
        return (
            <div className='DataGridTreeEditorRoot'>
                <div className='DataGridTreeEditor_Option'>
                    <div className='DataGridTreeEditor_ViewTypeRoot'>
                        <ToggleButtonGroup value={this.state.viewType} exclusive onChange={this.onViewType} aria-label="text alignment" >
                            <ToggleButton value="Default" aria-label="left aligned">기본</ToggleButton>
                            <ToggleButton value="Group" aria-label="right aligned">그룹</ToggleButton>
                            {/* <Button onClick={this.onViewTreeType}>트리</Button> */}
                        </ToggleButtonGroup>
                    </div>

                    <div className='DataGridTreeEditor_ColumnFilterRoot'>
                        <FormControlLabel
                            control={<Switch checked={this.state.activeColumnsFilter} onChange={this.onActiveColumnFilter} name="gilad" />}
                            labelPlacement="top"
                            label="Columns Filter" />
                    </div>
                </div>

                {this.gridViewRender()}
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
DataGridTreeEditor = connect(mapStateToProps, mapDispatchToProps)(DataGridTreeEditor);
export default DataGridTreeEditor;