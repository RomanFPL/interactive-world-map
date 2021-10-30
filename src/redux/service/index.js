import axios from "axios";

class WorldBanckApiService {
    _url = "http://api.worldbank.org/v2/";
  
    getAllCountries = async () => {
      try{
        const countryList = await axios.get(this._url + "country?format=json&per_page=300");
        return countryList.data[1];
      }catch(e){
        console.log("It is impossible to get all countries from api!");
      }
    }
  
    getCountryIndicator = async (countryId, indicator) => {
      try{
        const indicatorData = await axios.get(this._url + `country/${countryId}/indicator/${indicator}?mrnev=10&format=json`);
        return indicatorData.data[1];
      }catch(e){
        console.log("It is impossible to get indicator of the country from api!");
      }
    }
}
const apiWB = new WorldBanckApiService();

export default apiWB;