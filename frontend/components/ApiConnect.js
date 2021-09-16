import Axios from 'axios'

class ApiConnect{
    BACKEND_URL = "http://localhost:8000/";

    post = (path, data, config=null) => {
        var url = this.BACKEND_URL + path;
        return Axios.post(url, JSON.stringify(data), config)
    }

    get = (path, config=null) => {
        var url = this.BACKEND_URL + path;
        return Axios.get(url, config)
    }
}

export default new ApiConnect()