export default class API {
  url = 'http://tars.us-east-2.elasticbeanstalk.com';
  constructor() {
  }

  getAccessToken() {
    return !(localStorage.getItem('access_token')) ? 'Basic ZWZrb24tYXRjczpueHRsaWZl' : 'Bearer ' + localStorage.getItem('access_token');
  }

  addHeaders(optionalHeaders) {

    let requestHeaders = new Headers({
      'Authorization': this.getAccessToken()
    })
    if (optionalHeaders) {
      for (const header of optionalHeaders.keys()) {
        requestHeaders = requestHeaders.append(header, optionalHeaders.get(header));
      }
    }
    return requestHeaders;
  }

  get(endpoint, paraany, reqOpts) {
    const headers = this.addHeaders(reqOpts);
    return fetch(this.url + '/' + endpoint, { method: 'GET', headers: headers })
  }
  post(endpoint, body, reqOpts) {
    const headers = this.addHeaders(reqOpts);
    return fetch(this.url + '/' + endpoint, { method: 'POST', headers: headers, body: body })
  }
  put(endpoint, body, reqOpts) {
    const headers = this.addHeaders(reqOpts);
    return fetch(this.url + '/' + endpoint, { method: 'PUT', headers: headers, body: body })
  }
  delete(endpoint, reqOpts) {
    const headers = this.addHeaders(reqOpts);
    return fetch(this.url + '/' + endpoint, { method: 'DELETE', headers: headers })
  }
  patch(endpoint, body, reqOpts) {
    const headers = this.addHeaders(reqOpts);
    return fetch(this.url + '/' + endpoint, { method: 'PATCH', headers: headers, body: body })
  }
}