import Axios from 'axios';

export class HttpClient {
  public axios = Axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
  });
}
