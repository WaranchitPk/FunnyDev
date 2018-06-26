import { chiangmaiType,loadOrtherStat} from "./types";
import axios from 'axios';
import {api} from '../config';
import { chiangmaiData_Top10,chiangmaiData_Top50,chiangmaiData_Top100, pitsanulok_Top10,pitsanulok_Top50,pitsanulok_Top100} from "../mockData/Orther";


export const find = ({limit,campus}) =>{
  return dispatch =>{
  console.log(limit,campus);
    return axios.get(`${api}/orther?limit=${limit}&campus=${campus}`)
      .then((result)=>{
        dispatch({
          type: loadOrtherStat,
          payload: result
        })
      })
  }
};

export const chiangmai = (type, rating) => {
  if (type === 1) {
    if (rating === 10) {
      return dispatch => {
        dispatch({
          type: chiangmaiType,
          payload: chiangmaiData_Top10()
        });
      };
    } else if (rating === 50) {
      return dispatch => {
        dispatch({
          type: chiangmaiType,
          payload: chiangmaiData_Top50()
        });
      };
    } else {
      return dispatch => {
        dispatch({
          type: chiangmaiType,
          payload: chiangmaiData_Top100()
        });
      };
    }
  }
  if (type === 2) {
    if (rating === 10) {
      return dispatch => {
        dispatch({
          type: chiangmaiType,
          payload: pitsanulok_Top10()
        });
      };
    } else if (rating === 50) {
      return dispatch => {
        dispatch({
          type: chiangmaiType,
          payload: pitsanulok_Top50()
        });
      };
    } else {
      return dispatch => {
        dispatch({
          type: chiangmaiType,
          payload: pitsanulok_Top100()
        });
      };
    }
  }
};
