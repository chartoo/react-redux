import axios from "axios";
import * as types from "./types"

export const fetchData = () => async (dispatch) => {
    await axios.get('http://localhost:3000/data')
        .then(response => {
            return dispatch({type: types.FETCH_DATA, payload: response.data})
        }).catch(error => {
            console.log(error)
            return dispatch({type: types.FETCH_DATA_ERROR, payload: true})
        });    
    }
