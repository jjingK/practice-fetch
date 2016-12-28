function request(endpoint) {
  const url = 'https://jsonplaceholder.typicode.com';

  return fetch(`${url}${endpoint}`, {
      method: 'get',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        console.log('');
        return res.json();
      }
    })
    .then(json => {
      // handle json object
      console.log('JSON response ==>', json);
      return json;
    })
    .catch(error => {
      console.error('Parsing failed', error);
    });
}

const promise = request('/posts?userId=1');
promise.then((json => {
  document.getElementById('log').innerHTML += JSON.stringify(json, null, '\t')
}));
