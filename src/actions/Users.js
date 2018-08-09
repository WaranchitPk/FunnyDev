import {
  y2018Type,
  UserAnalyticFindYear,
  UserAnalyticFindValueYear,
  UserAnalysisFindValueMonth,
  UserAnalyticFindMonth
} from "./types";

import {
  y2018,
  y2017
} from "../mockData/Users";
import axios from "axios";
import { api } from "../config";

export const y2018Action = (id) => {
  if (id === 2018) {
    return dispatch => {
      dispatch({
        type: y2018Type,
        payload: y2018,
      });
    };
  } else {
    return dispatch => {
      dispatch({
        type: y2018Type,
        payload: y2017,
      });
    };
  }
};
export const findYear = year => (
  dispatch => {
    dispatch({
      type: UserAnalyticFindYear,
      payload: axios.get(`${api}/users/findYear/${year}`)
    });
  }
);
export const findValueYear = () => (
  dispatch => {
    dispatch({
      type: UserAnalyticFindValueYear,
      payload: axios.get(`${api}/users/valueYear`)
    });
  }
);
export const findValueMonth = year => (
  dispatch => {
    dispatch({
      type: UserAnalysisFindValueMonth,
      payload: axios.get(`${api}/users/valueMonth/${year}`)
    });
  }
);
export const testApi = (year) => {
  axios.get(`${api}/users/valueMonth/${year}`).then(data => {
    console.log("DataMonth", data);
  });
};
export const findMonth = (year, month) => (
  dispatch => {
    dispatch({
      type: UserAnalyticFindMonth,
      payload: axios.get(`${api}/users/findMonth/${year}/${month}`),
    });
  }
);