/*

var jsoncallback = function(data){
  console.log(JSON.parse(data));
};

$.ajax({
  type: 'JSONP',
  url: 'http://198.23.83.2:6543/pointInfo/monthlyGen/30003',
  dataType: 'jsonp',
  // data: 'id=10',
  // jsonp: 'jsoncallback',
  jsonp: true,
  jsonpCallback: jsoncallback,

  success: function (data) {
    console.log('success!');
    console.log(JSON.parse(data));
  },

  error: function(jqXHR, textStatus, e){
    console.log(e);
    console.log(textStatus);
  }

});

*/