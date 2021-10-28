import axios from "axios"

class ApiService {
  _url = "http://jsonplaceholder.typicode.com/posts"

  getData = async() => {
    try{
      const temp : any = await axios.get("http://jsonplaceholder.typicode.com/posts");
      return temp.data
    } catch(e) {
      console.dir(e);
    }
  }

}

interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

const apiService = new ApiService();

export function* helloSaga() {
    yield console.log('Hello Sagas!')
  }

export function* getApiData(){
  const temp:ResponseGenerator | void = yield axios.get("http://jsonplaceholder.typicode.com/posts");
  yield console.log(temp);
}