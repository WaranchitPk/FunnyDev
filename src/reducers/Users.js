import {
  y2018Type,
  UserAnalyticFindYear,
  UserAnalyticFindValueYear,
} from '../actions/types';

export function Y2018Reducer(state = {}, action) {
  switch (action.type) {
    case y2018Type:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
};
export const findChooseYear = (state = {}, action) => {
  switch (action.type) {
    case `${UserAnalyticFindYear}_PENDING`:
      return {
        ...state,
        data: null,
      };
    case `${UserAnalyticFindYear}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
      };
    case `${UserAnalyticFindYear}_REJECTED`:
      return {
        ...state,
        err: 'error',
      };
    default:
      return state;
  }
};
export const findValueYear = (state = {}, action) => {
  switch (action.type) {
    case  `${UserAnalyticFindValueYear}_PENDING`:
      return {
        ...state,
        data: null,
      };
    case `${UserAnalyticFindValueYear}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
      };
    case `${UserAnalyticFindValueYear}_REJECTED`:
      return {
        ...state,
        data: 'err',
      };
    default:
      return state;
  }
};