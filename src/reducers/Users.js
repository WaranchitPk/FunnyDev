import {
  y2018Type,
  UserAnalyticFindYear,
  UserAnalyticFindValueYear,
  UserAnalysisFindValueMonth,
  UserAnalyticFindMonth
} from "../actions/types";

export function Y2018Reducer(state = {}, action) {
  switch (action.type) {
    case y2018Type:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
export const findChooseYear = (state = {}, action) => {
  switch (action.type) {
    case `${UserAnalyticFindYear}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${UserAnalyticFindYear}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${UserAnalyticFindYear}_REJECTED`:
      return {
        ...state,
        err: "error"
      };
    default:
      return state;
  }
};
export const findValueYear = (state = {}, action) => {
  switch (action.type) {
    case `${UserAnalyticFindValueYear}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${UserAnalyticFindValueYear}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${UserAnalyticFindValueYear}_REJECTED`:
      return {
        ...state,
        data: "err"
      };
    default:
      return state;
  }
};

export const findValueMonth = (state = {}, action) => {
  switch (action.type) {
    case `${UserAnalysisFindValueMonth}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${UserAnalysisFindValueMonth}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${UserAnalysisFindValueMonth}_REJECTED`:
      return {
        ...state,
        data: "err"
      };
    default:
      return state;
  }
};

export const findChooseMonth = (state = {}, action) => {
  switch (action.type) {
    case `${UserAnalyticFindMonth}_PENDING`:
      return {
        ...state,
        data: null
      };
    case `${UserAnalyticFindMonth}_FULFILLED`:
      return {
        ...state,
        data: action.payload
      };
    case `${UserAnalyticFindMonth}_REJECTED`:
      return {
        ...state,
        data: "err"
      };
    default:
      return state;
  }
};