// var mockApiData = [{ "dir": "Bp53063", "bp": "Bp53063", "filename": "log.log", "filetime": 1484390043, "size": 0, "type": "LOG", "parrent": "Bp53063" }, { "dir": "Bp53022", "bp": "Bp53022", "filename": "log.log", "filetime": 1484390083, "size": 0, "type": "LOG", "parrent": "Bp53022" }, { "dir": "Bp53023", "bp": "Bp53023", "filename": "log.log", "filetime": 1484390116, "size": 0, "type": "LOG", "parrent": "Bp53023" }];
// var fetch = require('node-fetch');
import $ from 'jquery';

export const getFiles = () => dispatch => {

    // console.log("getFiles")http://gosportalnfr.ovisoft.ru
    console.log("$.ajax");
    $.ajax({
        method: "GET",
        url: window.myurl + "/delete_folder/files_generator.php",
        dataType: "json",
        cache: false,
        success: function (data) {
            // this.setState({ data: data });
            console.log("data", data);
            dispatch({ type: 'GET_DATA_FILES', payload: data })
        },
        error: function (xhr, status, err) {
            console.error(err.toString());
        }
    })


    // fetch('http://localhost:3000/delete_folder/files_generator.php')
    // fetch('http://gosportalnfr.ovisoft.ru/delete_folder/files_generator.php')
    //     .then(function (res) {
    //         return res.json();
    //     }).then(function (json) {
    //         console.log(json);
    //         // dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [...mockApiData,{id:5,name:body1}] })
    //         dispatch({ type: 'GET_DATA_FILES', payload: json })
    //     });
    // dispatch({ type: 'GET_DATA_FILES' })
}


// componentDidMount: function() {
//     $.ajax({
//         url: this.props.url,
//         dataType: 'json',
//         cache: false,
//         success: function (data) {
//             this.setState({ data: data });
//         }.bind(this),
//         error: function (xhr, status, err) {
//             console.error(this.props.url, status, err.toString());
//         }.bind(this)
//     });
// },