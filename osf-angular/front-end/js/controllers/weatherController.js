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
      self.weather = res.data.SiteRep.DV.Location.Period[0].Rep[0]   
      self.updated = res.data.SiteRep.DV.Location.Period[0].value;   
      console.log(res.data.SiteRep.DV.Location.Period[0].Rep[0]);
    });
  }

  getWeather();
}