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
  };
  return fetch(uri, params)
}

export {request};
