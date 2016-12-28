function request(endpoint) {
  const url = 'https://jsonplaceholder.typicode.com';

  fetch(url + endpoint, {
      method: 'get',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(function(res) {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(json) {
      // handle json object
      console.log('JSON response==>', json);
      document.getElementById('log').innerHTML += JSON.stringify(json, null, '\t');
    });
}

request('/posts?userId=1');
