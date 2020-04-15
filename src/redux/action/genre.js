import Axios from 'axios';
const HOST = "/api/v1/";

export const getGenre = () => {
    return {
        type: 'GET_GENRE',
        payload: Axios.get(HOST + "genre")
    }
}
