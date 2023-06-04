const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

function joinUrl(baseurl, url) {
  return `${baseurl}/${url}`;
}
class Service {
  constructor() {
    this.domain = "http://localhost:3000";
  }
  request(url, method, data = null) {
    url = joinUrl(this.domain, url);
    const option = {
      headers,
      method,
    };
    if (data) {
      option.body = JSON.stringify({ ...data });
    }
    return fetch(url, option);
  }
  get(url) {
    const method = "GET";
    if (url) {
      return this.request(url, method).then((res) => res.json());
    }
  }
}

export default Service;
