var data = [];

d3.json('./data/daily-DE-info.json', function(json){

  $.each(json.daily, function(item){
    data.push([new Date(item.dt), +item.value]);
  });
  console.log(data[2]);
  console.log(data[413]);
  // console.log(data[90]);


  // g = new Dygraph(document.getElementById("graph"),
  //   data,
  //   {
  //     rollPeriod: 7,
  //     showRoller: true
  //   }
  //   );



});


// console.log(data.length);


