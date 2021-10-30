import axios from "axios"
import {all} from "redux-saga/effects"
import indicator from "../enums/indicator";

interface ResponseGenerator{
  config?:any,
  data?: Array<Object>,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}


class WorldBanckApiService {
  _url = "http://api.worldbank.org/v2/";

  getAllCountries = async () => {
    try{
      const countryList = await axios.get(this._url + "country?format=json&per_page=300");
      return countryList.data;
    }catch(e){
      console.log("It is impossible to get all countries from api!");
    }
  }

  getCountryIndicator = async (countryId : string, indicator : indicator) => {
    try{
      const indicatorData = await axios.get(this._url + `country/${countryId}/indicator/${indicator}?mrnev=10&format=json`);
      return indicatorData.data;
    }catch(e){
      console.log("It is impossible to get indicator of the country from api!");
    }
  }


}

const apiWB = new WorldBanckApiService();

function* getApiCountries(){
  const resData:ResponseGenerator | void = yield apiWB.getAllCountries();
  yield console.log(resData);
}

function* getCountryData(countryId : string, indicator : indicator){
  const resData:ResponseGenerator | void = yield apiWB.getCountryIndicator(countryId, indicator);
  yield console.log(resData);
}

export default function* rootSaga(){
  yield all([
    getApiCountries(),
    getCountryData("UKR", indicator.gdp)
  ])
}