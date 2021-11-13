import axios, { AxiosRequestConfig } from "axios";

export class LocationApi {
  private static timezoneApi = axios.create({
    baseURL: "https://timezoneapi.io/api/",
  });

  private static countriesnowApi = axios.create({
    baseURL: "https://countriesnow.space/api/v0.1/",
  });

  static async getCurrentLocation() {
    try {
      return await LocationApi.timezoneApi.get(
        "ip/?token=axVjUzDuSzdaKDOEymIq"
      );
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  static async getCountryCities(country:string) {
    var data = {
      country: country,
    };
    try {
      return await LocationApi.countriesnowApi.post("countries/cities", data);
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  static async getCountryCitiesNEW(country:string) {
 
    const config:AxiosRequestConfig={
      headers:{
        'X-Parse-Application-Id': 'zK991Rk8mTQhPUASl03SO76fbbG4qwhYH0bPe2An', // This is your app's application id
        'X-Parse-REST-API-Key': 'RBhD5AOVLyYia6NlpydZtXe83ZswdWv4TbSeuYOI', // This is your app's REST API key
      }
    }
    axios.create(config).get('https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=500&order=name&keys=name')

  }

}
