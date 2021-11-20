import axios, { AxiosRequestConfig } from "axios";

export class LocationApi {
  private static timezoneApi = axios.create({
    baseURL: "https://timezoneapi.io/api/",
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

  static async getCountryCities(country: string) {
    const countryId = await LocationApi.getCountryId(country);

    if (countryId) {
      const where = encodeURIComponent(
        JSON.stringify({
          country: {
            __type: "Pointer",
            className: "Continentscountriescities_Country",
            objectId: countryId,
          },
          population: {
            $gte: 100000,
          },
        })
      );

      const config: AxiosRequestConfig = {
        headers: {
          "X-Parse-Application-Id": "zK991Rk8mTQhPUASl03SO76fbbG4qwhYH0bPe2An", // This is your app's application id
          "X-Parse-REST-API-Key": "RBhD5AOVLyYia6NlpydZtXe83ZswdWv4TbSeuYOI", // This is your app's REST API key
        },
      };
      try {
        return await axios
          .create(config)
          .get(
            `https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=500&keys=name,country,location&where=${where}`
          );
      } catch (err) {
        return null;
      }
    } else {
      return null;
    }
  }

  private static async getCountryId(country: string) {
    const where = encodeURIComponent(
      JSON.stringify({
        name: country,
      })
    );
    const config: AxiosRequestConfig = {
      headers: {
        "X-Parse-Application-Id": "zK991Rk8mTQhPUASl03SO76fbbG4qwhYH0bPe2An", // This is your app's application id
        "X-Parse-REST-API-Key": "RBhD5AOVLyYia6NlpydZtXe83ZswdWv4TbSeuYOI", // This is your app's REST API key
      },
    };
    const countryResp = await axios
      .create(config)
      .get(
        `https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=1&where=${where}`
      );
    if (countryResp.status == 200) {
      const countryId =
        countryResp.data.results && countryResp.data.results.length > 0
          ? countryResp.data.results[0].objectId
          : null;
      return countryId;
    } else {
      return null;
    }
  }
}
