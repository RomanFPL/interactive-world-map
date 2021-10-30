import {all} from "redux-saga/effects"
import indicator from "../enums/indicator";
import apiWB from "../service";

interface ResponseGenerator{
  config?:any,
  data?: any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}
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