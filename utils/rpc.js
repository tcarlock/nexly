import axios from 'axios';

class RPC {
  call(procedureName, values = null) {
    const url = `/api/${procedureName}`;
    return axios.post(url, values);
  }

  callForForm(procedureName, values = null) {
    const url = `/api/${procedureName}`;
    return axios.postForm(url, JSON.stringify(values));
  }
}

export default new RPC();