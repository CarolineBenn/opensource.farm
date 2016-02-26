angular
  .module('logging')
  .controller('WeatherController', WeatherController);

WeatherController.$inject = ["$http"];
function WeatherController($http){
  var self = this;

  function getWeather(){
    $http
    .get('https://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/322494?res=3hourly&?key=e652296c-758b-458f-a584-d2360ae6606a')
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

      for (i = 0; i < 2; i++) {
        self.W = res.data.SiteRep.DV.Location.Period[i].Rep[0].W;
        
        if (self.W == 'NA')  { self.W = "N/A" }     
        if (self.W == 0)  { self.W = "Clear night" }     
        if (self.W == 1)  { self.W = "Sunny day" }          
        if (self.W == 2)  { self.W = "Partly Cloudy" }     
        if (self.W == 3)  { self.W = "Partly Cloudy" }     
        if (self.W == 4)  { self.W = "Not used" }     
        if (self.W == 5)  { self.W = "Misty" }     
        if (self.W == 6)  { self.W = "Foggy" }     
        if (self.W == 7)  { self.W = "Cloudy" }
        if (self.W == 8)  { self.W = "Overcast" }     
        if (self.W == 9)  { self.W = "Light rain shower" }   
        if (self.W == 10) { self.W = "Light rain shower" }
        if (self.W == 11) { self.W = "Drizzle" }
        if (self.W == 12) { self.W = "Light rain" }
        if (self.W == 13) { self.W = "Heavy rain shower" }
        if (self.W == 14) { self.W = "Heavy rain shower" }
        if (self.W == 15) { self.W = "Heavy rain" }
        if (self.W == 16) { self.W = "Sleet shower" }
        if (self.W == 17) { self.W = "Sleet shower" }
        if (self.W == 18) { self.W = "Sleet" }
        if (self.W == 19) { self.W = "Hail shower" }
        if (self.W == 20) { self.W = "Hail shower" }
        if (self.W == 21) { self.W = "Hail" }
        if (self.W == 22) { self.W = "Light snow shower" }
        if (self.W == 23) { self.W = "Light snow shower" }
        if (self.W == 24) { self.W = "Light snow" }
        if (self.W == 25) { self.W = "Heavy snow shower" }
        if (self.W == 26) { self.W = "Heavy snow shower" }
        if (self.W == 27) { self.W = "Heavy snow" }
        if (self.W == 28) { self.W = "Thunder shower" }
        if (self.W == 29) { self.W = "Thunder shower" }
        if (self.W == 30) { self.W = "Thunder" }
      }

      for (j = 0; j < 2; j++){
        self.V = res.data.SiteRep.DV.Location.Period[j].Rep[0].V;

        if (self.V == 'UN') { self.V = "Unknown" }
        if (self.V == 'VP') { self.V = "Very poor - Less than 1km" }
        if (self.V == 'PO') { self.V = "Poor - Between 1-4km" }
        if (self.V == 'MO') { self.V = "Moderate - Between 4-10km" }
        if (self.V == 'GO') { self.V = "Good - Between 10-20km" }
        if (self.V == 'VG') { self.V = "Very good - Between 20-40km" }
        if (self.V == 'EX') { self.V = "Excellent - More than 40km" }
      }

      // To get rid of the 'Z' at the end of the date:
      self.updated = self.time.split('')
      self.updated.pop();
      self.updatedTime = self.updated.join('');
    });
  }
  getWeather();  
}