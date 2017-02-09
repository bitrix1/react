import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getTracks } from './actions/tracks';
import { getFiles } from './actions/files';
import { sortFiles } from './actions/sortFiles';
import Menu from './Menu';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({ _app_store, _app_store1, onSortFiles, onAddTrack, onFindTrack, onGetTracks, ownProps, onGetFiles }) => {
  // console.log('ownProps', ownProps);
  // console.log('_app_store1', _app_store1);
  let trackInput = '';
  let searchInput = '';

  const onTableClick = (event) => { console.log(event) }
  const addTrack = () => {
    console.log('addTrack', trackInput.value);
    onAddTrack(trackInput.value);
    trackInput.value = '';
  }

  const findTrack = () => {
    console.log('findTrack', searchInput.value);
    onFindTrack(searchInput.value);
  }

  const onClickSortFiles = (e) => {
    onSortFiles(e);
    //.column

  }
  return (
    <div>
      <Menu />
      <div>
        <input type="text" ref={(input) => { trackInput = input }} />
        <button onClick={addTrack}>Add track</button>
      </div>
      <div>
        <input type="text" ref={(input) => { searchInput = input }} />
        <button onClick={findTrack}>Find track</button>12
      </div>
      <div>
        <button onClick={onGetTracks}>Get tracks</button>
      </div>
      <div>
        <button onClick={onGetFiles}>Get Files</button>
      </div>
      <div>
        <button onClick={onSortFiles}>Sort Files</button>
      </div>
      <ul> 
        {/*_app_store.map((track, index) =>
          <li key={index}>
            <Link to={`/tracks/${track.id}`}>{track.name}</Link>
          </li>
        )*/}
      </ul>
      {/*<MuiThemeProvider>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn ><div onClick={onClickSortFiles.bind(null, "bp")}>Bp</div></TableHeaderColumn>
              <TableHeaderColumn><div onClick={onClickSortFiles.bind(null, "filename")}>Name</div></TableHeaderColumn>
              <TableHeaderColumn><div onClick={onClickSortFiles.bind(null, "type")}>Status</div></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {_app_store1.map((file, index) =>

              <TableRow key={index}>
                <TableRowColumn><Link to={`/tracks/${file.dir}`}>{file.bp}</Link></TableRowColumn>
                <TableRowColumn><Link to={`/tracks/${file.dir}`}>{file.filename}</Link></TableRowColumn>
                <TableRowColumn><Link to={`/tracks/${file.dir}`}>{file.type}</Link></TableRowColumn>
              </TableRow>

            )}

          </TableBody>
        </Table>
      </MuiThemeProvider>*/}
      <table>
        <thead>
          <div>
            <th style={{ cursor: "pointer" }} onClick={onClickSortFiles.bind(null, "bp")}>bp</th>
            <th style={{ cursor: "pointer" }} onClick={onClickSortFiles.bind(null, "filename")}>filename</th>
            <th style={{ cursor: "pointer" }} onClick={onClickSortFiles.bind(null, "type")}>type</th>
            <th style={{ cursor: "pointer" }} onClick={onClickSortFiles.bind(null, "filetime")}>filetime</th>
            <th style={{ cursor: "pointer" }} onClick={onClickSortFiles.bind(null, "size")}>size</th>
          </div>
        </thead>
        <tbody>
          {_app_store1.map((file, index) =>
            <div key={index}>
              <div style={{
                textAlign: "left", /* Выравнивание по левому краю */
                background: "#ccc", /* Цвет фона ячеек */
                padding: "5px", /* Поля вокруг содержимого ячеек */
                border: "1px solid black" /* Граница вокруг ячеек */
              }}>{file.bp}</div>
              <div >{file.filename}</div>
              <div >{file.type}</div>
              <div >{file.filetime}</div>
              <div >{file.size}</div>
            </div>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default connect(
  (state, ownProps) => ({
    _app_store: state.tracks.filter(track => track.name.includes(state.filterTracks)),
    _app_store1: state.files.filter(files => files.filename.includes(state.filterTracks) ||
      files.bp.includes(state.filterTracks)).sort((a, b) => {
        let column = state.sortFiles.column
        console.log("sort", column)
        if (a[column] > b[column]) {//column
          return -1 * state.sortFiles.sort;
        }
        if (a[column] < b[column]) {
          return 1 * state.sortFiles.sort;
        }
        // a должно быть равным b
        return 0
      }),
    ownProps
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (name) => {
      console.log('name', name);
      dispatch({ type: 'FIND_TRACK', payload: name });
    },
    onGetTracks: () => {
      dispatch(getTracks());
    },
    onGetFiles: () => {
      dispatch(getFiles());
    },
    onSortFiles: (column) => {
      dispatch(sortFiles(column));
    }
  })
)(App);
