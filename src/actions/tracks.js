var fetch = require('node-fetch');
// import $ from 'jquery';
var mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Home'
  },
  {
    id: 3,
    name: 'Master of Puppets'
  },
  {
    id: 4,
    name: 'Fade to Black'
  }
];

export const getTracks = () => dispatch => {
  //   console.log("$.ajax", $.ajax({
  //   method: "GET",
  //   url: "http://gosportalnfr.ovisoft.ru/delete_folder/files_generator.php",
  //   dataType: "json"
  // }));
  
  // .success(function (data) {
  //   return data;
  //   console.log("GET Json", data);
  // })


  // fetch('https://api.github.com:443/users/github')
  // fetch('http://localhost:3001/json')
  // fetch('http://gosportalnfr.ovisoft.ru/delete_folder/files_generator.php')
  fetch('http://localhost:3000/delete_folder/files_generator.php')
    .then(function (res) {
      return res.json();
    }).then(function (body1) {
      console.log(body1);
      // dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: [...mockApiData,{id:5,name:body1}] })
      dispatch({ type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
    });

  // fetch('http://localhost:3000/')
  //   .then(function (res) {
  //     console.log(res);
  //     return res.json();
  //   }).then(function (json) {
  //     console.log(json);
  //   });
  setTimeout(() => {

    console.log('I got tracks');


  }, 2000)
}
