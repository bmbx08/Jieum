import { adminLoginInfo } from "../../common/adminLoginInfo";

let initialState={
    currentUserData:{},
    userDataArray:[adminLoginInfo],
    createdStudyList: [],
}

function reducer(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case "CREATE_USERDATA":
            console.log("store is accessed!!")
            return{...state,userDataArray:[...state.userDataArray,payload.userData]}

        case "LOGIN_USER":
            return{...state,currentUserData:payload.matchedData}

        //     return{...state}

        case "CREATE_STUDYGROUP":
            return {...state,createdStudyList:[...state.createdStudyList,payload.createdStudyData]}

        default:
            return{...state}
            
    }
}

export default reducer;

//how to use useDispatch/useSelector
// let count = useSelector((state)=>state.count);
  // const dispatch = useDispatch();

  // const increase= ()=>{
  //   dispatch({type:"INCREMENT"})
  // }