import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class LocationApi {


  static async getCountryCities() {
    var data = {
        "country": "russia"
    }

var config:AxiosRequestConfig = {
  method: 'post',
  url: 'https://countriesnow.space/api/v0.1/countries/cities',
  headers: { },
  data : data
};


    axios(config)
      .then(function (response:AxiosResponse) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error:any) {
        console.log(error);
      });
  }
}
