import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';

class About extends Component {
  render() {
    return (
      <div>
        <Menu />
        This is our cool music app
                  {this.props._app_store1.map((file, index) =>
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
      </div>
    );
  }
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
  dispatch => ({})
)(About);
