angular
  .module('logging')
  .controller('WeatherController', WeatherController);

WeatherController.$inject = ["$http"];
function WeatherController($http){
  var self = this;

  function getWeather(){
    $http
    .get('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/322494?res=3hourly&?key=e652296c-758b-458f-a584-d2360ae6606a')
    .then(function(res){
      console.log(res.data)
      console.log(res.data.SiteRep.DV.Location.Period[0].Rep[0]);

      // Most recent weather update:
      self.weather = res.data.SiteRep.DV.Location.Period[0].Rep[0] 

      // Forecast for 24 hours ahead:
      self.tomorrow = res.data.SiteRep.DV.Location.Period[1].Rep[0] 

      // Gives the latest update time/date:
      self.time = res.data.SiteRep.DV.Location.Period[0].value;  

      // Convert into readable language:
      console.log(res.data.SiteRep.DV.Location.Period[0].Rep[0].W)

      // if (res.data.SiteRep.DV.Location.Period[0].Rep[0]W == 2) {
      //   console.log("It's a bit cloudy")
      // }     

      // To get rid of the 'Z' at the end of the date:
      self.updated = self.time.split('')
      self.updated.pop();
      self.updatedTime = self.updated.join('');
    });
  }
  getWeather();  
}