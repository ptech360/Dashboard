import API from './APIUtils';

export default class UserAPI {
  constructor() {
    this.api = new API()
  }

  login(data) {
    return this.api.post('oauth/token?grant_type=password&username=' + data.username + '&password=' + data.password, {})
      .then(response => response.json());
  }
}