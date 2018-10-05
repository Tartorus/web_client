const URL = 'http://0.0.0.0:8080'


const request ={
  post
}

function post(uri, data=null) {
  if (data){
    data = JSON.stringify(data)
  };

  let params = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json'},
    body: data,
    method: 'POST',
    mode: 'no-cors'
  };

  let url = URL + uri;
  return fetch(url, params)
}

export {request};
