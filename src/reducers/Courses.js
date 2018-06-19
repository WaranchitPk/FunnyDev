import { dashboardCourseCampus,facultyCourseCampus} from "../actions/types";

export const DashBoardCoursesReducers = (state={},action)=>{
  switch (action.type){
    case dashboardCourseCampus:
      return {
        ...state,
        dataT: action.payload
      };
    default:
      return state;
  }
};
export const FacuntyCoursesReducers = (state={},action) =>{
  switch (action.type){
    case facultyCourseCampus:
      return{
        ...state,
        dataFaculty: action.payload
      };
    default:
      return state;
  }
};
