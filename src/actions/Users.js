import {
  y2018Type,
  UserAnalyticFindValueYear,
  UserAnalysisFindValueMonth,
  UserAnalyticUserViewFindYear,
  UserAnalyticUserViewFindMonth,
  UserAnalyticUserUseFindYear,
  UserAnalyticUserUseFindMonth,
  UserAnalyticUserViewSumYear
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
        payload: y2018
      });
    };
  } else {
    return dispatch => {
      dispatch({
        type: y2018Type,
        payload: y2017
      });
    };
  }
};
//find value year - Select
export const findValueYear = () => (
  dispatch => {
    dispatch({
      type: UserAnalyticFindValueYear,
      payload: axios.get(`${api}/users/valueYear`)
    });
  }
);
//find value month - Select
export const findValueMonth = year => (
  dispatch => {
    dispatch({
      type: UserAnalysisFindValueMonth,
      payload: axios.get(`${api}/users/valueMonth/${year}`)
    });
  }
);
//find User View data month if your choose year - Chart
export const UserViewFindMonthData = year => (
  dispatch => {
    dispatch({
      type: UserAnalyticUserViewFindYear,
      payload: axios.get(`${api}/users/userview/findYear/${year}`)
    });
  }
);
//find User View data day if your choose year&&month - Chart
export const UserViewFindDayData = (year, month) => (
  dispatch => {
    dispatch({
      type: UserAnalyticUserViewFindMonth,
      payload: axios.get(`${api}/users/userview/findMonth/${year}/${month}`)
    });
  }
);
//find User Use data month if your choose year - Chart
export const UserUseFindMonthData = year => (
  dispatch => {
    dispatch({
      type: UserAnalyticUserUseFindYear,
      payload: axios.get(`${api}/users/useruse/findYear/${year}`)
    });
  }
);
//find User Use data day if your choose year&&month - Chart
export const UserUseFindDayData = (year, month) => (
  dispatch => {
    dispatch({
      type: UserAnalyticUserUseFindMonth,
      payload: axios.get(`${api}/users/useruse/findMonth/${year}/${month}`)
    });
  }
);
export const testApi = (year) => {
  axios.get(`${api}/users/userview/valueMonth/${year}`).then(data => {
    console.log("DataMonth", data);
  });
};

export const UserViewFindSumYear = year => (
  dispatch => {
    dispatch({
      type: UserAnalyticUserViewSumYear,
      payload: axios.get(`${api}/users/userview/findSum/${year}`)
    });
  }
);