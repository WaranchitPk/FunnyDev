import { mainCourse,facultyStat} from "../actions/types";

export function MainCourses(state = {}, action) {
  switch (action.type) {
    case mainCourse:
      return {
        ...state,
        data: action.payload
      };
    default: {
      return state
    }
  }
}

export function Faculty(state={},action) {
  switch (action.type){
    case facultyStat:
      return{
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}