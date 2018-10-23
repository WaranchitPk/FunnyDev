import {
    y2018Type,
    UserAnalyticFindValueYear,
    UserAnalysisFindValueMonth,
    UserAnalyticUserViewFindYear,
    UserAnalyticUserViewFindMonth,
    UserAnalyticUserUseFindYear,
    UserAnalyticUserUseFindMonth,
    UserAnalyticUserViewSumYear,
    UserAnalyticUserUSeFindTrain
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
/// User View
//if you choose year to show data month - user view
export const UserViewFindChooseYear = (state = {}, action) => {
    switch (action.type) {
        case `${UserAnalyticUserViewFindYear}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${UserAnalyticUserViewFindYear}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${UserAnalyticUserViewFindYear}_REJECTED`:
            return {
                ...state,
                err: "error"
            };
        default:
            return state;
    }
};
//if you choose month to show data month&&day - user view
export const UserViewFindChooseMonth = (state = {}, action) => {
    switch (action.type) {
        case `${UserAnalyticUserViewFindMonth}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${UserAnalyticUserViewFindMonth}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${UserAnalyticUserViewFindMonth}_REJECTED`:
            return {
                ...state,
                data: "err"
            };
        default:
            return state;
    }
};

///User Use
//if you choose year to show data month - user view
export const UserUseFindChooseYear = (state = {}, action) => {
    switch (action.type) {
        case `${UserAnalyticUserUseFindYear}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${UserAnalyticUserUseFindYear}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${UserAnalyticUserUseFindYear}_REJECTED`:
            return {
                ...state,
                err: "error"
            };
        default:
            return state;
    }
};
//if you choose month to show data month&&day - user view
export const UserUseFindChooseMonth = (state = {}, action) => {
    switch (action.type) {
        case `${UserAnalyticUserUseFindMonth}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${UserAnalyticUserUseFindMonth}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${UserAnalyticUserUseFindMonth}_REJECTED`:
            return {
                ...state,
                data: "err"
            };
        default:
            return state;
    }
};

//if you choose month to show data month&&day - user view
export const UserViewFindSumYear = (state = {}, action) => {
    switch (action.type) {
        case `${UserAnalyticUserViewSumYear}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${UserAnalyticUserViewSumYear}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${UserAnalyticUserViewSumYear}_REJECTED`:
            return {
                ...state,
                data: "err"
            };
        default:
            return state;
    }
};

export const UserUseFindTrain = (state = {}, action) => {
    switch (action.type) {
        case `${UserAnalyticUserUSeFindTrain}_PENDING`:
            return {
                ...state,
                data: null
            };
        case `${UserAnalyticUserUSeFindTrain}_FULFILLED`:
            return {
                ...state,
                data: action.payload
            };
        case `${UserAnalyticUserUSeFindTrain}_REJECTED`:
            return {
                ...state,
                data: "err"
            };
        default:
            return state;
    }
};
