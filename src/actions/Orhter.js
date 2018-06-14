import { chiangmaiType } from "./types";
import { chiangmaiData_Top10,chiangmaiData_Top50,chiangmaiData_Top100, pitsanulok_Top10,pitsanulok_Top50,pitsanulok_Top100 } from "../mockData/Orther";

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
