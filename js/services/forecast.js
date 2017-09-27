app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=Tirana,al&appid=b8bc7ccdb132066a595092630ea0d503') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
