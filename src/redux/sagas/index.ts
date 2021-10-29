import axios from "axios"

interface ResponseGenerator{
  config?:any,
  data?: Array<any>,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}


class WorldBanckApiService {
  _url = "http://api.worldbank.org/v2/";
  _format = "?format=json";

  getAllCountries = async () => {
    try{
      const countruList = await axios.get(this._url + "country"+this._format+"&per_page=300");
      return countruList.data;
    }catch(e){
      console.log("It is impossible to get all countries from api!");
    }
  }


  getData = async() => {
    try{
      const temp : any = await axios.get(this._url);
      return temp.data
    } catch(e) {
      console.dir(e);
    }
  }

}

const apiWB = new WorldBanckApiService();

export function* helloSaga() {
    yield console.log('Hello Sagas!')
  }

export function* getApiData(){
  const temp:ResponseGenerator | void = yield apiWB.getAllCountries();
  yield console.log(temp);
}